import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const TickerContext = createContext(null)

const API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY

const DEFAULT_SYMBOLS = [
  'EUR/USD',
  'GBP/USD',
  'NVDA',
  'AAPL',
  'GS',
  'GOOGL',
  'AMZN',
  'TSLA',
]

const REFRESH_INTERVAL_MS = 15 * 60 * 1000 // 15 minutes to stay within free tier limits

const SYMBOL_METADATA = {
  'EUR/USD': { name: 'Euro / US Dollar', symbol: '€', category: 'Forex', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.12)', decimals: 4 },
  'GBP/USD': { name: 'British Pound / US Dollar', symbol: '£', category: 'Forex', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.12)', decimals: 4 },
  'NVDA': { name: 'NVIDIA Corporation', symbol: 'N', category: 'Stocks', color: '#16a34a', bgColor: 'rgba(22, 163, 74, 0.12)', decimals: 2 },
  'AAPL': { name: 'Apple Inc.', symbol: 'A', category: 'Stocks', color: '#a3a3a3', bgColor: 'rgba(163, 163, 163, 0.12)', decimals: 2 },
  'GS': { name: 'Goldman Sachs Group', symbol: 'G', category: 'Stocks', color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.12)', decimals: 2 },
  'GOOGL': { name: 'Alphabet Inc. (Google)', symbol: 'G', category: 'Stocks', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.12)', decimals: 2 },
  'AMZN': { name: 'Amazon.com, Inc.', symbol: 'a', category: 'Stocks', color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.12)', decimals: 2 },
  'TSLA': { name: 'Tesla, Inc.', symbol: 'T', category: 'Stocks', color: '#eab308', bgColor: 'rgba(234, 179, 8, 0.12)', decimals: 2 }
}

const MOCK_INITIAL = {
  'EUR/USD': { price: 1.0855, change: 0.38 },
  'GBP/USD': { price: 1.2506, change: -0.59 },
  'NVDA': { price: 128.40, change: 4.12 },
  'AAPL': { price: 180.50, change: 1.20 },
  'GS': { price: 348.50, change: 0.85 },
  'GOOGL': { price: 164.20, change: -0.42 },
  'AMZN': { price: 178.60, change: 1.15 },
  'TSLA': { price: 218.40, change: -2.31 }
}

const CACHE_KEY = 'uh_market_quotes'
const CACHE_TIME_KEY = 'uh_market_quotes_timestamp'

function getCachedQuotes() {
  try {
    const data = localStorage.getItem(CACHE_KEY)
    const stamp = localStorage.getItem(CACHE_TIME_KEY)
    if (data && stamp) {
      const age = Date.now() - parseInt(stamp, 10)
      if (age < REFRESH_INTERVAL_MS) {
        return JSON.parse(data)
      }
    }
  } catch (e) {
    console.warn('Failed to retrieve quotes from localStorage cache:', e)
  }
  return null
}

function saveQuotesToCache(quotes) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(quotes))
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString())
  } catch (e) {
    console.warn('Failed to save quotes to localStorage cache:', e)
  }
}

export function TickerProvider({ children }) {
  const [quotes, setQuotes] = useState(() => {
    const cached = getCachedQuotes()
    if (cached) return cached
    
    // Map initial mock quotes structure
    const initialQuotes = {}
    DEFAULT_SYMBOLS.forEach((sym) => {
      initialQuotes[sym] = {
        price: MOCK_INITIAL[sym].price,
        close: MOCK_INITIAL[sym].price,
        change: 0,
        percent_change: MOCK_INITIAL[sym].change
      }
    })
    return initialQuotes
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchQuotes = useCallback(async () => {
    // Check cache first to avoid multiple API calls during refreshes
    const cached = getCachedQuotes()
    if (cached) {
      setQuotes(cached)
      return
    }

    if (!API_KEY) {
      setError('Missing API key. Set VITE_TWELVE_DATA_API_KEY in your .env file.')
      return
    }

    setLoading(true)
    try {
      const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(
        DEFAULT_SYMBOLS.join(',')
      )}&apikey=${API_KEY}`

      const res = await fetch(url)
      const data = await res.json()

      // Normalize data shapes
      const normalized = DEFAULT_SYMBOLS.length === 1 ? { [DEFAULT_SYMBOLS[0]]: data } : data

      const firstEntry = Object.values(normalized)[0]
      if (firstEntry && firstEntry.status === 'error') {
        setError(firstEntry.message || 'API returned an error.')
      } else {
        setError(null)
        setQuotes(normalized)
        saveQuotesToCache(normalized)
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch quotes.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchQuotes() // Try to fetch once on mount (or use cache)
    const id = setInterval(fetchQuotes, REFRESH_INTERVAL_MS)
    return () => clearInterval(id)
  }, [fetchQuotes])

  // Simulation fallback: slightly wiggle prices to keep the UI interactive and dynamic between API refreshes
  useEffect(() => {
    const wiggleId = setInterval(() => {
      setQuotes((prev) => {
        const next = { ...prev }
        let changed = false
        DEFAULT_SYMBOLS.forEach((sym) => {
          const q = next[sym]
          if (q) {
            const currentPrice = parseFloat(q.close ?? q.price)
            if (!isNaN(currentPrice)) {
              const delta = currentPrice * (Math.random() * 0.0001 - 0.00005)
              next[sym] = {
                ...q,
                price: currentPrice + delta,
                close: currentPrice + delta
              }
              changed = true
            }
          }
        })
        return changed ? next : prev
      })
    }, 4000)

    return () => clearInterval(wiggleId)
  }, [])

  const tickers = DEFAULT_SYMBOLS.map((sym) => {
    const meta = SYMBOL_METADATA[sym]
    const quote = quotes[sym]
    
    const price = parseFloat(quote?.close ?? quote?.price ?? MOCK_INITIAL[sym].price)
    const change = parseFloat(quote?.percent_change ?? quote?.change ?? MOCK_INITIAL[sym].change)

    return {
      pair: sym,
      id: sym.toLowerCase().replace('/', ''),
      price,
      change,
      name: meta.name,
      symbol: meta.symbol,
      badge: meta.symbol,
      category: meta.category,
      color: meta.color,
      bgColor: meta.bgColor,
      decimals: meta.decimals,
      inGrid: true
    }
  })

  return React.createElement(
    TickerContext.Provider,
    { value: { tickers, error, loading } },
    children
  )
}

export function useTickers() {
  const context = useContext(TickerContext)
  if (!context) throw new Error('useTickers must be used within TickerProvider')
  return context.tickers
}

export function formatPrice(price, pair) {
  const meta = SYMBOL_METADATA[pair]
  const decimals = meta ? meta.decimals : 2
  return price.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

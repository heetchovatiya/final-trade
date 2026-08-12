import { useEffect, useState } from 'react'

const INITIAL = [
  { pair: 'EUR/USD', price: 1.0855, change: 0.38, name: 'Euro / US Dollar', symbol: '€', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.1)', inGrid: true },
  { pair: 'GBP/USD', price: 1.2506, change: -0.59, name: 'Pound / US Dollar', symbol: '£', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.1)', inGrid: true },
  { pair: 'XAU/USD', price: 2748.50, change: 1.85, name: 'Gold Spot / USD', symbol: 'Au', color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.1)', inGrid: true },
  { pair: 'NVDA', price: 128.40, change: 4.12, name: 'NVIDIA Corp', symbol: 'N', color: '#16a34a', bgColor: 'rgba(22, 163, 74, 0.1)', inGrid: true },
  { pair: 'AAPL', price: 180.50, change: 1.20, name: 'Apple Inc.', symbol: 'A', color: '#a3a3a3', bgColor: 'rgba(163, 163, 163, 0.1)', inGrid: false },
  { pair: 'S&P 500', price: 5890.20, change: 0.82, name: 'S&P 500 Index', symbol: 'SPX', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)', inGrid: false },
  { pair: 'WTI OIL', price: 76.40, change: -0.65, name: 'Crude Oil', symbol: 'OIL', color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.1)', inGrid: false },
]

export function useTickers() {
  const [tickers, setTickers] = useState(INITIAL)

  useEffect(() => {
    async function fetchLiveRates() {
      try {
        const yahooSymbols = 'EURUSD=X,GBPUSD=X,GC=F,CL=F,^GSPC,NVDA,AAPL'
        const apiUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${yahooSymbols}`
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`

        const response = await fetch(proxyUrl)
        if (!response.ok) throw new Error('Network error fetching rates')
        
        const wrapper = await response.json()
        const data = JSON.parse(wrapper.contents)
        const results = data.quoteResponse.result

        if (results && results.length > 0) {
          const eur = results.find(r => r.symbol === 'EURUSD=X')
          const gbp = results.find(r => r.symbol === 'GBPUSD=X')
          const xau = results.find(r => r.symbol === 'GC=F')
          const oil = results.find(r => r.symbol === 'CL=F')
          const sp500 = results.find(r => r.symbol === '^GSPC')
          const nvda = results.find(r => r.symbol === 'NVDA')
          const aapl = results.find(r => r.symbol === 'AAPL')

          setTickers([
            {
              pair: 'EUR/USD',
              price: eur ? eur.regularMarketPrice : 1.0855,
              change: eur ? eur.regularMarketChangePercent : 0.38,
              name: 'Euro / US Dollar',
              symbol: '€',
              color: '#2563eb',
              bgColor: 'rgba(37, 99, 235, 0.12)',
              inGrid: true
            },
            {
              pair: 'GBP/USD',
              price: gbp ? gbp.regularMarketPrice : 1.2506,
              change: gbp ? gbp.regularMarketChangePercent : -0.59,
              name: 'Pound / US Dollar',
              symbol: '£',
              color: '#7c3aed',
              bgColor: 'rgba(124, 58, 237, 0.12)',
              inGrid: true
            },
            {
              pair: 'XAU/USD',
              price: xau ? xau.regularMarketPrice : 2748.50,
              change: xau ? xau.regularMarketChangePercent : 1.85,
              name: 'Gold Spot / USD',
              symbol: 'Au',
              color: '#d97706',
              bgColor: 'rgba(217, 119, 6, 0.12)',
              inGrid: true
            },
            {
              pair: 'NVDA',
              price: nvda ? nvda.regularMarketPrice : 128.40,
              change: nvda ? nvda.regularMarketChangePercent : 4.12,
              name: 'NVIDIA Corp',
              symbol: 'N',
              color: '#16a34a',
              bgColor: 'rgba(22, 163, 74, 0.12)',
              inGrid: true
            },
            {
              pair: 'AAPL',
              price: aapl ? aapl.regularMarketPrice : 180.50,
              change: aapl ? aapl.regularMarketChangePercent : 1.20,
              name: 'Apple Inc.',
              symbol: 'A',
              color: '#a3a3a3',
              bgColor: 'rgba(163, 163, 163, 0.12)',
              inGrid: false
            },
            {
              pair: 'S&P 500',
              price: sp500 ? sp500.regularMarketPrice : 5890.20,
              change: sp500 ? sp500.regularMarketChangePercent : 0.82,
              name: 'S&P 500 Index',
              symbol: 'SPX',
              color: '#ef4444',
              bgColor: 'rgba(239, 68, 68, 0.12)',
              inGrid: false
            },
            {
              pair: 'WTI OIL',
              price: oil ? oil.regularMarketPrice : 76.40,
              change: oil ? oil.regularMarketChangePercent : -0.65,
              name: 'Crude Oil',
              symbol: 'OIL',
              color: '#06b6d4',
              bgColor: 'rgba(6, 182, 212, 0.12)',
              inGrid: false
            }
          ])
        }
      } catch (err) {
        console.error('Error fetching live rates from Yahoo Finance:', err)
        // Fallback: update local price with tiny simulation ticks to keep it dynamic if API fails
        setTickers((prev) =>
          prev.map((t) => {
            const delta = t.price * (Math.random() * 0.0002 - 0.0001)
            return {
              ...t,
              price: t.price + delta,
            }
          })
        )
      }
    }

    fetchLiveRates()
    const id = setInterval(fetchLiveRates, 10000) // update every 10 seconds
    return () => clearInterval(id)
  }, [])

  return tickers
}

export function formatPrice(price, pair) {
  const decimals = (pair === 'EUR/USD' || pair === 'GBP/USD') ? 4 : 2
  return price.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

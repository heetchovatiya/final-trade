import { useEffect, useState } from 'react'

const INITIAL = [
  { pair: 'EUR/USD', price: 1.1552, change: 0.23, name: 'Euro / US Dollar', symbol: '€', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.1)' },
  { pair: 'GBP/USD', price: 1.3476, change: -0.59, name: 'Pound / US Dollar', symbol: '£', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.1)' },
  { pair: 'XAU/USD', price: 2748.50, change: 1.09, name: 'Gold Spot / USD', symbol: 'Au', color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.1)' },
  { pair: 'BTC/USD', price: 63420.41, change: 0.24, name: 'Bitcoin / USD', symbol: '₿', color: '#ea580c', bgColor: 'rgba(234, 88, 12, 0.1)' },
]

export function useTickers() {
  const [tickers, setTickers] = useState(INITIAL)

  useEffect(() => {
    async function fetchLiveRates() {
      try {
        const yahooSymbols = 'EURUSD=X,GBPUSD=X,GC=F,BTC-USD'
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
          const btc = results.find(r => r.symbol === 'BTC-USD')

          setTickers([
            {
              pair: 'EUR/USD',
              price: eur ? eur.regularMarketPrice : 1.1552,
              change: eur ? eur.regularMarketChangePercent : 0.23,
              name: 'Euro / US Dollar',
              symbol: '€',
              color: '#2563eb',
              bgColor: 'rgba(37, 99, 235, 0.12)'
            },
            {
              pair: 'GBP/USD',
              price: gbp ? gbp.regularMarketPrice : 1.3476,
              change: gbp ? gbp.regularMarketChangePercent : -0.59,
              name: 'Pound / US Dollar',
              symbol: '£',
              color: '#7c3aed',
              bgColor: 'rgba(124, 58, 237, 0.12)'
            },
            {
              pair: 'XAU/USD',
              price: xau ? xau.regularMarketPrice : 2748.50,
              change: xau ? xau.regularMarketChangePercent : 1.09,
              name: 'Gold Spot / USD',
              symbol: 'Au',
              color: '#d97706',
              bgColor: 'rgba(217, 119, 6, 0.12)'
            },
            {
              pair: 'BTC/USD',
              price: btc ? btc.regularMarketPrice : 63420.41,
              change: btc ? btc.regularMarketChangePercent : 0.24,
              name: 'Bitcoin / USD',
              symbol: '₿',
              color: '#ea580c',
              bgColor: 'rgba(234, 88, 12, 0.12)'
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
  const decimals = (pair === 'BTC/USD' || pair === 'XAU/USD') ? 2 : 4
  return price.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

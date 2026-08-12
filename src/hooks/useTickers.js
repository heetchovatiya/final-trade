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
        const symbols = ['EURUSD=X', 'GBPUSD=X', 'GC=F', 'CL=F', '^GSPC', 'NVDA', 'AAPL']
        
        // Fetch all quotes in parallel using the open /v8/finance/chart endpoint
        const promises = symbols.map(async (sym) => {
          const targetUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=1d`
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`
          const res = await fetch(proxyUrl)
          if (!res.ok) throw new Error(`Failed to fetch ${sym}`)
          const wrapper = await res.json()
          const data = JSON.parse(wrapper.contents)
          if (!data.chart || !data.chart.result) throw new Error(`Invalid response structure for ${sym}`)
          return data.chart.result[0].meta
        })

        const metas = await Promise.all(promises)

        const eur = metas.find(m => m.symbol === 'EURUSD=X')
        const gbp = metas.find(m => m.symbol === 'GBPUSD=X')
        const xau = metas.find(m => m.symbol === 'GC=F')
        const oil = metas.find(m => m.symbol === 'CL=F')
        const sp500 = metas.find(m => m.symbol === '^GSPC')
        const nvda = metas.find(m => m.symbol === 'NVDA')
        const aapl = metas.find(m => m.symbol === 'AAPL')

        const getChange = (meta) => {
          if (!meta || !meta.chartPreviousClose) return 0
          return ((meta.regularMarketPrice - meta.chartPreviousClose) / meta.chartPreviousClose) * 100
        }

        setTickers([
          {
            pair: 'EUR/USD',
            price: eur ? eur.regularMarketPrice : 1.0855,
            change: getChange(eur),
            name: 'Euro / US Dollar',
            symbol: '€',
            color: '#2563eb',
            bgColor: 'rgba(37, 99, 235, 0.12)',
            inGrid: true
          },
          {
            pair: 'GBP/USD',
            price: gbp ? gbp.regularMarketPrice : 1.2506,
            change: getChange(gbp),
            name: 'Pound / US Dollar',
            symbol: '£',
            color: '#7c3aed',
            bgColor: 'rgba(124, 58, 237, 0.12)',
            inGrid: true
          },
          {
            pair: 'XAU/USD',
            price: xau ? xau.regularMarketPrice : 2748.50,
            change: getChange(xau),
            name: 'Gold Spot / USD',
            symbol: 'Au',
            color: '#d97706',
            bgColor: 'rgba(217, 119, 6, 0.12)',
            inGrid: true
          },
          {
            pair: 'NVDA',
            price: nvda ? nvda.regularMarketPrice : 128.40,
            change: getChange(nvda),
            name: 'NVIDIA Corp',
            symbol: 'N',
            color: '#16a34a',
            bgColor: 'rgba(22, 163, 74, 0.12)',
            inGrid: true
          },
          {
            pair: 'AAPL',
            price: aapl ? aapl.regularMarketPrice : 180.50,
            change: getChange(aapl),
            name: 'Apple Inc.',
            symbol: 'A',
            color: '#a3a3a3',
            bgColor: 'rgba(163, 163, 163, 0.12)',
            inGrid: false
          },
          {
            pair: 'S&P 500',
            price: sp500 ? sp500.regularMarketPrice : 5890.20,
            change: getChange(sp500),
            name: 'S&P 500 Index',
            symbol: 'SPX',
            color: '#ef4444',
            bgColor: 'rgba(239, 68, 68, 0.12)',
            inGrid: false
          },
          {
            pair: 'WTI OIL',
            price: oil ? oil.regularMarketPrice : 76.40,
            change: getChange(oil),
            name: 'Crude Oil',
            symbol: 'OIL',
            color: '#06b6d4',
            bgColor: 'rgba(6, 182, 212, 0.12)',
            inGrid: false
          }
        ])
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

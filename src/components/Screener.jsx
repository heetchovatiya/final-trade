import { useState, useMemo } from 'react'
import { Reveal } from '../hooks/useReveal'

const TABS = ['All', 'Forex', 'Stocks', 'Indices', 'Commodities']

const INSTRUMENTS = [
  { pair: 'EUR/USD', name: 'Euro vs U.S. Dollar', category: 'Forex', badge: '€', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.12)', spread: '0.1 pips' },
  { pair: 'GBP/USD', name: 'British Pound vs U.S. Dollar', category: 'Forex', badge: '£', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.12)', spread: '0.2 pips' },
  { pair: 'NVDA', name: 'NVIDIA Corporation', category: 'Stocks', badge: 'N', color: '#16a34a', bgColor: 'rgba(22, 163, 74, 0.12)', spread: '0.02 USD' },
  { pair: 'AAPL', name: 'Apple Inc.', category: 'Stocks', badge: 'A', color: '#a3a3a3', bgColor: 'rgba(163, 163, 163, 0.12)', spread: '0.02 USD' },
  { pair: 'GS', name: 'Goldman Sachs Group', category: 'Stocks', badge: 'G', color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.12)', spread: '0.05 USD' },
  { pair: 'GOOGL', name: 'Alphabet Inc. (Google)', category: 'Stocks', badge: 'G', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.12)', spread: '0.02 USD' },
  { pair: 'AMZN', name: 'Amazon.com, Inc.', category: 'Stocks', badge: 'a', color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.12)', spread: '0.03 USD' },
  { pair: 'TSLA', name: 'Tesla, Inc.', category: 'Stocks', badge: 'T', color: '#eab308', bgColor: 'rgba(234, 179, 8, 0.12)', spread: '0.03 USD' },
  { pair: 'US500', name: 'S&P 500 Index', category: 'Indices', badge: 'SPX', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.12)', spread: '0.4 pips' },
  { pair: 'US30', name: 'Dow Jones Industrial Average', category: 'Indices', badge: 'DJ', color: '#2563eb', bgColor: 'rgba(37, 99, 235, 0.12)', spread: '1.0 pips' },
  { pair: 'UK100', name: 'FTSE 100 Index', category: 'Indices', badge: 'UK', color: '#7c3aed', bgColor: 'rgba(124, 58, 237, 0.12)', spread: '0.6 pips' },
  { pair: 'GER40', name: 'DAX 40 Index', category: 'Indices', badge: 'DE', color: '#d97706', bgColor: 'rgba(217, 119, 6, 0.12)', spread: '0.8 pips' },
  { pair: 'XAU/USD', name: 'Gold Spot', category: 'Commodities', badge: 'Au', color: '#eab308', bgColor: 'rgba(234, 179, 8, 0.12)', spread: '0.12 pips' },
  { pair: 'XAG/USD', name: 'Silver Spot', category: 'Commodities', badge: 'Ag', color: '#a3a3a3', bgColor: 'rgba(163, 163, 163, 0.12)', spread: '0.03 pips' },
  { pair: 'WTI', name: 'Crude Oil (WTI)', category: 'Commodities', badge: '🛢️', color: '#16a34a', bgColor: 'rgba(22, 163, 74, 0.12)', spread: '0.03 USD' },
  { pair: 'NGAS', name: 'Natural Gas', category: 'Commodities', badge: '🔥', color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.12)', spread: '0.005 USD' },
]

export default function Screener({ onOpenSignup }) {
  const [selectedTab, setSelectedTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredInstruments = useMemo(() => {
    return INSTRUMENTS.filter((inst) => {
      const matchTab =
        selectedTab === 'All' ||
        inst.category.toLowerCase() === selectedTab.toLowerCase()
      const matchQuery =
        inst.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchTab && matchQuery
    })
  }, [selectedTab, searchQuery])

  return (
    <section className="screener-section section" id="screener">
      <div className="container">
        <style>
          {`
            @media (max-width: 768px) {
              .screener-title {
                margin-top: -20px;
                line-height: 1.4;
              }
              .screener-title .gold {
                display: block !important;
                margin-top: 12px;
              }
              .screener-table-card {
                min-width: 0;
                width: 100%;
                max-width: 100vw;
              }
              .screener-table-scroll {
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch;
                width: 100%;
              }
            }
          `}
        </style>
        <Reveal as="span" className="screener-subtitle">
          — AVAILABLE INSTRUMENTS —
        </Reveal>

        <Reveal as="h2" className="screener-title">
          Trade <span className="gold">Global Markets</span>
        </Reveal>

        <Reveal as="p" className="screener-lead" delay={120}>
          Browse our available instruments with competitive spreads across all market categories.
        </Reveal>

        <div className="screener-layout" style={{ gridTemplateColumns: '1fr' }}>
          <Reveal className="screener-table-card" delay={200}>
            <div className="screener-header-controls">
              <div className="screener-tabs-wrapper">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`screener-tab-btn ${selectedTab === tab ? 'active' : ''}`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="screener-search-wrapper">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="search-icon"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="screener-search-input"
                />
              </div>
            </div>

            <div className="screener-table-scroll" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', maxWidth: '100%' }}>
              <table className="screener-table" style={{ width: '100%', minWidth: '500px' }}>
                <thead>
                  <tr>
                    <th>INSTRUMENT</th>
                    <th className="text-right">CATEGORY</th>
                    <th className="text-right">SPREAD</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInstruments.map((inst) => (
                    <tr key={inst.pair} className="screener-row">
                      <td>
                        <div className="screener-symbol-cell">
                          <span
                            className="screener-symbol-badge"
                            style={{
                              backgroundColor: inst.bgColor,
                              color: inst.color
                            }}
                          >
                            {inst.badge}
                          </span>
                          <div className="screener-symbol-info">
                            <div className="screener-symbol-name">{inst.pair}</div>
                            <div className="screener-symbol-full">{inst.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                          {inst.category}
                        </span>
                      </td>
                      <td className="text-right font-mono text-muted">
                        {inst.spread}
                      </td>
                      <td className="text-center" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="screener-trade-btn"
                          onClick={onOpenSignup}
                        >
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredInstruments.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center text-muted" style={{ padding: '40px 0' }}>
                        No instruments match your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function SpreadsFees() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Spreads & Fees" subtitle="Transparent pricing. No hidden charges." />
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <Reveal as="div" className="hover-glow page-form-card" delay={0}>
            
            <div className="spreads-header">
              <h3 style={{ color: 'var(--ink)', margin: 0, fontSize: '1.5rem' }}>Typical Spreads</h3>
              <span className="spreads-badge">Product Info</span>
            </div>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="spreads-table">
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th>Category</th>
                    <th>Raw Spread</th>
                    <th>Standard Spread</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>EUR/USD</td>
                    <td style={{ color: 'var(--muted)' }}>Forex</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.0 pips</td>
                    <td>1.0 pips</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>GBP/USD</td>
                    <td style={{ color: 'var(--muted)' }}>Forex</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.1 pips</td>
                    <td>1.2 pips</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>NVDA</td>
                    <td style={{ color: 'var(--muted)' }}>Stocks</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.02 USD</td>
                    <td>0.06 USD</td>
                    <td style={{ color: 'var(--muted)' }}>$0.02 per share</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>AAPL</td>
                    <td style={{ color: 'var(--muted)' }}>Stocks</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.01 USD</td>
                    <td>0.05 USD</td>
                    <td style={{ color: 'var(--muted)' }}>$0.02 per share</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>US500</td>
                    <td style={{ color: 'var(--muted)' }}>Indices</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.4 pips</td>
                    <td>0.8 pips</td>
                    <td style={{ color: 'var(--muted)' }}>$0 commission</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>US30</td>
                    <td style={{ color: 'var(--muted)' }}>Indices</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>1.0 pips</td>
                    <td>2.0 pips</td>
                    <td style={{ color: 'var(--muted)' }}>$0 commission</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>XAU/USD</td>
                    <td style={{ color: 'var(--muted)' }}>Commodities</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.12 pips</td>
                    <td>0.30 pips</td>
                    <td style={{ color: 'var(--muted)' }}>$0 commission</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>WTI</td>
                    <td style={{ color: 'var(--muted)' }}>Commodities</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.03 USD</td>
                    <td>0.05 USD</td>
                    <td style={{ color: 'var(--muted)' }}>$0 commission</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </Reveal>
        </div>
      </section>
    </main>
  )
}

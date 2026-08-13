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
              <h3 style={{ color: 'var(--ink)', margin: 0, fontSize: '1.5rem' }}>Average Live Spreads</h3>
              <span className="spreads-badge">Live Data</span>
            </div>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table className="spreads-table">
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th>Raw Spread (pips)</th>
                    <th>Standard Spread (pips)</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>EUR/USD</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.0</td>
                    <td>1.0</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>GBP/USD</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.1</td>
                    <td>1.2</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>USD/JPY</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.1</td>
                    <td>1.1</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>XAU/USD</td>
                    <td style={{ color: 'var(--gold)', fontWeight: 600 }}>0.5</td>
                    <td>1.8</td>
                    <td style={{ color: 'var(--muted)' }}>$3.50 per lot</td>
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

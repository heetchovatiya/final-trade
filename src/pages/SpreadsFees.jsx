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
          <Reveal as="div" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '24px' }}>Average Live Spreads</h3>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', color: 'var(--ink)' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(197, 160, 89, 0.3)', color: 'var(--muted)' }}>
                  <th style={{ padding: '16px' }}>Instrument</th>
                  <th style={{ padding: '16px' }}>Raw Spread (pips)</th>
                  <th style={{ padding: '16px' }}>Standard Spread (pips)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 'bold' }}>EUR/USD</td>
                  <td style={{ padding: '16px' }}>0.0</td>
                  <td style={{ padding: '16px' }}>1.0</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '16px', fontWeight: 'bold' }}>GBP/USD</td>
                  <td style={{ padding: '16px' }}>0.1</td>
                  <td style={{ padding: '16px' }}>1.2</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', fontWeight: 'bold' }}>XAU/USD</td>
                  <td style={{ padding: '16px' }}>0.5</td>
                  <td style={{ padding: '16px' }}>1.8</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

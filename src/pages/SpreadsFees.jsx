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
          <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.4)', boxShadow: 'var(--shadow)' }} delay={0}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h3 style={{ color: 'var(--ink)', margin: 0, fontSize: '1.5rem' }}>Average Live Spreads</h3>
              <span style={{ padding: '6px 12px', background: 'rgba(26, 155, 92, 0.1)', color: '#1a9b5c', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 'bold' }}>Live Data</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', color: 'var(--ink)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.9rem' }}>
                    <th style={{ padding: '16px' }}>Instrument</th>
                    <th style={{ padding: '16px' }}>Raw Spread (pips)</th>
                    <th style={{ padding: '16px' }}>Standard Spread (pips)</th>
                    <th style={{ padding: '16px' }}>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--section-alt)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', fontWeight: 'bold' }}>EUR/USD</td>
                    <td style={{ padding: '16px', color: 'var(--gold)', fontWeight: 600 }}>0.0</td>
                    <td style={{ padding: '16px' }}>1.0</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--section-alt)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', fontWeight: 'bold' }}>GBP/USD</td>
                    <td style={{ padding: '16px', color: 'var(--gold)', fontWeight: 600 }}>0.1</td>
                    <td style={{ padding: '16px' }}>1.2</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)', transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--section-alt)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', fontWeight: 'bold' }}>USD/JPY</td>
                    <td style={{ padding: '16px', color: 'var(--gold)', fontWeight: 600 }}>0.1</td>
                    <td style={{ padding: '16px' }}>1.1</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>$3.50 per lot</td>
                  </tr>
                  <tr style={{ transition: 'background 0.3s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--section-alt)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '16px', fontWeight: 'bold' }}>XAU/USD</td>
                    <td style={{ padding: '16px', color: 'var(--gold)', fontWeight: 600 }}>0.5</td>
                    <td style={{ padding: '16px' }}>1.8</td>
                    <td style={{ padding: '16px', color: 'var(--muted)' }}>$3.50 per lot</td>
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

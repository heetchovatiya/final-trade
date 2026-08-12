import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Forex() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Forex Trading" subtitle="Trade over 50 major, minor, and exotic currency pairs with ultra-tight spreads." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Deep Liquidity</h3>
              <p style={{ color: 'var(--muted)' }}>Access pricing derived from top-tier liquidity providers, ensuring minimal slippage and consistent execution even during volatile market events.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Spreads from 0.0 Pips</h3>
              <p style={{ color: 'var(--muted)' }}>Trade the world's most liquid pairs like EUR/USD with spreads starting from absolutely zero on our Raw accounts.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>24/5 Market Access</h3>
              <p style={{ color: 'var(--muted)' }}>Take advantage of continuous trading opportunities across global trading sessions from Sydney to New York.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

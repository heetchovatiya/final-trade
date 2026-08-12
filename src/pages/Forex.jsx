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
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" alt="Forex charts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Trade the World's<br/><span className="gold">Most Liquid Market</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Deep Liquidity</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Access pricing derived from top-tier liquidity providers, ensuring minimal slippage and consistent execution even during volatile market events.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Spreads from 0.0 Pips</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Trade the world's most liquid pairs like EUR/USD with spreads starting from absolutely zero on our Raw accounts.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>24/5 Market Access</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Take advantage of continuous trading opportunities across global trading sessions from Sydney to New York.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

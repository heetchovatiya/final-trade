import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function CFDs() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="CFD Trading" subtitle="Contracts for Difference on global assets with zero commissions." />
      <section className="section">
        <div className="container">
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80" alt="Financial abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Trade Without<br/><span className="gold">Boundaries</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>What is a CFD?</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>A CFD allows you to speculate on the rising or falling prices of fast-moving global financial markets without actually owning the underlying asset.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Leveraged Trading</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Magnify your trading capital. Note that while leverage can increase potential returns, it also amplifies potential losses. Trade responsibly.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Flexible Position Sizing</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Trade micro-lots to manage your risk carefully, or scale up to large institutional order sizes seamlessly with deep liquidity.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

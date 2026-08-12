import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Indices() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Indices Trading" subtitle="Trade the performance of entire global stock markets." />
      <section className="section">
        <div className="container">
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" alt="Stock market board" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Access Global<br/><span className="gold">Equity Markets</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="premium-card" style={{ padding: '40px' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Major Global Markets</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Access top indices like the US500, US30, UK100, and GER40 from a single platform with ultra-low latency.</p>
            </Reveal>
            <Reveal as="div" className="premium-card" style={{ padding: '40px' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Go Long or Short</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Capitalize on both rising and falling equity markets without borrowing physical shares or paying stockbroker fees.</p>
            </Reveal>
            <Reveal as="div" className="premium-card" style={{ padding: '40px' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Low Margins</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Increase your market exposure with competitive leverage ratios designed specifically for professional index traders.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

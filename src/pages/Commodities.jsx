import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Commodities() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Commodities Trading" subtitle="Diversify your portfolio with gold, silver, oil, and more." />
      <section className="section">
        <div className="container">
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1574688825227-2c67d643ceab?w=1200&q=80" alt="Gold bars and commodities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Hedge Against<br/><span className="gold">Inflation</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Precious Metals</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Trade Gold (XAU) and Silver (XAG) against major currencies as a safe haven or inflation hedge with exceptional execution speeds.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Energies</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Speculate on the price movements of US Crude Oil (WTI) and UK Brent with highly competitive margins and low latency.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>No Physical Delivery</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Trade commodity CFDs without the hassle of taking physical ownership of the underlying assets. Trade price action directly.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

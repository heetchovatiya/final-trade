import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function CopyTrading() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Copy Trading" subtitle="Mirror the positions of top-performing traders automatically." />
      <section className="section">
        <div className="container">

          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80" alt="Financial network" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Trade on<br/><span className="gold">Autopilot</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>How It Works</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Browse our leaderboard of verified strategy providers. Select a trader whose risk profile matches yours, and automatically duplicate their trades in your own account in real-time.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Full Control</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>You retain complete control of your funds. Set strict stop-losses, pause copying at any time, or close positions manually if market conditions change.</p>
            </Reveal>
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Become a Provider</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Are you a consistently profitable trader? Apply to become a strategy provider and earn performance fees from your followers globally.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

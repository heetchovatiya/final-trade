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
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>How It Works</h3>
              <p style={{ color: 'var(--muted)' }}>Browse our leaderboard of verified strategy providers. Select a trader whose risk profile matches yours, and automatically duplicate their trades in your own account in real-time.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Full Control</h3>
              <p style={{ color: 'var(--muted)' }}>You retain complete control of your funds. Set strict stop-losses, pause copying at any time, or close positions manually if market conditions change.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Become a Provider</h3>
              <p style={{ color: 'var(--muted)' }}>Are you a consistently profitable trader? Apply to become a strategy provider and earn performance fees from your followers.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

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

          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80" alt="Financial network" />
            <div className="page-banner__text">
              <h2>Trade on<br/><span className="gold">Autopilot</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">How It Works</h3>
                <p className="card-text">Browse our leaderboard of verified strategy providers. Select a trader whose risk profile matches yours, and automatically duplicate their trades in your own account in real-time.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Full Control</h3>
                <p className="card-text">You retain complete control of your funds. Set strict stop-losses, pause copying at any time, or close positions manually if market conditions change.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">Become a Provider</h3>
                <p className="card-text">Are you a consistently profitable trader? Apply to become a strategy provider and earn performance fees from your followers globally.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

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
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" alt="Forex charts" />
            <div className="page-banner__text">
              <h2>Trade the World's<br/><span className="gold">Most Liquid Market</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">Deep Liquidity</h3>
                <p className="card-text">Access pricing derived from top-tier liquidity providers, ensuring minimal slippage and consistent execution even during volatile market events.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Spreads from 0.0 Pips</h3>
                <p className="card-text">Trade the world's most liquid pairs like EUR/USD with spreads starting from absolutely zero on our Raw accounts.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">24/5 Market Access</h3>
                <p className="card-text">Take advantage of continuous trading opportunities across global trading sessions from Sydney to New York.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

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
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=1200&q=80" alt="Gold bars and commodities" />
            <div className="page-banner__text">
              <h2>Hedge Against<br/><span className="gold">Inflation</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">Precious Metals</h3>
                <p className="card-text">Trade Gold (XAU) and Silver (XAG) against major currencies as a safe haven or inflation hedge with exceptional execution speeds.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Energies</h3>
                <p className="card-text">Speculate on the price movements of US Crude Oil (WTI) and UK Brent with highly competitive margins and low latency.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">No Physical Delivery</h3>
                <p className="card-text">Trade commodity CFDs without the hassle of taking physical ownership of the underlying assets. Trade price action directly.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

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
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80" alt="Financial abstract" />
            <div className="page-banner__text">
              <h2>Trade Without<br/><span className="gold">Boundaries</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">What is a CFD?</h3>
                <p className="card-text">A CFD allows you to speculate on the rising or falling prices of fast-moving global financial markets without actually owning the underlying asset.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Leveraged Trading</h3>
                <p className="card-text">Magnify your trading capital. Note that while leverage can increase potential returns, it also amplifies potential losses. Trade responsibly.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">Flexible Position Sizing</h3>
                <p className="card-text">Trade micro-lots to manage your risk carefully, or scale up to large institutional order sizes seamlessly with deep liquidity.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

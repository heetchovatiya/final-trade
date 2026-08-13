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
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" alt="Stock market board" />
            <div className="page-banner__text">
              <h2>Access Global<br/><span className="gold">Equity Markets</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">Major Global Markets</h3>
                <p className="card-text">Access top indices like the US500, US30, UK100, and GER40 from a single platform with ultra-low latency.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Go Long or Short</h3>
                <p className="card-text">Capitalize on both rising and falling equity markets without borrowing physical shares or paying stockbroker fees.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">Low Margins</h3>
                <p className="card-text">Increase your market exposure with competitive leverage ratios designed specifically for professional index traders.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

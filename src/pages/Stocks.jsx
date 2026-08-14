import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Stocks() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Stocks Trading" subtitle="Trade share CFDs on leading global companies with institutional liquidity." />
      <section className="section">
        <div className="container">
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80" alt="Stocks and trading graphs" />
            <div className="page-banner__text">
              <h2>Trade the World's<br/><span className="gold">Leading Tech & Finance Giants</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">Top Companies</h3>
                <p className="card-text">Access CFDs on global leaders like NVIDIA, Apple, Alphabet, Amazon, Tesla, and Goldman Sachs from one single account.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Leveraged Exposure</h3>
                <p className="card-text">Maximize your capital efficiency with leverage on stock CFDs. Gain rising or falling market exposure without owning the underlying share.</p>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">Real-Time Data</h3>
                <p className="card-text">Get live stock pricing feeds and execute your orders with ultra-low latency on our robust trading platform.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

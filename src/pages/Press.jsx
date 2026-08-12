import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'
import mt5Screenshot from '../assets/metatrader-5/Screenshots/12_market.png'

export default function Press() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Press & Media" subtitle="Latest news, announcements, and media resources." />
      <section className="section">
        <div className="container">
          <div className="page-grid page-grid--cards">
            
            <Reveal as="article" className="premium-card" delay={0}>
              <img src={mt5Screenshot} alt="MetaTrader 5 platform" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <span className="card-date">October 12, 2026</span>
                <h3 className="card-title" style={{ margin: '12px 0' }}>Explore Markets Limited Launches Advanced MetaTrader 5 Integration</h3>
                <p className="card-text">Traders can now experience lightning-fast execution and advanced charting tools with our seamless MT5 rollout globally.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="premium-card" delay={150}>
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Awards" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <span className="card-date">September 04, 2026</span>
                <h3 className="card-title" style={{ margin: '12px 0' }}>Industry Recognition: Best ECN Broker 2026</h3>
                <p className="card-text">We are proud to announce that we have been awarded Best ECN Broker at the Global Financial Expo in recognition of our tight spreads.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="premium-card" delay={300}>
              <img src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=800&q=80" alt="Commodities expansion" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <span className="card-date">August 22, 2026</span>
                <h3 className="card-title" style={{ margin: '12px 0' }}>Expanding Commodity Offerings for 2026</h3>
                <p className="card-text">We have officially added 20 new agricultural and energy commodity CFDs to provide more portfolio diversification options.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}

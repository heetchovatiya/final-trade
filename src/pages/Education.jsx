import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Education() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Trading Education" subtitle="Master the markets with our comprehensive resource hub." />
      <section className="section">
        <div className="container">
          
          <Reveal as="div" className="page-banner" delay={0}>
            <div className="page-banner__overlay" />
            <img src="https://images.unsplash.com/photo-1590283603385-18ff3828ef00?w=1200&q=80" alt="Financial analysis" />
            <div className="page-banner__text">
              <h2>Sharpen Your<br/><span className="gold">Trading Edge</span></h2>
            </div>
          </Reveal>

          <div className="page-grid page-grid--features">
            <Reveal as="div" className="premium-card" delay={100}>
              <div className="card-body">
                <h3 className="card-title">Beginner's Guide to Forex</h3>
                <p className="card-text">Learn the fundamentals of currency trading, understand pips, leverage, and how to execute your first trade safely and confidently.</p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={200}>
              <div className="card-body">
                <h3 className="card-title">Technical Analysis</h3>
                <p className="card-text">Dive deep into chart patterns, moving averages, momentum indicators, and algorithmic trading strategies for seasoned professionals.</p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
              </div>
            </Reveal>
            <Reveal as="div" className="premium-card" delay={300}>
              <div className="card-body">
                <h3 className="card-title">Risk Management</h3>
                <p className="card-text">The most important skill in trading. Discover how to protect your capital, manage drawdowns effectively, and calculate position sizes.</p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

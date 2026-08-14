import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="About Us" subtitle="Discover the story and vision behind Explore Markets Limited." />
      <section className="section">
        <div className="container">
          
          <div className="page-grid page-grid--cards">
            
            <Reveal as="article" className="premium-card" delay={100}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Our Mission" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">To democratize access to institutional-grade liquidity, offering traders of all levels a robust, transparent, and ultra-fast trading environment. We aim to break down the barriers between retail traders and top-tier execution.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="premium-card" delay={200}>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Core Values" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="card-title">Core Values</h3>
                {/* REGULATION_ADJUSTMENTS_START: Hiding regulatory compliance reference */}
                {/*
                <p className="card-text">Integrity, innovation, and client success. We prioritize the security of your funds and the reliability of our platforms above all else, maintaining strict regulatory compliance and segregated client accounts.</p>
                */}
                <p className="card-text">Integrity, innovation, and client success. We prioritize the security of your funds and the reliability of our platforms above all else, maintaining strict corporate standards and segregated client accounts.</p>
                {/* REGULATION_ADJUSTMENTS_END */}
              </div>
            </Reveal>

            <Reveal as="article" className="premium-card" delay={300}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Global Reach" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div className="card-body">
                <h3 className="card-title">Global Reach</h3>
                <p className="card-text">Registered in Saint Lucia, we serve a global clientele, bridging the gap between retail traders and top-tier global financial markets with localized support in multiple languages, 24/5.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}

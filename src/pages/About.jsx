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
          
          <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={100}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Our Mission" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Our Mission</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>To democratize access to institutional-grade liquidity, offering traders of all levels a robust, transparent, and ultra-fast trading environment. We aim to break down the barriers between retail traders and top-tier execution.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={200}>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Core Values" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Core Values</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>Integrity, innovation, and client success. We prioritize the security of your funds and the reliability of our platforms above all else, maintaining strict regulatory compliance and segregated client accounts.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={300}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Global Reach" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Global Reach</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>Registered in Saint Lucia, we serve a global clientele, bridging the gap between retail traders and top-tier global financial markets with localized support in multiple languages, 24/5.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}

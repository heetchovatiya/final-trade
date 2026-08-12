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
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)' }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" alt="Corporate office team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Reveal>

          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>To democratize access to institutional-grade liquidity, offering traders of all levels a robust, transparent, and ultra-fast trading environment. We aim to break down the barriers between retail traders and top-tier execution.</p>
            </Reveal>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Core Values</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>Integrity, innovation, and client success. We prioritize the security of your funds and the reliability of our platforms above all else, maintaining strict regulatory compliance and segregated client accounts.</p>
            </Reveal>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.5rem' }}>Global Reach</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>Registered in Saint Lucia, we serve a global clientele, bridging the gap between retail traders and top-tier global financial markets with localized support in multiple languages, 24/5.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

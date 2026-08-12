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
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ color: 'var(--muted)' }}>To democratize access to institutional-grade liquidity, offering traders of all levels a robust, transparent, and ultra-fast trading environment.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Core Values</h3>
              <p style={{ color: 'var(--muted)' }}>Integrity, innovation, and client success. We prioritize the security of your funds and the reliability of our platforms above all else.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Global Reach</h3>
              <p style={{ color: 'var(--muted)' }}>Registered in Saint Lucia, we serve a global clientele, bridging the gap between retail traders and top-tier global financial markets.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

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
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>What is a CFD?</h3>
              <p style={{ color: 'var(--muted)' }}>A CFD allows you to speculate on the rising or falling prices of fast-moving global financial markets without owning the underlying asset.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Leveraged Trading</h3>
              <p style={{ color: 'var(--muted)' }}>Magnify your trading capital. Note that while leverage can increase potential returns, it also amplifies potential losses.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Flexible Position Sizing</h3>
              <p style={{ color: 'var(--muted)' }}>Trade micro-lots to manage your risk carefully, or scale up to large institutional order sizes seamlessly.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

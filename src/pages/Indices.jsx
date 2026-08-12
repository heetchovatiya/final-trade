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
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Major Global Markets</h3>
              <p style={{ color: 'var(--muted)' }}>Access top indices like the US500, US30, UK100, and GER40 from a single platform with ultra-low latency.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Go Long or Short</h3>
              <p style={{ color: 'var(--muted)' }}>Capitalize on both rising and falling equity markets without borrowing physical shares.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Low Margins</h3>
              <p style={{ color: 'var(--muted)' }}>Increase your market exposure with competitive leverage ratios designed for professional index traders.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

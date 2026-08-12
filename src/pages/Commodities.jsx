import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Commodities() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Commodities Trading" subtitle="Diversify your portfolio with gold, silver, oil, and more." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Precious Metals</h3>
              <p style={{ color: 'var(--muted)' }}>Trade Gold (XAU) and Silver (XAG) against major currencies as a safe haven or inflation hedge with exceptional execution speeds.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Energies</h3>
              <p style={{ color: 'var(--muted)' }}>Speculate on the price movements of US Crude Oil (WTI) and UK Brent with highly competitive margins and low latency.</p>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>No Physical Delivery</h3>
              <p style={{ color: 'var(--muted)' }}>Trade commodity CFDs without the hassle of taking physical ownership of the underlying assets.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

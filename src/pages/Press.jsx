import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Press() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Press & Media" subtitle="Latest news, announcements, and media resources." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="article" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>October 12, 2026</span>
              <h3 style={{ color: 'var(--gold)', margin: '12px 0' }}>Explore Markets Limited Launches Advanced MetaTrader 5 Integration</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Traders can now experience lightning-fast execution and advanced charting tools with our seamless MT5 rollout globally.</p>
            </Reveal>
            <Reveal as="article" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>September 04, 2026</span>
              <h3 style={{ color: 'var(--gold)', margin: '12px 0' }}>Industry Recognition: Best ECN Broker 2026</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>We are proud to announce that we have been awarded Best ECN Broker at the Global Financial Expo in recognition of our tight spreads.</p>
            </Reveal>
            <Reveal as="article" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>August 22, 2026</span>
              <h3 style={{ color: 'var(--gold)', margin: '12px 0' }}>Expanding Commodity Offerings</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>We have officially added 20 new agricultural and energy commodity CFDs to provide more portfolio diversification options.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

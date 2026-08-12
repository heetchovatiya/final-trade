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
          <div style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            
            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={0}>
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="News article" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>October 12, 2026</span>
                <h3 style={{ color: 'var(--ink)', margin: '12px 0', fontSize: '1.4rem' }}>Explore Markets Limited Launches Advanced MetaTrader 5 Integration</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Traders can now experience lightning-fast execution and advanced charting tools with our seamless MT5 rollout globally.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={150}>
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Awards" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>September 04, 2026</span>
                <h3 style={{ color: 'var(--ink)', margin: '12px 0', fontSize: '1.4rem' }}>Industry Recognition: Best ECN Broker 2026</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>We are proud to announce that we have been awarded Best ECN Broker at the Global Financial Expo in recognition of our tight spreads.</p>
              </div>
            </Reveal>

            <Reveal as="article" className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--card-bg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={300}>
              <img src="https://images.unsplash.com/photo-1574688825227-2c67d643ceab?w=800&q=80" alt="Commodities expansion" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600 }}>August 22, 2026</span>
                <h3 style={{ color: 'var(--ink)', margin: '12px 0', fontSize: '1.4rem' }}>Expanding Commodity Offerings for 2026</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>We have officially added 20 new agricultural and energy commodity CFDs to provide more portfolio diversification options.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}

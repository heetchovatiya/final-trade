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
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={0}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Beginner's Guide to Forex</h3>
              <p style={{ color: 'var(--muted)' }}>Learn the fundamentals of currency trading, understand pips, leverage, and how to execute your first trade safely.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>Read More</button>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={150}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Advanced Technical Analysis</h3>
              <p style={{ color: 'var(--muted)' }}>Dive deep into chart patterns, indicators, and algorithmic trading strategies for seasoned professionals.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>Read More</button>
            </Reveal>
            <Reveal as="div" className="bento-card" style={{ padding: '32px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }} delay={300}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Risk Management</h3>
              <p style={{ color: 'var(--muted)' }}>The most important skill in trading. Discover how to protect your capital and manage drawdowns effectively.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>Read More</button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

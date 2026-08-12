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
          
          <Reveal as="div" delay={0} style={{ width: '100%', height: '350px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '64px', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))', zIndex: 1 }} />
            <img src="https://images.unsplash.com/photo-1590283603385-18ff3828ef00?w=1200&q=80" alt="Financial analysis" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '50%', left: '40px', transform: 'translateY(-50%)', zIndex: 2, color: 'white' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Sharpen Your<br/><span className="gold">Trading Edge</span></h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={100}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Beginner's Guide to Forex</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Learn the fundamentals of currency trading, understand pips, leverage, and how to execute your first trade safely and confidently.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
            </Reveal>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={200}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Technical Analysis</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>Dive deep into chart patterns, moving averages, momentum indicators, and algorithmic trading strategies for seasoned professionals.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
            </Reveal>
            <Reveal as="div" className="hover-lift" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }} delay={300}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: '1.4rem' }}>Risk Management</h3>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>The most important skill in trading. Discover how to protect your capital, manage drawdowns effectively, and calculate position sizes.</p>
              <button className="btn btn-outline btn-sm" style={{ marginTop: '24px' }}>Read More</button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

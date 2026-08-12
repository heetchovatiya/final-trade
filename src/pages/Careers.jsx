import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Careers" subtitle="Join a team of innovators building the future of trading." />
      <section className="section">
        <div className="container">
          <Reveal as="h2" style={{ textAlign: 'center', marginBottom: '48px' }}>Open Positions</Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
            <Reveal as="div" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} delay={0}>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '4px' }}>Senior React Developer</h4>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Remote / Full-time</span>
              </div>
              <button className="btn btn-outline btn-sm">Apply Now</button>
            </Reveal>
            <Reveal as="div" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} delay={100}>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '4px' }}>Quantitative Analyst</h4>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>London / Full-time</span>
              </div>
              <button className="btn btn-outline btn-sm">Apply Now</button>
            </Reveal>
            <Reveal as="div" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} delay={200}>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '4px' }}>Customer Support Specialist</h4>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Global / Shift-based</span>
              </div>
              <button className="btn btn-outline btn-sm">Apply Now</button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

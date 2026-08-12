import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [role, setRole] = useState('')

  const inputStyle = { width: '100%', padding: '14px 16px', borderRadius: '8px', background: 'var(--page-bg)', border: '1px solid var(--line)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.3s' }

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Careers" subtitle="Join a team of innovators building the future of trading." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'start' }}>
            
            {/* Open Roles */}
            <div>
              <Reveal as="h2" style={{ marginBottom: '32px' }}>Open Positions</Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {['Senior React Developer', 'Quantitative Analyst', 'Customer Support Specialist'].map((job, idx) => (
                  <Reveal key={job} as="div" className="hover-glow" style={{ padding: '32px 40px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid rgba(197, 160, 89, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--shadow)' }} delay={idx * 100}>
                    <div>
                      <h4 style={{ color: 'var(--gold)', marginBottom: '4px' }}>{job}</h4>
                      <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Remote / Full-time</span>
                    </div>
                    <button onClick={() => setRole(job)} className="btn btn-outline btn-sm">Select</button>
                  </Reveal>
                ))}
              </div>
              
              <Reveal as="div" delay={400} style={{ marginTop: '48px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaborating" style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
              </Reveal>
            </div>

            {/* Application Form */}
            <Reveal as="div" className="hover-glow" delay={200} style={{ padding: '56px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '24px' }}>Submit Your Application</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Role</label>
                  <select value={role} onChange={e => setRole(e.target.value)} style={inputStyle}>
                    <option value="">Select a role...</option>
                    <option value="Senior React Developer">Senior React Developer</option>
                    <option value="Quantitative Analyst">Quantitative Analyst</option>
                    <option value="Customer Support Specialist">Customer Support Specialist</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Email</label>
                  <input type="email" placeholder="john@example.com" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>LinkedIn Profile URL</label>
                  <input type="url" placeholder="https://linkedin.com/in/..." style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Cover Letter</label>
                  <textarea rows="4" placeholder="Tell us why you're a great fit..." style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-gold" style={{ marginTop: '8px' }}>Submit Application</button>
              </form>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}

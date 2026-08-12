import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const inputStyle = { width: '100%', padding: '14px 16px', borderRadius: '8px', background: 'var(--page-bg)', border: '1px solid var(--line)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.3s' }

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Contact Us" subtitle="We're here to help 24/5. Get in touch with our support team." />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'start' }}>
            
            <Reveal as="div" className="hover-glow" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: 'var(--shadow)' }} delay={0}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '24px' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Name</label>
                  <input type="text" placeholder="Your Name" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Email</label>
                  <input type="email" placeholder="Your Email" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Subject</label>
                  <input type="text" placeholder="How can we help?" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--muted)' }}>Message</label>
                  <textarea rows="5" placeholder="Type your message here..." style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-gold" style={{ marginTop: '8px' }}>Send Message</button>
              </form>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Reveal as="div" delay={150} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '16px' }}>
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Office building" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              </Reveal>

              <Reveal as="div" className="hover-lift" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--line)' }} delay={200}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Email Support</h4>
                <p style={{ color: 'var(--ink)' }}>Support@exploremarketslimited.com</p>
              </Reveal>
              
              <Reveal as="div" className="hover-lift" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--line)' }} delay={300}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Phone</h4>
                <p style={{ color: 'var(--ink)' }}>+44 7459333264</p>
              </Reveal>

              <Reveal as="div" className="hover-lift" style={{ padding: '24px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--line)' }} delay={400}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Registered Address</h4>
                <p style={{ color: 'var(--muted)' }}>Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

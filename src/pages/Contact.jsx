import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Contact Us" subtitle="We're here to help 24/5. Get in touch with our support team." />
      <section className="section">
        <div className="container">
          <div className="page-grid page-grid--two-col">
            
            <Reveal as="div" className="hover-glow page-form-card" delay={0}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '24px' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="form-label">Name</label>
                  <input type="text" placeholder="Your Name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Subject</label>
                  <input type="text" placeholder="How can we help?" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea rows="5" placeholder="Type your message here..." className="form-input" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn btn-gold" style={{ marginTop: '8px' }}>Send Message</button>
              </form>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Reveal as="div" delay={150} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow)', marginBottom: '16px' }}>
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Office building" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              </Reveal>

              <Reveal as="div" className="hover-lift contact-info-card" delay={200}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Email Support</h4>
                <p style={{ color: 'var(--ink)' }}>Support@exploremarketslimited.com</p>
              </Reveal>
              
              <Reveal as="div" className="hover-lift contact-info-card" delay={300}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Phone</h4>
                <p style={{ color: 'var(--ink)' }}>+44 7459333264</p>
              </Reveal>

              <Reveal as="div" className="hover-lift contact-info-card" delay={400}>
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

import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Contact Us" subtitle="We're here to help 24/5. Get in touch with our support team." />
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal as="div" style={{ padding: '40px', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(197, 160, 89, 0.2)' }} delay={0}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Email Support</h4>
                <p style={{ color: 'var(--ink)' }}>Support@exploremarketslimited.com</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Phone</h4>
                <p style={{ color: 'var(--ink)' }}>+44 7459333264</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Registered Address</h4>
                <p style={{ color: 'var(--muted)' }}>Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '8px' }}>Physical Office Address</h4>
                <p style={{ color: 'var(--muted)' }}>No.6 Grand Riviere Road, Monchy, Gros Islet, Saint Lucia.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

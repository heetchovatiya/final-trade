import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column' }}>
      {/* <PageHero 
        title="404 - Page Not Found" 
        subtitle="The page you are looking for doesn't exist or has been moved." 
      /> */}
      <section className="section" style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal delay={150}>
            <div style={{
              fontSize: 'min(10rem, 20vw)',
              fontWeight: 900,
              lineHeight: 1,
              color: 'var(--gold)',
              marginBottom: '20px',
              textShadow: '0 0 40px rgba(197, 160, 89, 0.15)'
            }}>
              404
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p style={{ color: 'var(--muted)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', marginInline: 'auto', padding: '0 20px' }}>
              We couldn't find the page you are searching for. It might have been temporarily removed, had its name changed, or is currently unavailable.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-gold">
                Return Home
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

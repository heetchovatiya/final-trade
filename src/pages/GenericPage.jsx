import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useReveal'

export default function GenericPage({ title }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ minHeight: '60vh' }}>
      <PageHero 
        title={title} 
        subtitle="Explore Markets Limited offers world-class trading infrastructure tailored for your needs." 
      />
      
      <section className="section">
        <div className="container">
          <Reveal as="div" delay={150} style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '40px',
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(197, 160, 89, 0.1)',
            boxShadow: 'var(--shadow)'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--gold)' }}>
              Coming Soon
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              The {title} page is currently under construction. We are working hard to bring you comprehensive information and resources tailored to our premium trading environment. 
              <br/><br/>
              Please check back soon or contact our 24/7 support team if you have immediate questions.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

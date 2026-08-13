import { Reveal } from '../hooks/useReveal'

export default function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero" style={{ 
      padding: '120px 0 80px',
      background: 'var(--hero-grad)',
      borderBottom: '1px solid var(--line)',
      textAlign: 'center'
    }}>
      <div className="container">
        <Reveal as="h1" className="hero-title" delay={0}>
          {title}
        </Reveal>
        {subtitle && (
          <Reveal as="p" className="hero-sub" delay={120}>
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  )
}

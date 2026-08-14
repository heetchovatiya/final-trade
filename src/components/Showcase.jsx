import { Reveal } from '../hooks/useReveal'
import mt5Logo from '../assets/metatrader-5/Logo/metatrader5-sign.png'
import mt5Devices from '../assets/metatrader-5/All in One/004.png'

export default function Showcase() {
  return (
    <section className="showcase section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Everything is in <span className="gold">one place</span>
        </Reveal>

        <Reveal className="stats-row" delay={200}>
          <div className="stat hover-lift">
            <div className="stat-value count-up">1,400+</div>
            <div className="stat-label">Trading instruments</div>
          </div>
          <div className="stat hover-lift">
            <div className="stat-value">SSL</div>
            <div className="stat-label">Security protection</div>
          </div>
          <div className="stat hover-lift">
            <div className="stat-value">4.8</div>
            <div className="stat-label">User rating</div>
          </div>
        </Reveal>

        <div className="showcase-grid" id="platforms">
          <Reveal as="div" delay={100}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src={mt5Logo} alt="MetaTrader 5 Logo" loading="lazy" style={{ height: '48px', objectFit: 'contain' }} />
              <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--ink)' }}>MetaTrader 5</h3>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
              Experience the power of the world's most popular multi-asset platform. Analyze markets with over 80 pre-installed technical indicators, execute orders with lightning-fast low latency, and customize your setup to match your exact strategy. Available on Desktop, Mobile, and Web.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=www.mql5.com&utm_campaign=0524.mql5.channels" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Download for Windows
              </a>
              <a href="https://web.metatrader.app/terminal?lang=en" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Launch WebTrader
              </a>
            </div>
          </Reveal>

          <Reveal as="div" className="hover-glow" delay={300} style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '20px', background: 'rgba(255, 255, 255, 0.02)' }}>
            <img src={mt5Devices} alt="MetaTrader 5 Multi-Device Setup" loading="lazy" style={{ width: '100%', display: 'block', height: 'auto', objectFit: 'contain' }} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { Reveal } from '../hooks/useReveal'
import { useTheme } from '../hooks/useTheme'
import screenMt5Dark from '../assets/metatrader-5/screen_mt5_dark.png'
import screenMt5Light from '../assets/metatrader-5/screen_mt5_light.png'

export default function Advantages() {
  const { isDark } = useTheme()

  return (
    <section className="advantages section" id="advantages">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Discover <span className="gold">Explore Markets Limited</span> Advantages
        </Reveal>

        <div className="bento">
          <Reveal as="article" className="bento-card bento-main hover-lift" delay={0}>
            <div className="bento-copy">
              <h3>
                Trade <span className="gold">Anywhere</span>, The Power is Yours.
              </h3>
              <p>
                Execute from desktop or mobile with the same depth of liquidity and institutional
                pricing.
              </p>
              <a href="#platforms" className="link-arrow">
                Explore platforms →
              </a>
            </div>
            <div className="phone-float" aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '24px' }}>
              <div className="mini-phone" style={{ overflow: 'hidden', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '5px solid #1c1c1e', background: '#000', borderRadius: '32px', boxShadow: '0 25px 50px rgba(0,0,0,0.6)' }}>
                <div className="mini-phone-screen" style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden', borderRadius: '26px' }}>
                  <img 
                    src={isDark ? screenMt5Dark : screenMt5Light} 
                    alt="MetaTrader 5 App interface" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }} 
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="article" className="bento-card bento-spread hover-lift" delay={150}>
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
              alt="Trading charts on screen"
              loading="lazy"
            />
            <div className="bento-overlay">
              <h3>Trade with our Best Spreads</h3>
              <p>From 0.0 pips on major pairs during peak liquidity.</p>
            </div>
          </Reveal>

          <Reveal as="article" className="bento-card bento-withdraw hover-lift" delay={300}>
            <div className="withdraw-graphic" aria-hidden="true">
              <div className="wg-ring" />
              <div className="wg-core">24/7</div>
            </div>
            <h3>24/7 withdrawals</h3>
            <p>Request funds any time — processed with institutional speed.</p>

          </Reveal>

          <Reveal as="article" className="bento-card bento-stable hover-lift" delay={200}>
            <div className="stable-visual" aria-hidden="true">
              <div className="gold-stack" />
            </div>
            <h3>Stable Market Price</h3>
            <p>Deep liquidity from tier-1 providers for consistent fills.</p>
          </Reveal>


        </div>
      </div>
    </section>
  )
}

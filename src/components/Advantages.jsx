import { Reveal } from '../hooks/useReveal'
import { useTheme } from '../hooks/useTheme'
import screenMt5Dark from '../assets/metatrader-5/screen_mt5_dark.png'
import screenMt5Light from '../assets/metatrader-5/screen_mt5_light.png'
import screenMt5LeftDark from '../assets/metatrader-5/screen_mt5_left_dark.png'
import screenMt5LeftLight from '../assets/metatrader-5/screen_mt5_left_light.png'
import screenMt5RightDark from '../assets/metatrader-5/screen_mt5_right_dark.png'
import screenMt5RightLight from '../assets/metatrader-5/screen_mt5_right_light.png'

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
            <div className="phone-float" aria-hidden="true" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '100%', 
              marginTop: '32px',
              position: 'relative',
              height: '280px'
            }}>
              {/* Left Phone (Background) */}
              <div style={{ 
                position: 'absolute',
                left: 'calc(50% - 150px)',
                zIndex: 1,
                transform: 'scale(0.85)',
                opacity: 0.7,
                overflow: 'hidden', 
                padding: '0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '4px solid #1c1c1e', 
                background: '#000', 
                borderRadius: '24px', 
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
                width: '120px',
                height: '220px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
                  <img 
                    src={isDark ? screenMt5LeftDark : screenMt5LeftLight} 
                    alt="MetaTrader 5 Quotes Screen" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>

              {/* Right Phone (Background) */}
              <div style={{ 
                position: 'absolute',
                left: 'calc(50% + 30px)',
                zIndex: 1,
                transform: 'scale(0.85)',
                opacity: 0.7,
                overflow: 'hidden', 
                padding: '0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '4px solid #1c1c1e', 
                background: '#000', 
                borderRadius: '24px', 
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
                width: '120px',
                height: '220px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden', borderRadius: '20px' }}>
                  <img 
                    src={isDark ? screenMt5RightDark : screenMt5RightLight} 
                    alt="MetaTrader 5 Trade Screen" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              </div>

              {/* Center Phone (Foreground) */}
              <div className="mini-phone" style={{ 
                position: 'absolute',
                left: 'calc(50% - 70px)',
                zIndex: 2,
                transform: 'scale(1)',
                overflow: 'hidden', 
                padding: '0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: '5px solid #1c1c1e', 
                background: '#000', 
                borderRadius: '28px', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
                width: '140px',
                height: '250px',
                animation: 'floatY 5.5s ease-in-out infinite'
              }}>
                <div style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden', borderRadius: '23px' }}>
                  <img 
                    src={screenMt5Light} 
                    alt="MetaTrader 5 Chart Screen" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
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

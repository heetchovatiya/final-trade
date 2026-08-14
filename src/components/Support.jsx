import { Link } from 'react-router-dom'
import { Reveal } from '../hooks/useReveal'

export default function Support() {
  return (
    <section className="support-section">
      <div className="container">
        <Reveal className="support-banner-card">
          <div className="support-banner-content">
            <div className="support-badge">
              <span className="badge-dot">●</span> 24/5 GLOBAL SUPPORT
            </div>

            <h2 className="support-title">
              Expert help in <span className="gold-text">3 languages.</span>
            </h2>

            <p className="support-description">
              Our dedicated support team is available 24 hours a day, 5 days a week to assist you with any questions.
            </p>

            <div className="support-actions">
              <Link to="/contact" className="btn-contact-support">
                CONTACT SUPPORT
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px', flexShrink: 0 }}>
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div className="response-time">
                <span className="response-time-val">&lt;12hrs</span>
                <span className="response-time-label">AVG. RESPONSE</span>
              </div>
            </div>
          </div>

          <div className="support-banner-visual">
            <div className="floating-card-container">
              {/* Slanted Card */}
              <div className="slanted-blue-card">
                {/* Gold Headphone Icon inside slanted card */}
                <svg viewBox="0 0 80 80" fill="none" className="card-headset-icon">
                  <path d="M22 42v-6a18 18 0 0 1 36 0v6" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                  <rect x="16" y="40" width="12" height="18" rx="4" fill="var(--gold)" />
                  <rect x="52" y="40" width="12" height="18" rx="4" fill="var(--gold)" />
                  <path d="M58 58c0 6-5 10-12 10h-6" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                </svg>

                {/* Top-Right Badge: Globe Icon */}
                <div className="card-badge-globe">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                {/* Bottom-Left Badge: Chat Dots */}
                <div className="card-badge-dots">
                  <span className="dot-avatar avatar-gold"></span>
                  <span className="dot-avatar avatar-blue"></span>
                  <span className="dot-avatar avatar-white"></span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

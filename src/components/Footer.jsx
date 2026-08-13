import Logo from './Logo'
import { Link } from 'react-router-dom'

const COLS = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Contact', path: '/contact' }
    ],
  },
  {
    title: 'Markets',
    links: [
      { name: 'Forex', path: '/markets/forex' },
      { name: 'Commodities', path: '/markets/commodities' },
      { name: 'Indices', path: '/markets/indices' },
      { name: 'CFDs', path: '/markets/cfds' }
    ],
  },
  {
    title: 'Trading',
    links: [
      { name: 'Account Types', path: '/trading/accounts' },
      { name: 'Spreads & Fees', path: '/trading/spreads' },
      { name: 'Copy Trading', path: '/trading/copy-trading' },
      { name: 'Education', path: '/trading/education' }
    ],
  }
]

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <Logo variant="dark" />
        </div>

        <div className="footer-cols">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <Link key={l.name} to={l.path} onClick={() => window.scrollTo(0, 0)}>
                  {l.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <style>
          {`
            .company-details-section {
              margin-top: 24px;
              margin-bottom: 48px;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 48px;
            }
            .company-details-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-bottom: 32px;
              flex-wrap: wrap;
              gap: 16px;
            }
            .cd-subtitle {
              display: block;
              color: var(--gold);
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              margin-bottom: 8px;
              text-transform: uppercase;
            }
            .cd-title {
              font-size: 2.2rem;
              font-weight: 600;
              color: #fff;
              margin: 0;
              line-height: 1.1;
            }
            .cd-desc {
              color: var(--muted);
              font-size: 0.9rem;
            }
            .company-details-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            }
            .cd-box {
              background: #0b0c0e;
              border: 1px solid rgba(255, 255, 255, 0.04);
              padding: 24px;
              border-radius: 12px;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
            .cd-label {
              color: var(--gold);
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              text-transform: uppercase;
            }
            .cd-value {
              color: #f1f1f1;
              font-size: 0.95rem;
              font-weight: 500;
              line-height: 1.5;
            }
            .new-disclaimer p {
              font-size: 0.75rem;
              color: rgba(255, 255, 255, 0.45);
              line-height: 1.6;
              margin-bottom: 16px;
            }
            .new-disclaimer strong {
              color: rgba(255, 255, 255, 0.6);
              font-weight: 600;
            }
            @media (max-width: 768px) {
              .company-details-grid {
                grid-template-columns: 1fr;
              }
            }
          `}
        </style>

        <div className="company-details-section">
          <div className="company-details-header">
            <div>
              <span className="cd-subtitle">Explore Markets Limited</span>
              <h3 className="cd-title">Company Details</h3>
            </div>
            <span className="cd-desc">Official company information and contact details.</span>
          </div>

          <div className="company-details-grid">
            <div className="cd-box">
              <span className="cd-label">Company</span>
              <span className="cd-value">Explore Markets Limited</span>
            </div>
            <div className="cd-box">
              <span className="cd-label">Registered Number</span>
              <span className="cd-value">2026-00605</span>
            </div>
            <div className="cd-box">
              <span className="cd-label">Email</span>
              <span className="cd-value">Support@exploremarketslimited.com</span>
            </div>
            <div className="cd-box">
              <span className="cd-label">Contact Number</span>
              <span className="cd-value">+44 7459333264</span>
            </div>
            <div className="cd-box">
              <span className="cd-label">Registered Address</span>
              <span className="cd-value">Unit 1, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</span>
            </div>
            <div className="cd-box">
              <span className="cd-label">Physical Office Address</span>
              <span className="cd-value">No.6 Grand Riviere Road, Monchy, Gros Islet, Saint Lucia</span>
            </div>
          </div>
        </div>

        <div className="disclaimer new-disclaimer">
          <p>
            <strong>Risk statement:</strong> An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned on this website should seek their own financial or professional advice. Trading of securities, forex, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money. Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex Trading are not allowed in some countries, before investing your money, make sure whether your country is allowing this or not. You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any currency or spot metals trade. Nothing in this site should be read or construed as constituting advice on the part of Explore Markets Limited or any of its affiliates, directors, officers or employees.
          </p>
          <p>
            <strong>Restricted Regions:</strong> Explore Markets Limited does not provide services for citizens/residents of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan, United Arab Emirates and India. The services of Explore Markets Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
          </p>
        </div>

        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.45)' }}>© 2026 Explore Markets Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

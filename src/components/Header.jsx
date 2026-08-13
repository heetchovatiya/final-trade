import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV_ITEMS = [
  {
    label: 'Markets',
    children: [
      { to: '/markets/forex', label: 'Forex' },
      { to: '/markets/commodities', label: 'Commodities' },
      { to: '/markets/indices', label: 'Indices' },
      { to: '/markets/cfds', label: 'CFDs' },
    ],
  },
  {
    label: 'Trading',
    children: [
      { to: '/trading/accounts', label: 'Account Types' },
      { to: '/trading/spreads', label: 'Spreads & Fees' },
      { to: '/trading/copy-trading', label: 'Copy Trading' },
      { to: '/trading/education', label: 'Education' },
    ],
  },
  {
    label: 'Platforms',
    scrollTo: 'platforms',
  },
  {
    label: 'Company',
    children: [
      { to: '/about', label: 'About Us' },
      /* REGULATION_ADJUSTMENTS_START: Hiding press page link */
      /* { to: '/press', label: 'Press & Media' }, */
      /* REGULATION_ADJUSTMENTS_END */
      { to: '/careers', label: 'Careers' },
      { to: '/contact', label: 'Contact Us' },
    ],
  },
]

export default function Header({ onOpenSignup }) {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  function handlePlatformsClick() {
    setMenuOpen(false)
    setOpenDropdown(null)
    if (location.pathname === '/') {
      document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#platforms'
    }
  }

  function toggleDropdown(label) {
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo compact />

        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            if (item.scrollTo) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className="nav-link"
                  onClick={handlePlatformsClick}
                >
                  {item.label}
                </button>
              )
            }

            return (
              <div
                key={item.label}
                className={`nav-dropdown ${openDropdown === item.label ? 'open' : ''}`}
                onMouseEnter={() => !menuOpen && setOpenDropdown(item.label)}
                onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="nav-dropdown-menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="nav-dropdown-item"
                      onClick={() => { setMenuOpen(false); setOpenDropdown(null) }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <span className="theme-toggle-track">
              <span className={`theme-toggle-thumb ${isDark ? 'dark' : ''}`}>
                {isDark ? '☾' : '☀'}
              </span>
            </span>
          </button>
          <button type="button" className="btn-text" onClick={onOpenSignup}>
            Log In
          </button>
          <button type="button" className="btn btn-gold btn-sm btn-create-account" onClick={onOpenSignup} aria-label="Create Account" title="Create Account">
            <span className="btn-text-desktop">Create Account</span>
            <span className="btn-icon-mobile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
          </button>
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

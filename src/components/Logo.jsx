import logoLight from '../assets/explore-markets-logo-light.png';
import logoDark from '../assets/explore-markets-logo.png';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', compact = false, variant }) {
  if (variant === 'dark' || variant === 'white') {
    return (
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()}
        aria-label="Explore Markets Limited home"
        style={{ textDecoration: 'none' }}
      >
        <img src={logoDark} alt="Explore Markets Limited" className="logo-img" />
      </Link>
    )
  }

  return (
    <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()}
      aria-label="Explore Markets Limited home"
      style={{ textDecoration: 'none' }}
    >
      <img src={logoDark} alt="Explore Markets Limited" className="logo-img img-dark-mode" />
      <img src={logoLight} alt="Explore Markets Limited" className="logo-img img-light-mode" />
    </Link>
  )
}


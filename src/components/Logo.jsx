import logoLight from '../assets/explore-markets-logo-light.png';
import logoDark from '../assets/explore-markets-logo.png';

export default function Logo({ className = '', compact = false, variant }) {
  if (variant === 'dark' || variant === 'white') {
    return (
      <a
        href="#home"
        className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()}
        aria-label="Explore Markets Limited home"
        style={{ textDecoration: 'none' }}
      >
        <img src={logoDark} alt="Explore Markets Limited" className="logo-img" />
      </a>
    )
  }

  return (
    <a
      href="#home"
      className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()}
      aria-label="Explore Markets Limited home"
      style={{ textDecoration: 'none' }}
    >
      <img src={logoDark} alt="Explore Markets Limited" className="logo-img img-dark-mode" />
      <img src={logoLight} alt="Explore Markets Limited" className="logo-img img-light-mode" />
    </a>
  )
}


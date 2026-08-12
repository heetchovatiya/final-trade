export default function Logo({ className = '', compact = false, variant }) {
  return (
    <a
      href="#home"
      className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()}
      aria-label="Explore Markets Limited home"
      style={{ textDecoration: 'none' }}
    >
      <div className="logo-mark">EXPLORE</div>
      <div className="logo-sub">MARKETS LIMITED</div>
    </a>
  )
}

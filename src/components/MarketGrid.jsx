import { Reveal } from '../hooks/useReveal'

const MARKETS = [
  {
    title: 'Forex',
    desc: 'Major currency pairs with competitive spreads during peak trading sessions.',
    meta: 'Liquid Pairs',
    icon: 'ƒx',
  },
  {
    title: 'Stocks',
    desc: 'Trade CFDs on blue-chip global companies including NVIDIA, Apple, Google, Amazon, and Tesla.',
    meta: 'Global Giants',
    icon: '↗',
  },
  {
    title: 'Indices',
    desc: 'Access top global equity indices like US500, US30, UK100, and GER40 from a single platform.',
    meta: 'Global Markets',
    icon: '📊',
  },
  {
    title: 'Commodities',
    desc: 'Trade gold, silver, oil, and other key commodities with tight spreads and flexible leverage.',
    meta: 'Hard Assets',
    icon: '⛏️',
  },
]

export default function MarketGrid({ onOpenSignup }) {
  return (
    <section className="markets-section section" id="asset-markets">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Markets built for <span className="gold">focused trading</span>
        </Reveal>
        <Reveal as="p" className="section-lead" delay={120}>
          Access the instruments you need from one account — priced for clarity, executed with speed.
        </Reveal>

        <div className="markets-grid">
          {MARKETS.map((m, i) => (
            <Reveal key={m.title} as="article" className="market-card hover-lift" delay={i * 120}>
              <div className="market-card__icon">{m.icon}</div>
              <div className="market-card__meta">{m.meta}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <button type="button" className="link-arrow link-arrow-btn" onClick={onOpenSignup}>
                Trade {m.title} →
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

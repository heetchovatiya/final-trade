import Hero from '../components/Hero'
import MarketGrid from '../components/MarketGrid'
import Advantages from '../components/Advantages'
import Showcase from '../components/Showcase'
import Screener from '../components/Screener'
import AccountTypes from '../components/AccountTypes'
import Results from '../components/Results'

export default function Home({ onOpenSignup }) {
  return (
    <main>
      <Hero onOpenSignup={onOpenSignup} />
      <MarketGrid onOpenSignup={onOpenSignup} />
      <Advantages />
      <Showcase />
      <Screener onOpenSignup={onOpenSignup} />
      <AccountTypes onOpenSignup={onOpenSignup} />
      {/* REGULATION_ADJUSTMENTS_START: Hiding the random/unproven Results numbers section */}
      {/* <Results onOpenSignup={onOpenSignup} /> */}
      {/* REGULATION_ADJUSTMENTS_END */}
    </main>
  )
}

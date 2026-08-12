import Hero from '../components/Hero'
import MarketGrid from '../components/MarketGrid'
import Advantages from '../components/Advantages'
import Screener from '../components/Screener'
import AccountTypes from '../components/AccountTypes'
import Results from '../components/Results'

export default function Home({ onOpenSignup }) {
  return (
    <main>
      <Hero onOpenSignup={onOpenSignup} />
      <MarketGrid onOpenSignup={onOpenSignup} />
      <Advantages />
      <Screener onOpenSignup={onOpenSignup} />
      <AccountTypes onOpenSignup={onOpenSignup} />
      <Results onOpenSignup={onOpenSignup} />
    </main>
  )
}

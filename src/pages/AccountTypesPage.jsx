import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import AccountTypes from '../components/AccountTypes'

export default function AccountTypesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
      <PageHero title="Account Types" subtitle="Choose the perfect environment for your trading strategy." />
      <AccountTypes />
    </main>
  )
}

import { useCallback, useState, useEffect } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'

// Pages
import Home from './pages/Home'
import About from './pages/About'
// import Careers from './pages/Careers'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Forex from './pages/Forex'
import Stocks from './pages/Stocks'
import Indices from './pages/Indices'
import Commodities from './pages/Commodities'
import AccountTypesPage from './pages/AccountTypesPage'
import SpreadsFees from './pages/SpreadsFees'
import CopyTrading from './pages/CopyTrading'
// REGULATION_ADJUSTMENTS_START: Hiding education page import
// import Education from './pages/Education'
// REGULATION_ADJUSTMENTS_END
import NotFound from './pages/NotFound'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToElement = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      
      // Try immediately
      scrollToElement()
      
      // Try again after a brief delay in case DOM element renders asynchronously
      const timer = setTimeout(scrollToElement, 150)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}

function Page() {
  const [signupOpen, setSignupOpen] = useState(false)
  const openSignup = useCallback(() => setSignupOpen(true), [])
  const closeSignup = useCallback(() => setSignupOpen(false), [])

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header onOpenSignup={openSignup} />

      <Routes>
        <Route path="/" element={<Home onOpenSignup={openSignup} />} />

        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* REGULATION_ADJUSTMENTS_START: Hiding press page route */}
        {/* <Route path="/press" element={<Press />} /> */}
        {/* REGULATION_ADJUSTMENTS_END */}
        <Route path="/contact" element={<Contact />} />

        {/* Markets Pages */}
        <Route path="/markets/forex" element={<Forex />} />
        <Route path="/markets/stocks" element={<Stocks />} />
        <Route path="/markets/indices" element={<Indices />} />
        <Route path="/markets/commodities" element={<Commodities />} />

        {/* Trading Pages */}
        <Route path="/trading/accounts" element={<AccountTypesPage />} />
        <Route path="/trading/spreads" element={<SpreadsFees />} />
        <Route path="/trading/copy-trading" element={<CopyTrading />} />
        {/* REGULATION_ADJUSTMENTS_START: Hiding education page route */}
        {/* <Route path="/trading/education" element={<Education />} /> */}
        {/* REGULATION_ADJUSTMENTS_END */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <SignupModal open={signupOpen} onClose={closeSignup} />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

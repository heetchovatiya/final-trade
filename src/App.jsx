import { useCallback, useState } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Forex from './pages/Forex'
import Commodities from './pages/Commodities'
import Indices from './pages/Indices'
import CFDs from './pages/CFDs'
import AccountTypesPage from './pages/AccountTypesPage'
import SpreadsFees from './pages/SpreadsFees'
import CopyTrading from './pages/CopyTrading'
import Education from './pages/Education'

function Page() {
  const [signupOpen, setSignupOpen] = useState(false)
  const openSignup = useCallback(() => setSignupOpen(true), [])
  const closeSignup = useCallback(() => setSignupOpen(false), [])

  return (
    <BrowserRouter>
      <Header onOpenSignup={openSignup} />
      
      <Routes>
        <Route path="/" element={<Home onOpenSignup={openSignup} />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />

        {/* Markets Pages */}
        <Route path="/markets/forex" element={<Forex />} />
        <Route path="/markets/commodities" element={<Commodities />} />
        <Route path="/markets/indices" element={<Indices />} />
        <Route path="/markets/cfds" element={<CFDs />} />

        {/* Trading Pages */}
        <Route path="/trading/accounts" element={<AccountTypesPage />} />
        <Route path="/trading/spreads" element={<SpreadsFees />} />
        <Route path="/trading/copy-trading" element={<CopyTrading />} />
        <Route path="/trading/education" element={<Education />} />
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

import { useCallback, useState } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'

// Pages
import Home from './pages/Home'
import GenericPage from './pages/GenericPage'

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
        <Route path="/about" element={<GenericPage title="About Us" />} />
        <Route path="/careers" element={<GenericPage title="Careers" />} />
        <Route path="/press" element={<GenericPage title="Press" />} />
        <Route path="/contact" element={<GenericPage title="Contact" />} />

        {/* Markets Pages */}
        <Route path="/markets/forex" element={<GenericPage title="Forex Trading" />} />
        <Route path="/markets/commodities" element={<GenericPage title="Commodities Trading" />} />
        <Route path="/markets/indices" element={<GenericPage title="Indices Trading" />} />
        <Route path="/markets/cfds" element={<GenericPage title="CFD Trading" />} />

        {/* Trading Pages */}
        <Route path="/trading/accounts" element={<GenericPage title="Account Types" />} />
        <Route path="/trading/spreads" element={<GenericPage title="Spreads & Fees" />} />
        <Route path="/trading/copy-trading" element={<GenericPage title="Copy Trading" />} />
        <Route path="/trading/education" element={<GenericPage title="Education" />} />
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

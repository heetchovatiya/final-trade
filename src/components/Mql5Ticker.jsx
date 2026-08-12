import { useEffect, useRef } from 'react'

export default function Mql5Ticker() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Clean up
    el.innerHTML = ''

    // 1. Create target widget div
    const widgetDiv = document.createElement('div')
    widgetDiv.id = 'quotesWidgetTicker'
    el.appendChild(widgetDiv)

    // 2. Create copyright div (MQL5 requirement)
    const copyrightDiv = document.createElement('div')
    copyrightDiv.className = 'qw-copyright'
    copyrightDiv.style.display = 'none'
    copyrightDiv.innerHTML = '<a href="https://www.metatrader.com/" rel="noopener nofollow" target="_blank">MetaTrader World Markets</a>'
    el.appendChild(copyrightDiv)

    // 3. Create script tag
    const script = document.createElement('script')
    script.async = true
    script.type = 'text/javascript'
    script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=3'
    script.setAttribute('data-type', 'quotes-widget')
    script.text = JSON.stringify({
      type: 'ticker',
      filter: ['EURUSD', 'USDJPY', 'GBPUSD', 'AUDUSD', 'USDCAD', 'USDCHF', 'NZDUSD', 'XAUUSD', 'BTCUSD'],
      width: '100%',
      height: 40,
      id: 'quotesWidgetTicker',
      fw: 'html'
    })

    el.appendChild(script)

    return () => {
      if (el) el.innerHTML = ''
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        background: '#070707', 
        borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
        minHeight: '40px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1001
      }} 
    />
  )
}

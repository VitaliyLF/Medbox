import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.scss'

const RootLayout = async ({ children }) => {
  return (
    <html lang="en" className="page">
      <body className="page__body">
        <a className="skiplink" href="#main">
          <span className="skiplink__text" data-title="Enter">
            Skip to Content
          </span>
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

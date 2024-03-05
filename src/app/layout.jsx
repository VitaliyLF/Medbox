import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import './globals.scss'

export const GilroyFont = localFont({
  src: [
    {
      path: './fonts/GilroyRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-family-base',
})

const RootLayout = async ({ children }) => {
  return (
    <html lang="en" className={`page ${GilroyFont.variable}`}>
      <body className="page__body">
        <a className="skiplink" href="#main">
          Go to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

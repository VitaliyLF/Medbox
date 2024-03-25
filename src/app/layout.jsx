import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import './globals.scss'

export const AgrandirFont = localFont({
  src: [
    {
      path: '../app/fonts/AgrandirRegular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-family-base'
})

export const AtkinsonHyperlegibleFont = localFont({
  src: [
    {
      path: '../app/fonts/AtkinsonHyperlegibleRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../app/fonts/AtkinsonHyperlegibleBold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-family-accent'
})

export const DMSansFont = localFont({
  src: [
    {
      path: '../app/fonts/DMSansRegular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-family-additional'
})

const RootLayout = async ({ children }) => {
  return (
    <html
      lang="en"
      className={`page ${AgrandirFont.variable} ${AtkinsonHyperlegibleFont.variable} ${DMSansFont.variable}`}>
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

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import './globals.scss'

export const AgrandirFont = localFont({
  src: [
    {
      path: './fonts/AgrandirRegular.woff2',
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
      path: './fonts/AtkinsonHyperlegibleRegular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/AtkinsonHyperlegibleBold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-family-base'
})

export const DMSansFont = localFont({
  src: [
    {
      path: './fonts/DMSansRegular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-family-base'
})

const RootLayout = async ({ children }) => {
  return (
    <html
      lang="en"
      className={`page ${AgrandirFont.variable} ${AtkinsonHyperlegibleFont.variable} ${DMSansFont.variable}`}
    >
      <body className="page__body">
        <a className="skiplink" href="#main">
          <span className="skiplink__text"> Skip to Content</span>
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

// import { Analytics } from '@vercel/analytics/react'
// import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local'
// import { Inter } from 'next/font/google'
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

// const inter = Inter({ subsets: ['latin'] })

const RootLayout = async ({ children }) => {
  return (
    <html lang="en" className={`page ${GilroyFont.variable}`}>
      <body className="page__body">
        <a className="skiplink" href="#main">
          Skip to content
        </a>
        {children}
        {/* <Analytics />
        <GoogleAnalytics gaId="" /> */}
      </body>
    </html>
  )
}

export default RootLayout

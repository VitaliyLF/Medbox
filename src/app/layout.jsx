import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getDataHomePage } from './lib/getDataHomePage'
import './globals.scss'
import Header from '@/components/sections/Header/Header'
import Footer from '@/components/sections/Footer/Footer'

export const metadata = {
  title: {
    default: 'Medbox',
  },
}

const RootLayout = async ({ children }) => {
  const dataHomePage = await getDataHomePage()

  return (
    <html lang="en" className="page custom-scrollbar">
      <body className="page__body">
        <a className="skiplink" href="#main">
          <span className="skiplink__text" data-title="Enter">
            Skip to Content
          </span>
        </a>
        <div className="site-container">
          <Header headerContent={dataHomePage?.header} />
          {children}
          <Footer footerContent={dataHomePage?.footer} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

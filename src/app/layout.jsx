import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getDataHomePage } from './lib/getDataHomePage'
import { getDataHeader } from './lib/getDataHeader'
import Header from '@/components/sections/Header/Header'
import Footer from '@/components/sections/Footer/Footer'
import SkipLink from '@/components/common/SkipLink/SkipLink'
import './globals.scss'

export const metadata = {
  title: {
    default: 'Medbox',
  },
}

const RootLayout = async ({ children }) => {
  const dataHomePage = await getDataHomePage()
  const dataHeader = await getDataHeader()

  return (
    <html lang="en" className="page custom-scrollbar">
      <body className="page__body">
        <SkipLink />
        <div className="site-container">
          <Header headerContent={dataHeader.header} />
          {children}
          <Footer footerContent={dataHomePage.footer} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

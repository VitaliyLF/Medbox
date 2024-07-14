import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getDataHeader } from './lib/getDataHeader'
import { getDataFooter } from './lib/getDataFooter'
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
  const dataHeader = await getDataHeader()
  const dataFooter = await getDataFooter()

  return (
    <html lang="en" className="page custom-scrollbar">
      <body className="page__body">
        <SkipLink />
        <div className="site-container">
          <Header headerContent={dataHeader} />
          {children}
          <Footer footerContent={dataFooter} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout

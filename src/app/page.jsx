// import { getDataHomePage } from './lib/getData'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: {
    default: 'Medbox',
    template: '%s - default title',
  },
  description: 'description site',
  twitter: {
    description: 'description twitter',
    card: 'summary_large_image',
    url: 'https://youurl.net',
  },
  keywords: '',
  robots: 'all',
  metadataBase: 'https://youurl.net',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'title site name',
    url: 'https://youurl.net',
  },
}
const HomePage = async () => {
  // const data = await getDataHomePage()

  return (
    <div className="site-container">
      <Header />
      <main className="homepage" id="main">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

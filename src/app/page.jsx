import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: {
    default: 'Medbox',
  },
}

const HomePage = async () => {
  const dataHomePage = await getDataHomePage()

  return (
    <div className="site-container">
      <Header headerContent={dataHomePage} />
      <main className="homepage" id="main">
        {/* <Hero /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage

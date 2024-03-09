// import { getDataHomePage } from './lib/getData'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Footer from '@/components/footer/Footer'

const HomePage = async () => {
  // const data = await getDataHomePage()

  return (
    <div className="site-container">
      <Header />
      <main className="homepage" id="main">
        {/* <Hero /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage

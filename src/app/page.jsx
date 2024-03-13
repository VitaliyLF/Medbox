import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import VideoBlock from '@/components/videoBlock/VideoBlock'

export const metadata = {
  title: {
    default: 'Medbox'
  }
}

const HomePage = async () => {
  const dataHomePage = await getDataHomePage()

  return (
    <div className="site-container">
      <Header headerContent={dataHomePage} />
      <main className="homepage" id="main">
        <Hero heroContent={dataHomePage} />
        <VideoBlock videoBlockContent={dataHomePage} />
      </main>
    </div>
  )
}

export default HomePage

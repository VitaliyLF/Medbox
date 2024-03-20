import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import VideoBlock from '@/components/videoBlock/VideoBlock'
import ListLine from '@/components/listLine/ListLine'

export const metadata = {
  title: {
    default: 'Medbox'
  }
}

const HomePage = async () => {
  const dataHomePage = await getDataHomePage()

  return (
    <div className="site-container">
      <Header headerContent={dataHomePage?.header} />
      <main className="homepage" id="main">
        <Hero heroContent={dataHomePage?.hero} />
        <VideoBlock videoBlockContent={dataHomePage?.videoSection} />
        <ListLine listLineContent={dataHomePage?.listLine} />
      </main>
    </div>
  )
}

export default HomePage

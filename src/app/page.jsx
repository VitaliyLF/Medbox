import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import VideoBlock from '@/components/videoBlock/VideoBlock'
import ListLine from '@/components/listLine/ListLine'
import Benefits from '@/components/benefits/Benefits'
import StickyList from '@/components/stickyList/StickyList'
import InfoBlock from '@/components/infoBlock/InfoBlock'
import States from '@/components/states/States'
import Feedback from '@/components/feedback/Feedback'

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
        <Benefits benefitsContent={dataHomePage?.benefits} />
        <StickyList stickyListContent={dataHomePage?.stickyList} />
        <InfoBlock infoBlockContent={dataHomePage?.infoBlock} />
        <States statesContent={dataHomePage?.states} />
        <Feedback feedBackContent={dataHomePage?.feedback} />
      </main>
    </div>
  )
}

export default HomePage

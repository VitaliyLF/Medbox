import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import VideoBlock from '@/components/videoBlock/VideoBlock'
import LineList from '@/components/lineList/LineList'
import Benefits from '@/components/benefits/Benefits'
import StickyList from '@/components/stickyList/StickyList'
import InfoBlock from '@/components/infoBlock/InfoBlock'
import States from '@/components/states/States'
import Feedback from '@/components/feedback/Feedback'
import Faq from '@/components/faq/Faq'
import Supporting from '@/components/supporting/Supporting'
import Resources from '@/components/resources/Resources'

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
        <LineList lineListContent={dataHomePage?.lineList} />
        <Benefits benefitsContent={dataHomePage?.benefits} />
        <StickyList stickyListContent={dataHomePage?.stickyList} />
        <InfoBlock infoBlockContent={dataHomePage?.infoBlock} />
        <States statesContent={dataHomePage?.states} />
        <Feedback feedBackContent={dataHomePage?.feedback} />
        <Faq faqContent={dataHomePage?.faq} />
        <Supporting supportingContent={dataHomePage?.supporting} />
        <Resources resourcesContent={dataHomePage?.resources} />
      </main>
    </div>
  )
}

export default HomePage

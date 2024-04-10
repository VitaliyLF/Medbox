import { getDataHomePage } from './lib/getDataHomePage'
import Header from '@/components/sections/header/Header'
import Hero from '@/components/sections/hero/Hero'
import VideoBlock from '@/components/sections/videoBlock/VideoBlock'
import LineList from '@/components/sections/lineList/LineList'
import Benefits from '@/components/sections/benefits/Benefits'
import StickyList from '@/components/sections/stickyList/StickyList'
import InfoBlock from '@/components/sections/infoBlock/InfoBlock'
import States from '@/components/sections/states/States'
import Feedback from '@/components/sections/feedback/Feedback'
import Faq from '@/components/sections/faq/Faq'
import Supporting from '@/components/sections/supporting/Supporting'
import Resources from '@/components/sections/resources/Resources'
import SignUp from '@/components/sections/signUp/SignUp'
import Footer from '@/components/sections/footer/Footer'

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
        <SignUp signUpContent={dataHomePage?.signUp} />
      </main>
      <Footer footerContent={dataHomePage?.footer} />
    </div>
  )
}

export default HomePage

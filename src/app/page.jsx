import { getDataHomePage } from './lib/getDataHomePage'
import Hero from '@/components/sections/Hero/Hero'
import VideoBlock from '@/components/sections/Video/Video'
import LineList from '@/components/sections/LineList/LineList'
import Benefits from '@/components/sections/Benefits/Benefits'
import StickyList from '@/components/sections/StickyList/StickyList'
import Banner from '@/components/sections/Banner/Banner'
import States from '@/components/sections/States/States'
import FeedbackSection from '@/components/sections/Feedback/Feedback'
import Faq from '@/components/sections/Faq/Faq'
import Supporting from '@/components/sections/Supporting/Supporting'
import Resources from '@/components/sections/Resources/Resources'
import SignUp from '@/components/sections/SignUp/SignUp'

const HomePage = async () => {
  const dataHomePage = await getDataHomePage()

  return (
    <main className="homepage" id="main">
      <Hero heroContent={dataHomePage.hero} />
      <VideoBlock videoBlockContent={dataHomePage.videoSection} />
      <LineList lineListContent={dataHomePage.lineList} />
      <Benefits benefitsContent={dataHomePage.benefits} />
      <StickyList stickyListContent={dataHomePage.stickyList} />
      <Banner bannerContent={dataHomePage.infoBlock} />
      <States statesContent={dataHomePage.states} />
      <FeedbackSection feedBackContent={dataHomePage.feedback} />
      <Faq faqContent={dataHomePage.faq} />
      <Supporting supportingContent={dataHomePage.supporting} />
      <Resources resourcesContent={dataHomePage.resources} />
      <SignUp signUpContent={dataHomePage.signUp} />
    </main>
  )
}

export default HomePage

import Banner from '@/components/sections/Banner/Banner'
import Benefits from '@/components/sections/Benefits/Benefits'
import Faq from '@/components/sections/Faq/Faq'
import Feedback from '@/components/sections/Feedback/Feedback'
import Hero from '@/components/sections/Hero/Hero'
import LineList from '@/components/sections/LineList/LineList'
import Resources from '@/components/sections/Resources/Resources'
import SignUp from '@/components/sections/SignUp/SignUp'
import States from '@/components/sections/States/States'
import StickyList from '@/components/sections/StickyList/StickyList'
import Supporting from '@/components/sections/Supporting/Supporting'
import VideoBlock from '@/components/sections/Video/Video'
import { getDataHomePage } from './lib/getDataHomePage'

const HomePage = async () => {
  const dataHomePage = await getDataHomePage()

  return (
    <main className="homepage" id="main">
      <Hero heroContent={dataHomePage.hero} />
      <VideoBlock videoBlockContent={dataHomePage.videoSection} />
      <LineList lineListContent={dataHomePage.lineList} />
      <Benefits benefitsContent={dataHomePage.benefits} />
      <StickyList stickyListContent={dataHomePage.stickyList} />
      <Banner bannerContent={dataHomePage.banner} />
      <States statesContent={dataHomePage.states} />
      <Feedback feedBackContent={dataHomePage.feedback} />
      <Faq faqContent={dataHomePage.faq} />
      <Supporting supportingContent={dataHomePage.supporting} />
      <Resources resourcesContent={dataHomePage.resources} />
      <SignUp signUpContent={dataHomePage.signUp} />
    </main>
  )
}

export default HomePage

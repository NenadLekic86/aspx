import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TitleAndText from './components/TitleAndText'
import ImageAndContent from './components/ImageAndContent'
import Blockchain from './components/Blockchain'
import SovereignExecutionLayer from './components/SovereignExecutionLayer'

import IllustrationImage from './assets/images/illustration-1.svg'
import CodeImage from './assets/images/code-img.svg'
import MeetTheTeam from './components/MeetTheTeam'
import Footer from './components/Footer'
import HeroSecond from './components/HeroSecond'


function App() {

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <HeroSecond />
      <TitleAndText />
      <ImageAndContent 
        src={IllustrationImage}
        title='An open, sovereign execution layer for the blockchain'
        content='Integrateblockchain infrastructure automationinto your app or protocol,enabling you to fine-tune, monetize, andexecutemodels using cryptographic schemes.'
        href='#'
      />
      <Blockchain />
      <SovereignExecutionLayer />
      <ImageAndContent 
        customSectionClass='engineered'
        src={CodeImage}
        subtitle='Setup in minutes'
        title='Engineered for a seamless developer experience.'
        content='Siddha is the simplest, quickest, and most dependable way to bridge assets across blockchains in your decentralized applications.'
        contentCustomClass='content'
      />
      <MeetTheTeam />
      <Footer />
    </>
  )
}

export default App

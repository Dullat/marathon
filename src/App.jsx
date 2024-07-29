import Hero from "./componants/Hero"
import TeaserSection from "./componants/TeaserSection"

import ThreeShow from "./assets/gol-gallery-desktop-large.webp"
import ImageGallery from "./componants/ImageGallery"
import StudioIntro from "./componants/StudioIntro"

function App() {
  return (
    <>
      <Hero />
      <TeaserSection />
      <ImageGallery image={ThreeShow} />
      <StudioIntro />
      {/* <TeaserSection /> */}
    </>
  )
}

export default App

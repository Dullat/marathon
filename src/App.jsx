import Hero from "./componants/Hero"
import TeaserSection from "./componants/TeaserSection"

import Teaser from "./assets/gol_teaser_bg_desktop_large.mp4"
import studioMovie from "./assets/vidoc_background_desktop_large.mp4"
import ThreeShow from "./assets/gol-gallery-desktop-large.webp"
import EyesPic from "./assets/goliath-worms-desktop-large.webp"
import ImageGallery from "./componants/ImageGallery"
import StudioIntro from "./componants/StudioIntro"
import SubscriptionSection from "./componants/SubscriptionSection"
import Marquee from "./componants/Marquee"

function App() {
  return (
    <>
      <Hero />
      <TeaserSection movie={Teaser} />
      <ImageGallery image={ThreeShow} />
      <StudioIntro />
      <TeaserSection movie={studioMovie} studio={true} />
      <ImageGallery image={EyesPic} />
      <SubscriptionSection />
      <Marquee />
    </>
  )
}

export default App

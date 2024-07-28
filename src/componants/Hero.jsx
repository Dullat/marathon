import HeroTop from "./HeroTop"
import HeroBottom from "./HeroBottom"
import HeroAfter from "./HeroAfter"

const Hero = () => {
  return (
    <div className="relative">
      <HeroTop height={40} />
      <HeroBottom />
      <HeroAfter />
    </div>
  )
}

export default Hero

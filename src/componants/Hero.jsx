import HeroTop from "./HeroTop"
import HeroBottom from "./HeroBottom"

const Hero = () => {
  return (
    <div className="h-[826px]">
      <HeroTop height={40} />
      <HeroBottom />
    </div>
  )
}

export default Hero

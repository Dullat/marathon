import FlavourGrid from "./FlavourGrid"
import TopBG from "../assets/goliath_hero_desktop_large.jpg"

const HeroTop = () => {
  return (
    <div
      className="min-h-dvh sm:min-h-[380px] xl:min-h-[640px] 2xl:min-h-[826px] bg-cover bg-center px-[10%]"
      style={{ backgroundImage: `url(${TopBG})` }}
    >
      <FlavourGrid />
    </div>
  )
}

export default HeroTop

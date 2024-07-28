import FlavourGrid from "./FlavourGrid"
import TopBG from "../assets/goliath_hero_desktop_large.jpg"

const HeroTop = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TopBG})` }}
      className="h-[826px] bg-cover bg-center px-[10%]"
    >
      <FlavourGrid />
    </div>
  )
}

export default HeroTop

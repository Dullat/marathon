import nameSvg from "../assets/gol-logo.svg"
import bottomBG from "../assets/goliath_about_bg_desktop_large.jpg"

const HeroBottom = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bottomBG})` }}
      className="h-[826px] bg-cover bg-center px-[10%] text-white relative grid grid-cols-4 grid-rows-hero"
    >
      <div className="px-4 absolute top-0 translate-y-[-50%] col-span-4 justify-self-center">
        <img src={nameSvg} alt="" />
      </div>
      <p className="text-3xl row-start-2 col-span-3 row-end-3 h-fit">
        a massive ghost ship hangs in low orbit over a lost colony on Tau Ceti
        IV. The 30,000 souls who call this place home have disappeared without a
        trace. Strange signals hint at mysterious artifacts, long-dormant AI,
        and troves of untold riches. You are a Runner, venturing into the
        unknown in a fight for fame… and infamy. Who among you will write their
        names across the stars?
      </p>
      <div className="row-start-2 col-span-1 h-fit justify-self-end">
        <svg
          width="6rem"
          height="5.9rem"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0024 0C5.82105 0 0 5.62352 0 12.5612C0 18.911 4.88286 24.1452 11.212 24.9892V16.5982C7.68468 15.8157 5.0525 12.7712 5.0525 9.12273C5.0525 4.88644 8.61171 1.448 12.9968 1.448C17.3819 1.448 20.9411 4.88644 20.9411 9.12273C20.9411 12.7912 18.2715 15.8565 14.7123 16.6136V25C21.0781 24.1867 25.9984 18.9372 25.9984 12.5612C26 5.62352 20.1789 0 12.9968 0H13.0024Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

export default HeroBottom

import SideTexture from "../assets/gol_about_texture.png"

const StudioIntro = () => {
  return (
    <div className="w-full relative sm:px-2 lg:px-8 px-[10%] h-full">
      <div className="absolute inset-0">
        <div className="flex justify-between items-center h-full">
          <img src={SideTexture} className="rotate-180" alt="" />
          <img src={SideTexture} alt="" />
        </div>
        <div></div>
      </div>
      <div className="absolute inset-0 sm:px-2 lg:px-8 px-[10%] grid grid-cols-flavourGrid *:border-r-[1px] *:border-slate-400 *:bg-white z-0">
        <div
          className="border-l-[1px]"
          style={{
            height: "calc(100% + 3rem)",
            transform: "translateY(-1.5rem)",
          }}
        ></div>
        <div></div>
        <div
          style={{
            height: "calc(100% + 3rem)",
            transform: "translateY(-1.5rem)",
          }}
        ></div>
        <div className="sm:hidden"></div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] py-10 relative z-10">
        <h1 className="col-span-2 text-8xl xl:text-7xl lg:text-6xl sm:text-4xl mb-24 lg:mb-16 sm:mb-8">
          from the Creators <br />
          <span className="font-semibold">of Halo and Destiny</span>
        </h1>
        <div className="col-span-2">
          <span className="relative bg-black text-6xl xl:text-5xl sm:text-3xl font-bold px-2 py-0 text-white">
            BNG07
            <svg
              className="absolute opacity-50 top-0 right-[0] translate-x-[120%] translate-y-[-120%] h-5 w-5 "
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.5 0V24M24.5 12L0.5 12" stroke="#000"></path>
            </svg>
          </span>
        </div>

        <div className="text-xl grid grid-cols-2 md:grid-cols-1 md:gap-8 col-span-2 my-24 lg:my-16 sm:my-8">
          <div className="pr-4 sm:pr-0">
            <p>
              <b>Become a Runner</b> in Bungie’s new sci-fi PvP extraction
              shooter. Compete for survival, riches, and renown in a world of
              evolving, persistent zones, where any run can lead to greatness.
            </p>
          </div>
          <div className="pr-4 sm:pr-0">
            <p>
              Marathon is currently in development for{" "}
              <b>PlayStation 5, Xbox Series X/S, and PC</b> with full cross play
              and cross save.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-6 col-span-2">
          <p>intrusion detected // security v209 11</p>
          <p>uesc log 898123-1909012 2333</p>
        </div>
      </div>
    </div>
  )
}

export default StudioIntro

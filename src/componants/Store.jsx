import { useEffect, useState } from "react"
import StaticBg from "../assets/gol_bungie_store_desktop_large.jpg"
import GifBg from "../assets/goliath_bungie_store.gif"

const Store = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    let width
    const handleResize = () => {
      width = window.innerWidth
      console.log(width)
      setWindowWidth(width)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="w-full relative bg-[#f3f3f3]">
      <div className="absolute inset-0 sm:px-2 lg:px-8 px-[10%] grid grid-cols-flavourGrid *:border-r-[1px] *:border-slate-400 *:bg-transparent z-0">
        <div className="border-l-[1px] px-2">
          <span className="text-sm font-bold ">MARATHON2689</span>
        </div>
        <div></div>
        <div>
          <span className="text-sm font-light px-2">2145-2367</span>
        </div>
        <div className="sm:hidden px-2">
          <span className="text-sm font-normal ">AAER-CF47</span> <br /> <br />
          <span className="text-sm font-light ">2319-2B67-DULLAT</span> <br />
          <span className="text-sm font-normal ">2145-2367</span>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-[auto_auto_auto] xl:flex xl:flex-col text-black pt-40 pb-8 px-[10%] sm:px-2 text-center mb-10 relative z-10">
        <h3 className="text-4xl font-bold col-start-2 col-span-2">
          marathon collection [000]
        </h3>
        <p className="text-3xl font-light mt-8 row-start-2 col-start-2 col-span-2">
          exclusive Marathon merchandise available now for a limited time.
        </p>
        <a
          className="text-3xl text-blue-800 mt-8 row-start-3 col-start-2 col-span-2"
          href=""
        >
          visit bungie store
        </a>
      </div>
      <div className="flex justify-center">
        {windowWidth > 1023 ? (
          <img src={StaticBg} alt="" />
        ) : (
          <img src={GifBg} className="w-full" alt="" />
        )}
      </div>
    </div>
  )
}

export default Store

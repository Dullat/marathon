import React, { useRef, useState } from "react"
import Teaser from "../assets/gol_teaser_bg_desktop_large.mp4"

const TeaserSection = () => {
  const [play, setPlay] = useState(true)
  const video = useRef()

  const handleClick = () => {
    setPlay((prev) => !prev)
    play ? video.current.pause() : video.current.play()
  }

  return (
    <div className="relative">
      <video
        ref={video}
        src={Teaser}
        autoPlay
        loop
        muted
        className="w-full h-auto sm:min-h-[400px] object-cover"
      >
        Your browser does not support the video tag.
      </video>

      <button className="absolute inset-0 flex flex-col items-center text-white">
        <span className="text-8xl font-bold  mt-20">teaser</span>
        <p className=" text-[12px] max-w-48 text-start mt-4 opacity-80">
          by 2850, <b>clone technology</b> allows a person to reliably shift
          their consciousness from their ‘born’ body to new, synthetic bodies
          and back again.
        </p>
      </button>
      <button
        onClick={handleClick}
        className="absolute bottom-4 z-30 text-2xl left-[50%] text-white translate-x-[-50%]"
      >
        {play ? "PAUSE" : "PLAY"}
      </button>
    </div>
  )
}

export default TeaserSection

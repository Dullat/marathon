import React from "react"
import Teaser from "../assets/gol_teaser_bg_desktop_large.mp4"

const TeaserSection = () => {
  return (
    <div>
      <video src={Teaser} autoPlay loop muted className="w-full h-auto">
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default TeaserSection

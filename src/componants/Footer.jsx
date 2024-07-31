import React from "react"
import nameSvg from "../assets/gol-logo.svg"

const Footer = () => {
  return (
    <div className="flex flex-col bg-black pt-32 items-center p-6 sm:pt-20">
      <img src={nameSvg} className="w-full max-w-6xl" alt="" />
      <div className="text-white text-center flex flex-col gap-8 pt-8">
        <a
          href="https://www.marathonthegame.com/"
          target="_blank"
          className="text-blue-800 text-3xl"
        >
          <span className="text-yellow-300">visit </span>Original website
        </a>
        <p>
          Bungie, the Bungie logo, Images, Videos, Marathon, and the Marathon
          logo are among the trademarks of Bungie, Inc.
        </p>
        <p>
          This site is a Learning project created for{" "}
          <span className="text-yellow-300">Learning</span> purposes, All
          original content and trademarks are the property of Bungie, Inc.
        </p>
        <p>
          i liked their theme, design and layout so i coded this, im not taking
          anythig away from Bungie or monetizing, i just want to show off my
          skills
        </p>

        <p className="text-2xl text-red-500">
          From bungie ..? <br /> Please contact if you want removal or if you
          have any question
          <br />
          <br />
          <br />
          <p className="text-white text-xl">jashandullat8@gmail.com</p>
        </p>
      </div>
    </div>
  )
}

export default Footer

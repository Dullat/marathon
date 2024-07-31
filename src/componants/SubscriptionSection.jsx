import React from "react"
import leftImage from "../assets/goliath-sign-up-flavor-left.webp"
import rightImage from "../assets/goliath-sign-up-flavor-right.webp"
import FlavourGrid from "./FlavourGrid"
import FlavourGridInnerBoxesHeroTop from "./FlavourGridInnerBoxesHeroTop"

const SubscriptionSection = () => {
  return (
    <div className="w-full bg-black relative">
      <div className="absolute z-0 inset-0 px-[10%] lg:px-6 sm:px-3">
        <FlavourGrid className={"text-[#c2fe0c]"}>
          <FlavourGridInnerBoxesHeroTop />
        </FlavourGrid>
      </div>
      <div className="flex flex-col items-center  relative text-white pt-40 pb-8 px-[10%] text-center">
        <svg
          width="156"
          height="74"
          viewBox="0 0 156 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="155.5"
            width="17"
            height="155"
            transform="rotate(90 155.5 0)"
            fill="white"
          />
          <rect
            x="62.5"
            y="32"
            width="14"
            height="31"
            transform="rotate(90 62.5 32)"
            fill="white"
          />
          <rect
            x="93.5"
            y="46"
            width="14"
            height="31"
            transform="rotate(90 93.5 46)"
            fill="white"
          />
          <rect
            x="124.5"
            y="60"
            width="14"
            height="31"
            transform="rotate(90 124.5 60)"
            fill="white"
          />
          <rect
            x="124.5"
            y="32"
            width="14"
            height="31"
            transform="rotate(90 124.5 32)"
            fill="white"
          />
          <rect
            x="155.5"
            y="46"
            width="14"
            height="31"
            transform="rotate(90 155.5 46)"
            fill="white"
          />
          <rect
            x="62.5"
            y="60"
            width="14"
            height="31"
            transform="rotate(90 62.5 60)"
            fill="white"
          />
          <rect
            x="31.5"
            y="46"
            width="14"
            height="31"
            transform="rotate(90 31.5 46)"
            fill="white"
          />
        </svg>
        <h3 className="mt-16 text-4xl sm:text-3xl font-bold">stay connected</h3>
        <p className="mt-10 text-4xl sm:text-3xl font-light">
          Never missout the latest Marathon news
        </p>
        <form action="" className="mt-12 flex flex-col w-[45rem] md:w-full">
          <label htmlFor="subscription" className="text-start font-light">
            connect email address<span className="text-[#c2fe0c]"> *</span>
          </label>
          <input
            id="subscription"
            type="text"
            className="border-[2px] border-white rounded-sm mt-4 outline-none bg-transparent
            text-3xl sm:text-xl p-3 w-full"
          />
          <button
            className="mt-10 bg-[#c2fe0c] uppercase text-black 
          text-6xl sm:text-4xl font-bold w-fit self-center
          px-4 py-2"
          >
            <span>sign-up</span>
          </button>
        </form>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <img src={leftImage} alt="" className="h-72" />
        </div>
        <div>
          <img src={rightImage} alt="" className="h-80" />
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection

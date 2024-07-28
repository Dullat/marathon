const HeroAfter = () => {
  return (
    <div className="px-[10%] w-full overflow-hidden absolute z-20 bottom-0 translate-y-[100%]">
      <div
        className={`grid grid-cols-4 grid-rows-[24px_24px] gap-0 *:bg-[#2e042c]`}
      >
        <div className="relative after:content-[''] after:block after:w-full after:h-[24px] after:bg-[#2e042c] after:absolute after:top-0 after:left-[-100%]"></div>
        <div className="row-start-2 col-start-2"></div>
        <div className="row-start-1 col-start-3"></div>
        <div className="row-start-2 col-start-4 relative after:content-[''] after:block after:w-full after:h-[24px] after:bg-[#2e042c] after:absolute after:top-0 after:right-[-100%]"></div>
      </div>
    </div>
  )
}

export default HeroAfter

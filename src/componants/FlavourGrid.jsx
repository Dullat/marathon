import FlavourGridInnerBoxesHeroTop from "./FlavourGridInnerBoxesHeroTop"

const FlavourGrid = ({ height }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-0 h-[32px] text-yellow-300 *:border-l-[1px] *:relative *:flex *:items-end *:text-[11px] *:font-semi-bold *:px-2`}
    >
      <FlavourGridInnerBoxesHeroTop />
    </div>
  )
}

export default FlavourGrid

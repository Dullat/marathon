import classNames from "classnames"

const FlavourGrid = ({ className, children, height = "32px" }) => {
  return (
    <div
      className={classNames(
        `grid grid-cols-flavourGrid gap-0 h-[${height}] text-yellow-300 *:border-l-[1px] *:relative *:flex *:items-end *:text-[11px] *:font-semi-bold *:px-2`,
        className
      )}
    >
      {children}
    </div>
  )
}

export default FlavourGrid

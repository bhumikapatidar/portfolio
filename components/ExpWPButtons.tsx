import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{ value: Category, handleCategory: Function, active: string }> = ({ value, handleCategory, active }) => {
  let className = "rounded-lg text-sm lg:text-lg font-semibold text-blue-400 bg-slate-100 hover:bg-slate-200 px-4 py-2"
  if (active === value)
    className += " bg-slate-200 border-b-4 border-slate-300"

  return (
      <button onClick={() => handleCategory(value)} className={className}>
        {value}
      </button>
  )
}


const ExpWPButtons: FunctionComponent<{ handleCategory: Function, active: string }> = (props) => {
  return (
    <div className="flex justify-center gap-2 lg:flex-col lg:px-3 lg:py-52 lg:space-y-3 list-none ">
      <NavItem value="IEEE" {...props} />
      <NavItem value="LMNOPQR" {...props} />
      <NavItem value="ABCXYZ" {...props} />
    </div>
  )
};

export default ExpWPButtons;

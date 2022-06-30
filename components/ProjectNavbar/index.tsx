//@ts-nocheck
import { FunctionComponent } from "react";
import { Category } from "../../constants/type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory,active }) => {
  let className = "font-semibold capitalize cursor-pointer hover:text-green-default";
  if (active === value) className += " text-green-default";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 list-none">
      <NavItem value="all" {...props} />
      <NavItem value="reactJS" {...props} />
      <NavItem value="nextJS" {...props} />
    </div>
  );
};

export default ProjectNavbar;

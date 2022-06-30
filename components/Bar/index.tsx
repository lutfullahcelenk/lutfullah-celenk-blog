import { FunctionComponent } from "react";
import { ISkill } from "../../constants/type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200">
      <div
        className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-default to-blue-400"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;

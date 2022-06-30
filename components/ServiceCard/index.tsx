/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import { Service } from "../../constants/type";

const ServiceCard: FunctionComponent<{ data: Service }> = ({
  data: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-12 h-12 text-green-default" />
      
      <div className="h-32">
        <h4 className="pt-4 pb-2 font-bold text-red-500">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;

/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import { Service } from "../../constants/type";

const ServiceCard: FunctionComponent<{ data: Service }> = ({
  data: { title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4 ">
      <div className="h-32">
        <h4 className="py-4 font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;

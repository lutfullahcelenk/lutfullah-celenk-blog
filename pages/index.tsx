//@ts-nocheck
import { services } from "../constants/data";
//components
import ServiceCard from "../components/ServiceCard/index";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="w-2/3 my-3 text-base font-medium">
        I have graduated from an Information Technology education program from
        Virginia with a scholarship.  I have 2+ years of experience in Web
        Development and I have a Youtube Channel where I teach Front End Web
        Development
      </h6>
      <div
        className="flex-grow p-4 mt-5 text-left bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="mx-6 my-5 text-2xl font-semibold tracking-wide">
          My Portfolio
        </h4>

        <div className="grid gap-6 mt-10 lg:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

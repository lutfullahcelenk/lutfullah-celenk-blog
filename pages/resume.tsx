//components
import Bar from "../components/Bar/index";
//data
import { languages, tools } from "../constants/data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* education && exp*/}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold uppercase">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Software Engineering
            </h5>
            <p className="font-semibold">FrontEnd Development Program</p>
            <p className="w-3/4 my-3 text-justify">
              I have graduated from the 9-month intense Front End Development
              Program in Virginia. I have a certificated in this field.{" "}
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold uppercase">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Front End Developer
            </h5>
            <p className="font-semibold">Westerops (2021 - on)</p>
            <p className="w-3/4 my-3 text-justify">
              I started in this company as a FrontEnd Developer and take parts
              on 7 on-live projects. I have used some methodologies and
              technologies about FrontEnd Development such as ReactJS,
              Typescript, NextJS, TailwindCSS, React-Redux.
            </p>
          </div>
        </div>
      </div>

      {/* languuages && tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-xl font-bold text-red-500">
            Languages && Frameworks
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-2 text-xl font-bold text-red-500">
            Tools && Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

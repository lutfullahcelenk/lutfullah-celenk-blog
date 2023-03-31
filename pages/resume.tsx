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
              Front End Development
            </h5>
            <p className="font-semibold">FrontEnd Development Program</p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
              I have graduated from the 9-month intense Front End Development
              Program in Virginia. I have a certificated in this field.{" "}
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Bachelors Degree
            </h5>
            <p className="font-semibold">Turkish Military Academy</p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
              I have graduated from Kuleli Military High School at 2011 and
              carried on my education on Turkish Military Acedemy and have
              graduated at 2015 as a Civil Engineer.
            </p>
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold uppercase">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Mid Front End Developer
            </h5>
            <p className="font-semibold">Vodafone (January 2023 - present)</p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
              I am a part of Zeus project which is awarded for the 3 times
              nternationally, as a mid level front end developer. I have used
              some technologies such as ReactJS, Bootstrap, Redux Saga, Formik,
              Sass etc.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Mid Front End Developer
            </h5>
            <p className="font-semibold">
              UPayments (August 2022 - January 2023)
            </p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
              I am a part of a NextJs E-Commerce project as a mid level front
              end developer. I have used some technologies such as NextJS,
              TypeScript, Redux Toolkit, TailwindCSS, Husky, Cypress Testing
              Library, Storybook.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold text-red-500">
              Front End && ReactJS Developer
            </h5>
            <p className="font-semibold">
              Westerops (September 2021 - August 2022)
            </p>
            <p className="w-full sm:w-3/4 my-3 text-justify">
              I started in this company as a FrontEnd Developer and take parts
              on 7 on-live projects. I have used some methodologies and
              technologies about FrontEnd Development such as ReactJS,
              Typescript, NextJS, TailwindCSS, React-Redux.
            </p>
          </div>
        </div>
      </div>

      {/* languuages && tools */}
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <div>
        <h5 className="flex flex-col xl:flex-row my-2 text-xl font-bold text-red-500">
            <span>Languages && </span> <span className="xl:px-1 px-0">Frameworks</span>
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="flex flex-col xl:flex-row my-2 text-xl font-bold text-red-500">
            <span>Tools && </span> <span className="xl:px-1 px-0">Softwares</span>
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

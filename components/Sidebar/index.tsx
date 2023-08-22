// @ts-nocheck
import profile from "../../assets/profile.jpeg";
import Image from "../../node_modules/next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const emailText = "lutfullahclnk1104@gmail.com";

  const emailTo = () => {
    navigator.clipboard.writeText(emailText);
    window.open("mailto:lutfullahclnk1104@gmail.com");
  }

  return (
    <div>
      <Image
        src={profile}
        alt="Picture of me"
        width={500}
        height={500}
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl text-red-800 dark:text-red-700 font-bold tracking-wider font-oswald">
        Lütfullah <span>ÇELENK</span>
      </h3>
      <p className="px-2 py-1 my-3 text-white bg-red-700 rounded-full dark:bg-dark-200">
        FrontEnd Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 text-white bg-red-700 rounded-full dark:bg-dark-200"
        href="/images/Lutfullah-celenk-cv.pdf"
        download="Lutfullah Celenk - Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* Social Links*/}
      <div className="flex justify-around w-3/4 mx-auto my-5 text-red-700 dark:text-white md:w-full">
        <a
          href="https://github.com/lutfullahcelenk"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/lutfullah-celenk/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/lutfullahclnk/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center gap-x-2">
          <GoLocation />
          <span>Iskenderun, Hatay</span>
        </div>
        <p className="my-2 hover:text-maroon-500 dark:hover:text-maroon-400 hover:cursor-pointer"
          onClick={emailTo}
        >{emailText}</p>
        <p className="my-2">+(90) 530 979 1104</p>
      </div>

      {/* Email */}
      <button
        onClick={emailTo}
        className="w-2/3 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-red-700 to-red-400 dark:bg-gradient-to-l dark:from-dark-200 dark:to-gray-700 focus:outline-none"
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-2/3 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-red-700 to-red-400 dark:bg-gradient-to-l dark:from-dark-200 dark:to-gray-700 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;

import profile from "../../assets/profile.jpeg";
import Image from "../../node_modules/next/image";
// @ts-ignore
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
// @ts-ignore
import { GoLocation } from "react-icons/go";
// @ts-ignore
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <Image
        src={profile}
        alt="Picture of me"
        width={500}
        height={500}
        className="rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Lütfullah <span>ÇELENK</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        FrontEnd Developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* Social Links*/}
      <div className="flex justify-around my-5 text-green-default w-3/4 md:w-full mx-auto">
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
        className="my-5 py-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center gap-x-2">
          <GoLocation />
          <span>Iskenderun, Hatay</span>
        </div>
        <p className="my-2">lutfullahclnk1104@gmail.com</p>
        <p className="my-2">+(90) 530 979 1104</p>
      </div>

      {/* Email */}
      <button
        onClick={() => window.open("mailto:lutfullahclnk1104@gmail.com")}
        className="bg-gradient-to-r from-green-default to-blue-400 w-2/3 rounded-full py-2 px-5 my-2 focus:outline-none"
      >
        Email Me
      </button>
      <button className="bg-gradient-to-r from-green-default to-blue-400 w-2/3 rounded-full py-2 px-5 my-2">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;

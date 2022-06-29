/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
//@ts-ignore
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return (
    activeItem !== name && (
      <Link href={route}>
        <span
          className="hover:text-green-default cursor-pointer"
          onClick={() => setActiveItem(name)}
        >
          {name}
        </span>
      </Link>
    )
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-default text-xl border-b-4 border-green-default md:text-2xl">
        {activeItem}
      </span>

      <div className="flex gap-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"About"}
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"Projects"}
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={"Resume"}
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;

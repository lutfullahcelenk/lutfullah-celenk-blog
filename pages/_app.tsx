//@ts-nocheck
import "../styles/globals.css";
//components
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-8 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-700 xl:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl xl:col-span-9 dark:bg-dark-700">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

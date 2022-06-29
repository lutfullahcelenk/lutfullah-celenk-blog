import "../styles/globals.css";
//components
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 my-8 lg:px-48 px-5 sm:px-20 md:px-32">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 p-4 text-center flex flex-col">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

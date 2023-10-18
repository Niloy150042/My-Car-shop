import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;

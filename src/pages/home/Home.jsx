import Navbar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sideBar/SideBar";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;

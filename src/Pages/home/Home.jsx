import "./home.css";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("/user");
  }, []);
  return (
    <div>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

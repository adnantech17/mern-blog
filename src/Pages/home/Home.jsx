import "./home.css";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";

const Home = () => {
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

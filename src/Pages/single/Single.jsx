import "./single.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import SinglePost from "../../Components/singlepost/SinglePost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = (props) => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="single">
      {post ? <SinglePost post={post} /> : <h1>Loading</h1>}

      <Sidebar />
    </div>
  );
};

export default Single;

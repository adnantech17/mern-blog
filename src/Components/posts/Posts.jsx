import "./posts.css";
import Post from "../post/Post";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="posts">
      {posts ? (
        posts.map((post) => <Post post={post} key={post._id} />)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Posts;

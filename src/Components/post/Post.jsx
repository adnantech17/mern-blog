import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        src="https://i1.wp.com/www.globalbrandsmagazine.com/wp-content/uploads/2013/10/Dell-Inspiron-1.png?resize=740%2C574&ssl=1"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          {post.tags.map((tag) => (
            <span className="postCat" key={tag._id}>
              {tag.name}
            </span>
          ))}
        </div>
        <div className="postTitle">
          <Link to={"/post/" + post._id}>{post.title}</Link>
        </div>
        <hr />
        <div className="postDate">{post.createdAt}</div>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;

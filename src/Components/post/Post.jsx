import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://i1.wp.com/www.globalbrandsmagazine.com/wp-content/uploads/2013/10/Dell-Inspiron-1.png?resize=740%2C574&ssl=1"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Entertainment</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor sit amet.</div>
        <hr />
        <div className="postDate">1 Hour Ago</div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis
        perferendis veniam voluptatem molestiae cum nemo quisquam explicabo
        delectus nostrum, voluptate quae dicta quam amet sunt natus itaque
        praesentium laborum! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Numquam expedita mollitia laborum asperiores, quaerat aliquam
        officiis. Reprehenderit quam, blanditiis iste aut hic corporis
        exercitationem perferendis optio dolores, necessitatibus, odit iure
      </p>
    </div>
  );
};

export default Post;

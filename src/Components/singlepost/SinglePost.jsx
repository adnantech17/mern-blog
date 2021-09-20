import "./singlePost.css";

const SinglePost = ({ post }) => {
  console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostTop">
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostDetails">
          <div className="singlePostleft">
            {post.createdAt} by {post.user_id}
          </div>
          <div className="singlePostRight">
            <div className="postCats">
              {post.tags.map((tag) => (
                <span className="postCat" key={tag._id}>
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="singlePostComment">
              <i className="fas fa-comments"></i> (0)
            </div>
          </div>
        </div>
      </div>

      <p className="singlePostDescription">{post.desc}</p>

      <div className="singlePostForm">
        <h3>Leave a Comment</h3>
        <br />

        <p className="comment-notes">
          Your email address will not be published. Required fields are marked
          *.
        </p>

        <form method="post" data-form-title="CONTACT US">
          <input type="hidden" data-form-email="true" />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              required=""
              placeholder="Name*"
              data-form-field="Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              required=""
              placeholder="Email*"
              data-form-field="Email"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="message"
              placeholder="Message"
              rows="7"
              data-form-field="Message"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-lg btn-primary form-group">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;

import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostTop">
        <h1>Blog Post</h1>
        <img
          src="https://i1.wp.com/www.globalbrandsmagazine.com/wp-content/uploads/2013/10/Dell-Inspiron-1.png?resize=740%2C574&ssl=1"
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">Lorem, ipsum dolor.</h1>
        <div className="singlePostDetails">
          <div className="singlePostleft">1 Years ago by adnantech17</div>
          <div className="singlePostRight">
            <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Entertainment</span>
            </div>
            <div className="singlePostComment">
              <i className="fas fa-comments"></i> (0)
            </div>
          </div>
        </div>
      </div>

      <p className="singlePostDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odio
        dolores provident sunt quae corrupti ipsum! Ipsam laboriosam, fugit nemo
        ullam voluptas minus inventore animi aliquid minima voluptate odio
        soluta blanditiis sit quam impedit dolore quibusdam saepe obcaecati
        doloribus, est, reprehenderit voluptatum et fugiat! Consequatur
        repellendus excepturi voluptate expedita molestias. Maxime, consectetur
        quas. Nostrum, tempore quisquam perferendis minus voluptatum vel quos
        culpa repellat maxime ex modi accusamus natus minima obcaecati laborum
        esse veniam! Totam voluptatum sit quas natus delectus deleniti
        doloremque odit debitis libero, ipsa quae
        <br />
        reprehenderit dolorum magnam consequatur amet vitae consequuntur.
        Necessitatibus, ex repudiandae at libero tempora natus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ea, odio dolores provident
        sunt quae corrupti ipsum! Ipsam laboriosam, fugit nemo ullam voluptas
        minus inventore animi aliquid minima voluptate odio soluta blanditiis
        sit quam impedit dolore quibusdam saepe obcaecati doloribus, est,
        reprehenderit voluptatum et fugiat! Consequatur repellendus excepturi
        voluptate expedita molestias. Maxime,
        <br />
        consectetur quas. Nostrum, tempore quisquam perferendis minus voluptatum
        vel quos culpa repellat maxime ex modi accusamus natus minima obcaecati
        laborum esse veniam! Totam voluptatum sit quas natus delectus deleniti
        doloremque odit debitis libero, ipsa quae reprehenderit dolorum magnam
        consequatur amet vitae consequuntur. Necessitatibus, ex repudiandae at
        libero tempora natus. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ea, odio dolores
        <br />
        provident sunt quae corrupti ipsum! Ipsam laboriosam, fugit nemo ullam
        voluptas minus inventore animi aliquid minima voluptate odio soluta
        blanditiis sit quam impedit dolore quibusdam saepe obcaecati doloribus,
        est, reprehenderit voluptatum et fugiat! Consequatur repellendus
        excepturi voluptate expedita molestias. Maxime, consectetur quas.
        Nostrum, tempore quisquam perferendis minus voluptatum vel quos culpa
        repellat maxime ex modi accusamus natus minima obcaecati laborum esse
        veniam! Totam voluptatum sit quas natus delectus deleniti doloremque
        odit debitis libero, ipsa quae reprehenderit dolorum magnam consequatur
        amet vitae consequuntur. Necessitatibus, ex repudiandae at libero
        tempora natus.
      </p>

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

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebarCatTitle">Categories</h3>
      <div className="sidebarCats">
        <p className="sidebarCat">
          <span>React</span>
          <span>(2)</span>
        </p>
        <p className="sidebarCat">
          Node<span>(2)</span>
        </p>
        <p className="sidebarCat">
          Django<span>(5)</span>
        </p>
        <p className="sidebarCat">
          Blockchain<span>(6)</span>
        </p>
        <p className="sidebarCat">
          Cats<span>(3)</span>
        </p>
        <p className="sidebarCat">
          Music<span>(1)</span>
        </p>
        <p className="sidebarCat">
          Travel<span>(1)</span>
        </p>
      </div>
      <h3 className="sidebarTagTitle">Tags</h3>
      <div className="sidebarTags">
        <span className="sidebarTag">Tutorial</span>
        <span className="sidebarTag">Node</span>
        <span className="sidebarTag">Django</span>
        <span className="sidebarTag">Crypto</span>
        <span className="sidebarTag">Blockchain</span>
        <span className="sidebarTag">Music</span>
        <span className="sidebarTag">Song</span>
      </div>
      <h3 className="sidebarSocialTitle">Social Media</h3>
      <div className="sidebarSocialAccounts">
        <i className="fab fa-facebook sidebarIcon"></i>
        <i className="fab fa-twitter sidebarIcon"></i>
        <i className="fab fa-instagram sidebarIcon"></i>
        <i className="fab fa-linkedin sidebarIcon"></i>
      </div>
    </div>
  );
};

export default Sidebar;

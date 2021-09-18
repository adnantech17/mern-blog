import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg"
        alt="blog image"
      />
    </div>
  );
};

export default Header;

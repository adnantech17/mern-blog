import { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState(null);
  const [tags, setTags] = useState(null);
  useEffect(() => {
    fetch("/category")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((err) => console.error(err));

    fetch("/tags")
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="sidebar">
      <h3 className="sidebarCatTitle">Categories</h3>
      <div className="sidebarCats">
        {cats ? (
          cats.map((cat) => (
            <p className="sidebarCat" key={cat._id}>
              <span>{cat.name}</span>
              <span>({cat.count})</span>
            </p>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <h3 className="sidebarTagTitle">Tags</h3>
      <div className="sidebarTags">
        {tags ? (
          tags.map((tag) => (
            <span key={tag._id} className="sidebarTag">
              {tag.name}
            </span>
          ))
        ) : (
          <h1>Loading</h1>
        )}
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

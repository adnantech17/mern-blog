import "./topbar.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const Topbar = () => {
  const [login, setLogin] = useContext(LoginContext);
  useEffect(() => {
    Cookies.get("auth-token") ? setLogin(true) : setLogin(false);
  }, []);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook topIcon"></i>
        <i className="fab fa-twitter topIcon"></i>
        <i className="fab fa-instagram topIcon"></i>
        <i className="fab fa-linkedin topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about-us">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact-us">Contact</Link>
          </li>
          {login && (
            <li className="topListItem">
              <Link to="/new-post">Write</Link>
            </li>
          )}
          <li className="topListItem">
            {login ? (
              <Link
                to="/login"
                onClick={() => {
                  setLogin(false);
                  Cookies.remove("auth-token");
                }}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
};

export default Topbar;

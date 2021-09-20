import "./App.css";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import NewPost from "./Pages/newpost/NewPost";
import Single from "./Pages/single/Single";
import Footer from "./Components/footer/Footer";
import LoginPage from "./Pages/login/LoginPage";
import RegisterPage from "./Pages/register/RegisterPage";
import AboutUs from "./Pages/about-us/AboutUs";
import ContactUs from "./Pages/contact-us/ContactUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [login] = useContext(LoginContext);
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="page">
          <Switch>
            <Route path="/new-post">
              {login ? <NewPost /> : <Redirect to="/login" />}
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/post/:id">
              <Single />
            </Route>
            <Route path="/category/:name">
              <Single />
            </Route>
            <Route path="/login">
              {login ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

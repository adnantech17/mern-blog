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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="page">
          <Switch>
            <Route path="/new-post">
              <NewPost />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/single">
              <Single />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/">
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

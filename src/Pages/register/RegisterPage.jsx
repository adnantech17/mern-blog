import "./register.scss";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>create</button>
          <p class="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

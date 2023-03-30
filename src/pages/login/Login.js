  import { Outlet,Link } from "react-router-dom"
  import "./login.css";

  function Login() {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login">
              <span className="loginTitle">Login</span>
              <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
              </form>
                <Link to="/Register"><button className="loginRegisterButton">Register</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
      </>
    );
  }
  export default Login
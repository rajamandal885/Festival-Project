import { Outlet,Link } from "react-router-dom"
import "./register.css"

function Register() {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col">
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
       <Link to="/Login"> <button className="registerLoginButton">Login</button></Link>
        </div>
          </div>
        </div>
      </div>
    <Outlet/>
    </>
    )
}
export default Register
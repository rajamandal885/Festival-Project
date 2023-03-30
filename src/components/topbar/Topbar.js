    import { Outlet, Link } from "react-router-dom";
    import "./topbar.css";
    import logo from "../../image/logo.png"
    import 'bootstrap/dist/css/bootstrap.min.css'
    const Topbar = () => {
      return (
        
          
          <div className="top">
          <nav className ="navbar navbar-expand-lg navbar-light bg-light">
      
      <img
        className="navbar-brand"
        src={logo}
        alt=""
      />
          <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>

      <div className ="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className ="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className ="nav-item padd_right active">
            <Link className="nav-link" to="/">Home<span className ="sr-only">(current)</span></Link>
          </li>
          <li className ="nav-item padd_right">
          <Link className="nav-link" to="/about">About </Link>
          </li>
          <li className ="nav-item padd_right">
          <Link className="nav-link" to="/write">Write</Link>
          </li>
          <li className ="nav-item padd_right">
          <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className ="nav-item">
          <Link className="nav-link" to="/setting">Settings</Link>
          </li>
        </ul>
        </div>
      
          </nav>
      
          <Outlet />
      
          </div>
  )
}

export default Topbar




































{/* //  function Topbar() {
 //</div> <>
//   const user = true;
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               HOME
//             </Link>
//           </li>
//           <li className="topListItem">ABOUT</li>
//           <li className="topListItem">CONTACT</li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           {user && <li className="topListItem">LOGOUT</li>}
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link className="link" to="/settings">
//             <img
//               className="topImg"
//               src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//             />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// } */}

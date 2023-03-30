      import "./header.css";
      function Header() {
        return (

          <header>
            <div className="container-fluid "  >

            
                <a  className="navbar-title" style={{fontFamily:"sans-serif"}}>FESTIVAL BLOG</a>
              

              
              <div className="row">
                <div className="col">
            <nav className="navbar">
            </nav>
            <div className="banner">
              <div className="container1">
                <h1 className="banner-title">
                  <span>That Festival life •</span>  Worldwide Festival Blogger
                </h1>
                <p className="mini" style={{fontFamily:"cursive"}}>EVERYTHING YOU NEED TO TAKE TO MAKE THE MOST OUT OF YOUR NEXT MUSIC FESTIVAL</p>
                <form>
                  <input type="text" className="search-input" placeholder="find your festival . . ." />
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
                </div>
              </div>
            </div>
          </header>


    )
  }

  export default Header


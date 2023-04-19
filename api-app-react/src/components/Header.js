import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
// import "./bootstrap.min.css"

const Header = () => {
  return (
    <div>
      {/* Page Preloder */}
      {/* <div id="preloder">
    <div className="loader" />
  </div> */}
      {/* Header section */}
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="site-logo">
                <img src="img/logo.png" alt="" />
              </div>
              <div className="nav-switch">
                <i className="fa fa-bars" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <NavLink to='/login' className="site-btn header-btn">
                  Se connecter
              </NavLink>
              <nav className="main-menu">
                <ul>
                  <NavLink  to="/" className={(nav) => (nav.isActive ? "lien-active" : "lien")}>
                    <li>Acceuil</li>
                  </NavLink>
                  <NavLink to="/course" className={(nav) => (nav.isActive ? "lien-active" : "lien")}>
                    <li>Les Cours</li>
                  </NavLink>
                  <NavLink to="/contact" className={(nav) => (nav.isActive ? "lien-active" : "lien")}>
                    <li>Contact</li>
                  </NavLink>
                  {/* <li><a href="index.html" >Acceuil</a></li>
              <li><a href="courses.html">Cours</a></li>
              <li><a href="blog.html">Nouveauté</a></li>
              <li><a href="contact.html">Contact</a></li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header section end */}
      {/* Hero section */}
    </div>
  );
};

export default Header;

import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <div style={{height: '100px'}}>
        <center>
          <h1>Moi et toi</h1>
          <lord-icon
            src="https://cdn.lordicon.com/wdqztrtx.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "120px", height: "120px" }}
          ></lord-icon>
          
        </center>
      </div>
      {/* <section className="signup-section spad">
        <div
          className="signup-bg set-bg"
          data-setbg="img/signup-bg.jpg"
          style={{ backgroundImage: "url('img/bg.jpg')" }}
        /> */}
      {/* <Header /> */}
      {/* <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="signup-warp">
                <div className="section-title text-white text-left">
                  <h2>Connexion</h2>
                </div>
                <form className="signup-form">
                  <input type="text" placeholder="Votre E-mail" />
                  <input type="text" placeholder="Votre mot de passe" />
                  <button className="site-btn">Connecter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Login;

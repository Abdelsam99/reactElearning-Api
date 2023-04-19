import React from 'react';
import Header from '../components/Header';

const Login = () => {
    return (
        <section className="signup-section spad">
  <div className="signup-bg set-bg" data-setbg="img/signup-bg.jpg"
        style={{ backgroundImage: "url('img/bg.jpg')" }} />
    {/* <Header /> */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <div className="signup-warp">
          <div className="section-title text-white text-left">
            <h2>Connexion</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p> */}
          </div>
          {/* signup form */}
          <form className="signup-form">
            {/* <input type="text" placeholder="Your Name" /> */}
            <input type="text" placeholder="Votre E-mail" />
            <input type="text" placeholder="Votre mot de passe" />
            {/* <label htmlFor="v-upload" className="file-up-btn">Upload Course</label>
            <input type="file" id="v-upload" /> */}
            <button className="site-btn">Connecter</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



    );
};

export default Login;
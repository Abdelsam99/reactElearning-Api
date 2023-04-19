import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <Header />
  {/* Page info */}
  <div className="page-info-section set-bg" data-setbg="img/page-bg/3.jpg" style={{backgroundImage: "url('img/page-bg/3.jpg')"}}>
    <div className="container">
      <div className="site-breadcrumb">
        <Link to='/'>Acceuil</Link>
        <span>Contact</span>
      </div>
    </div>
  </div>
  
  {/* Page info end */}
  {/* search section */}
  {/* Page */}
<section className="contact-page spad pb-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="contact-form-warp">
          <div className="section-title text-white text-left">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. </p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" defaultValue={""} />
            <button className="site-btn">Sent Message</button>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-info-area">
          <div className="section-title text-left p-0">
            <h2>Contact Info</h2>
            <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendi sse cursus faucibus finibus.</p>
          </div>
          <div className="phone-number">
            <span>Direct Line</span>
            <h2>+53 345 7953 32453</h2>
          </div>
          <ul className="contact-list">
            <li>1481 Creekside Lane <br />Avila Beach, CA 931</li>
            <li>+53 345 7953 32453</li>
            <li>yourmail@gmail.com</li>
          </ul>
          <div className="social-links">
            <a href="#"><i className="fa fa-pinterest" /></a>
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-dribbble" /></a>
            <a href="#"><i className="fa fa-behance" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Page end */}


</div>
    );
};

export default Category;

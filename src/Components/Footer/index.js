import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/Sujog.jpg" alt="" />
			<h2></h2>
            <p>
              HUDD does not give any warranties, whether express or implied,
			  as to the suitability or usability of the Sujog Portal,
			  its software or any of its content.
            </p>
            <div className="social-links mt-3" data-aos="fade-up" data-aos-delay="200">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Quick link</h4>
            <ul>
			  <li><i className="bx bx-chevron-right"></i> <Link to="/aboutus">Sujog</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="comingsoon">Site map</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="contactus">contact</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="comingsoon">Terms of service</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="comingsoon">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>address</h4>
            <ul>
              <li><i className='bx bx-map'></i> Bhubaneswar </li>
              <li><i className='bx bx-envelope'></i> www.sujog.odisha.gov.in </li>
              <li><i className='bx bx-mobile'></i> +91 674 6615666</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">  @2021  Govt. of Odisha. Design & Developed by sujog.</div>

    </div>
  </footer>
};
export default Footer;
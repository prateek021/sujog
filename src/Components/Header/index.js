import React from "react";

function Header() {
    return <section id="topbar" className="top-header d-none d-lg-block">
        <div className="container clearfix">
            <div className="contact-info float-left">
                <span><i className="icofont-phone"></i> +91 674 6615666</span>
                <span><i className="icofont-envelope"></i><a href="mailto:contact@example.com"> helpdesk.sujog@odisha.gov.in</a></span>

            </div>
            {/* <div className="social-links float-right">
                <div className="font-site">
                    <span> font-size
  <a href=""><img src="assets/img/font.png" /></a>
                        <a href=""><img src="assets/img/font-plus.png" /></a>
                        <a href=""><img src="assets/img/font-minus.png" /></a>
                    </span>
                </div>
                <div className="dropdown language2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Language
  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">English</a>
                        <a className="dropdown-item" href="#">Hindi</a>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
};
export default Header;
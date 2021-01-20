import React from "react";

function Header() {
    return <section id="topbar" class="top-header d-none d-lg-block">
        <div class="container clearfix">
            <div class="contact-info float-left">
                <span><i class="icofont-phone"></i> +91 674 6615666</span>
                <span><i class="icofont-envelope"></i><a href="mailto:contact@example.com"> www.sujog.odisha.gov.in</a></span>

            </div>
            <div class="social-links float-right">
                <div class="font-site">
                    <span> font-size
  <a href=""><img src="assets/img/font.png" /></a>
                        <a href=""><img src="assets/img/font-plus.png" /></a>
                        <a href=""><img src="assets/img/font-minus.png" /></a>
                    </span>
                </div>
                <div class="dropdown language2">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Language
  </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">English</a>
                        <a class="dropdown-item" href="#">Hindi</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
};
export default Header;
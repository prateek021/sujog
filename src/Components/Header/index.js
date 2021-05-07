import React, { Component } from "react";

class Header extends Component {

    render() {
        return <section id="topbar" className="top-header d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <span><i className="icofont-phone"></i> +91 674 6615666</span>
                    <span><i className="icofont-envelope"></i><a href="mailto:contact@example.com"> helpdesk.sujog@odisha.gov.in</a></span>

                </div>
            </div>
        </section>
    }
};
export default Header;
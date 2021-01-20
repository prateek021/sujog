import React from "react";
import {Link} from "react-router-dom";

function Menubar() {
    return <header id="header">
        <div className="container">

            <div className="logo float-left">
                <a href="index.html"><img src="assets/img/Sujog.jpg" alt="" className="img-fluid" /></a>
            </div>

            <nav className="nav-menu float-right d-none d-lg-block">


                    <ul>
                        <li className="active"><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus" >About Us</Link></li>
                        <li className="drop-down"><Link to="/comingsoon">Services</Link>
                            <ul>
                                <li><a href="https://sujog.odisha.gov.in/citizen/" rel="noreferrer">OBPAS</a></li>
                                <li><Link to="/comingsoon">Public Grievance Redressal</Link></li>
                                <li><Link to="/comingsoon">Property Tax</Link></li>
                                <li><Link to="/comingsoon">Water & Sewerage</Link></li>
                                <li><Link to="/comingsoon">Trade License</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/comingsoon">information</Link></li>
                        <li><Link to="/contactus">Helpdesk</Link></li>
                        <li className="login"><a href="https://sujog.odisha.gov.in/citizen/" rel="noreferrer">login</a></li>

                    </ul>


            </nav>


        </div>
    </header>
};
export default Menubar;
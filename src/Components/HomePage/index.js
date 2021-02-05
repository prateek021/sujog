import React from "react";
import {
    Link
} from "react-router-dom";
import { Helmet } from "react-helmet";
function HomePage() {
    return <>
        <div className="container">
            <Helmet>
                <title>SUJOG</title>
            </Helmet>
            <div className="chif" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/Chif-minister-2.png" />

            </div>
            <section id="hero">
                <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
                        <div className="carousel-inner" role="listbox">


                            <div className="carousel-item active" style={{ backgroundImage: "url('assets/img/slide/slide-2.jpg')" }} >
                                <div className="carousel-container">
                                    <div className="carousel-content container">

                                    </div>
                                </div>
                            </div>


                            <div className="carousel-item" style={{ backgroundImage: "url('assets/img/slide/slide-3.jpg')" }}>
                                <div className="carousel-container">
                                    <div className="carousel-content container">

                                    </div>
                                </div>
                            </div>



                        </div>



                    </div>
                </div>
            </section>
        </div>
        <main id="main">


            <div id="about" className="about about-pading">
                <div className="container">

                    <div className="row no-gutters">

                        <div class="col-lg-5 video-box" data-aos="fade-up" data-aos-delay="100">
                            <img src="assets/img/mobile.png" class="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-7 d-flex flex-column">
                            <div className="section-title" data-aos="fade-up" data-aos-delay="100">
                                <h2>ABOUT SUJOG</h2>
                                <p>H&UDD has launched ‘SUJOG - Sustainable Urban Services in a Jiffy by Odisha Government’ to roll out e-governance
                                services across the ULBs in the state. SUJOG will make urban governance transparent, technology enabled, time-bound
                                through teamwork, thereby leading to transformation in the lives of citizens in all Urban Local Bodies of the state.
             </p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><img src="assets/img/OBJECTIVE.png" class="img-fluid" alt="" /></div>
                                <h4 className="title"><a href="about.html">Vision </a></h4>
                                <p className="description">To keep citizens at the centre of the Digital Transformation of urban services.</p>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 text1">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><img src="assets/img/vision.png" class="img-fluid" alt="" /></div>
                                <h4 className="title"><a href="">Objective</a></h4>
                                <p className="description">The broad objectives of the project include: <br />
                                    <strong>a.</strong> Provide enhanced quality of urban services to citizens through online / single window service delivery channel
				and ensure accessible, convenient, transparent and timely delivery of services. <br />
                                    <strong>b.</strong> Minimize the number of visits required by the citizens to the ULBs. <br />
                                    <strong>c.</strong> Achieve internal efficiency & effectiveness of the ULB by <br />
                                    <i className="bx bx-wifi-0"></i> Automating and optimizing their back-office processes, which helps them, focus on their core functions and responsibilities
				by freeing them from routine operations. <br />
                                    <i className="bx bx-wifi-0"></i> Integrating the departments/functions within ULB for better information flow and transparency. <br /> <br />
                                    <strong>d. </strong> Integrate with the existing software in place at H&UDD/ULB/Other urban parastatals.<br />
                                    <strong>e. </strong> Facilitate secure, instantaneous and online payment options for the taxes and statutory fees associated with services.<br />
                                    <strong>f. </strong> Reduce administrative burden and be a cost-effective service delivery channel for ULBs.

				</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <section className="counts section-bg2">
                <div className="container">
                    <div className="section-title">
                        <h1>Services</h1>
                        <p>Efficiently aggregate end-to-end core competencies without maintainable ideas. <br />
		  Dynamically foster tactical solutions without enabled value.</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                            <div className="count-box">
                                <img src="assets/img/servic-1.png" alt="" />
                                <div className="servic-right"><h4><a href="/dashboard" rel="noreferrer">Building Permission Approval</a></h4>
                                    <p>Online Building Permission System (OBPS) envisages complete automation of all processes related to building plan approval.
                                    All the processes and steps including calculation of fee, payment of fee, receipt of approval for the permission and certificates,
                                    etc. would be delivered online through an integrated one stop solution.
				</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/servic-2.png" alt="" />
                                <div className="servic-right"><h4><Link to="comingsoon">Public Grievance Redressal</Link></h4>
                                    <p>PGR system is an application in which citizens can lodge complaints and track the status of redressal mechanism.
                                    The Citizen or Citizen Service Representative (CSR) on behalf of citizens can lodge civic works and miscellaneous
                                    griverance elated complaints in the PGR system.
				</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                            <div className="count-box">
                                <img src="assets/img/servic-3.png" alt="" />
                                <div className="servic-right"><h4><Link to="comingsoon">Trade License</Link></h4>
                                    <p>The Trade License System provides a digital interface, allowing citizens to apply for the Trade License and subsequently make
                                    the payment online. Traders can apply for new licenses, renewals, amendments, and supplemental licenses. It streamlines and
                                    automates business licensing processes and helps a business to be set up quickly.
				</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/servic-4.png" alt="" />
                                <div className="servic-right"><h4><Link to="comingsoon">Property Tax </Link></h4>
                                    <p>The Property Tax system  provides a digital interface to make property assessments, pay property tax, generate
                                    payment receipts and monitor tax collection. It can be used by the citizens, Urban Local Body (ULB) counter and field
                                    employees and ULB Administrators to accomplish
                                    their specific tasks. It is available as a mobile and web-based application.

				</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/water.png" alt="" />
                                <div className="servic-right"><h4><Link to="comingsoon">Water & Sewerage</Link></h4>
                                    <p>The Water and Sewerage (W&S) system provides a digital interface to apply for water and sewerage connections,
                                    pay the water and sewerage charges for connection(s). It can be used by the citizens, Urban Local Body (ULB) counter
                                    employees and field employees, and ULB Administrators,
                                    PHEO and WATCO to accomplish their specific tasks.

				</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/finance.png" alt="" />
                                <div className="servic-right"><h4><Link to="comingsoon">Finance Budget & Account</Link></h4>
                                    <p>Financial & Accounts includes acquiring funds for the ULB, managing funds within the ULBs and planning for the expenditure of
                                    funds on various assets. It ensures efficient financial management and financial control necessary to support all activities.

				</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <section className="counts section-bg3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7 col-md-6 text-center" data-aos="fade-up">
                            <div className="whats-new">
                                <div className="section-title">
                                    <h4>What's New</h4>
                                </div>
                                <div className="body1-left-side">
                                    <div className="block-hdnews">
                                        <div className="list-wrpaaer">
                                            <ul className="list-aggregate" id="marquee-vertical-2">
                                                <li>
                                                    <div className="policy-img2"> <h4>JAN</h4><span>2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3><a href="https://interviewtimes.net/odisha-bagged-two-national-awards-at-the-second-edition-of-the-janaagraha-city-governance-awards/" target="_blank">
                                                            Odisha Bagged Two National Awards At The Second Edition Of The Janaagraha City Governance Awards</a></h3>
                                                        <p>The Housing and Urban Development (H&UDD) won the Best State Award for JAGA Mission for sanctioning of laws, drafting of policies, setting up of
institutional mechanisms, programs, or schemes to successfully foster urban decentralization in the cities and State.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="policy-img2"> <h4>JAN</h4><span>2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3><a href="https://orissadiary.com/odisha-govt-to-built-inter-state-bus-terminal-in-cuttack-at-the-cost-of-rs-65-crore-to-be-named-after-netaji/" target="_blank">
                                                            Odisha Govt to built Inter-State Bus Terminal in Cuttack at the cost of Rs 65 crore, to be named after Netaji</a></h3>
                                                        <p>Chief Minister Naveen Patnaik announced that a state-of-the-art Bus Terminal will be constructed at Khannagar, Cuttack with an allocation
of Rs. 65 Crore and this will be named after Netaji Subhash Chandra Bose.</p>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="ulb"><h2>ULB Profile</h2></div>
                            <div className="odisha-map">
                                <img id="myImg" src="assets/img/map-2.jpg" alt="Snow" />
                            </div>
                        </div>
                        <div id="myModal" className="modal">
                            <span className="close">&times;</span>
                            <img className="modal-content" id="img01" />
                            <div id="caption"></div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="counts section-bg">
                <div className="container">

                    <div className="section-title">
                        <h3>Important Links</h3>
                    </div>

                    <div className="row">

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                            <a href="https://odisha.gov.in/" target="_blank">
                                <div className="count-box2">
                                    <h4>Government of Odisha</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                            <a href="https://en.wikipedia.org/wiki/Odisha" target="_blank">
                                <div className="count-box2">
                                    <h4>About Odisha</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
                            <a href="https://www.odishaonline.gov.in/site/" target="_blank">
                                <div className="count-box2">
                                    <h4>Odisha Online</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="http://www.urbanodisha.gov.in/" target="_blank">
                                <div className="count-box2">
                                    <h4>HUDD</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="https://mosarkar.odisha.gov.in/App/" target="_blank">
                                <div className="count-box2">
                                    <h4>Mo Sarkar</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="https://www.odishatourism.gov.in/content/tourism/en.html" target="_blank">
                                <div className="count-box2">
                                    <h4>Odisha Tourism</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="https://pareshram-labour.odisha.gov.in/en/labour" target="_blank">
                                <div className="count-box2">
                                    <h4>Pareshram</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="https://www.tendersodisha.gov.in/nicgep/app"  target="_blank">
                                <div className="count-box2">
                                    <h4>Odisha Tender</h4>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </main>

    </>;

}

export default HomePage;
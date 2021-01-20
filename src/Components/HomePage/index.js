import React from "react";
import {
        Link
} from "react-router-dom";
function HomePage() {
    return <>
        <div className="container">
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


            <section id="about" className="about">
                <div className="container">

                    <div className="row no-gutters">

                        <div className="col-lg-5 video-box" data-aos="fade-up" data-aos-delay="100">
                            <img src="assets/img/mobile.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-7 d-flex flex-column">
                            <div className="section-title" data-aos="fade-up" data-aos-delay="100">
                                <h2>ABOUT SUJOG</h2>
                                <p>H&UDD has launched a programme named ‘SUJOG - Sustainable Urban Services in a Jiffy by Odisha Government’ to roll out
                                e-governance services across the ULBs in State. SUJOG will make urban governance transparent, technology enabled, time-bound
                                through teamwork, thereby leading to transformation in the lives of citizens in all Urban Local Bodies of the State.
             </p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><img src="assets/img/OBJECTIVE.png" className="img-fluid" alt="" /></div>
                                <h4 className="title"><a href="about.html">Vision </a></h4>
                                <p className="description">To keep citizens at the heart of the Digital Transformation of urban services".</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><img src="assets/img/vision.png" className="img-fluid" alt="" /></div>
                                <h4 className="title"><a href="">Objective</a></h4>
                                <p className="description">The broad objectives of the project include:
                                a. Provide enhanced quality of urban services to citizens through online / single window service
			   delivery channel and ensure accessible, ....<span><Link to="/aboutus">READ MORE +</Link></span></p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

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
                                <div className="servic-right"><h4>Building Permission Approval</h4>
                                    <p>Online Building Permission Approval System (OBPAS) envisages complete automation of all processes related to building approval at Odisha.
				<span><a href="servic.html">READ MORE +</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/servic-2.png" alt="" />
                                <div className="servic-right"><h4>Public Grievance Redressal</h4>
                                    <p>Public Grievance Redressal System allows citizens to lodge complaints and track them, whereas employees can track
				and address grievance incidents raised by the citizens. <span><a href="servic.html">READ MORE +</a></span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                            <div className="count-box">
                                <img src="assets/img/servic-3.png" alt="" />
                                <div className="servic-right"><h4>Trade License</h4>
                                    <p>Trade License System allows citizens to apply for the Trade License and subsequently make the payment online.
				<span><a href="servic.html">READ MORE +</a></span>  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/servic-4.png" alt="" />
                                <div className="servic-right"><h4>Property Tax </h4>
                                    <p>Property Tax System is a single digital interface to make property assessments,
                                    pay property tax, generate payment receipts and monitor tax collection.
				<span><a href="servic.html">READ MORE +</a></span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="count-box">
                                <img src="assets/img/water.png" alt="" />
                                <div className="servic-right"><h4>Water & Sewerage</h4>
                                    <p>Water and Sewerage (W&S) System is a digital interface to apply for water and sewerage connections and,
                                    pay the water and sewerage charges for connection/s.

				<span><a href="servic.html">READ MORE +</a></span></p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <section className="counts section-bg3">
                <div className="container">


                    <div className="row">

                        <div className="col-lg-5 col-md-6 text-center" data-aos="fade-up">
                            <div className="whats-new">
                                <div className="section-title">
                                    <h4>Whats New</h4>
                                </div>
                                <div className="body1-left-side">
                                    <div className="block-hdnews">
                                        <div className="list-wrpaaer">
                                            <ul className="list-aggregate" id="marquee-vertical">
                                                <li>
                                                    <div className="policy-img2"> <h4>JAN</h4><span>01.11.2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3>Coming soon...</h3>
                                                        <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="policy-img2"> <h4>FEB</h4><span>01.11.2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3>Coming soon...</h3>
                                                        <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="policy-img2"> <h4>MAR</h4><span>01.11.2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3>Coming soon...</h3>
                                                        <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="policy-img2"> <h4>APR</h4><span>01.11.2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3>Coming soon...</h3>
                                                        <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="policy-img2"> <h4>JAN</h4><span>01.11.2021</span></div>
                                                    <div className="buy-policy-2">
                                                        <h3>Coming soon...</h3>
                                                        <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text..</p>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="ulb"><h2>ULB Profile</h2></div>
                            <div className="odisha-map"><img src="assets/img/map-2.png" alt="" /></div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="counts section-bg">
                <div className="container">

                    <div className="section-title">
                        <h3>Citizen Portals</h3>
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
                            <a href="https://www.odishatourism.gov.in/content/tourism/en.html" target="_blank">
                                <div className="count-box2">
                                    <h4>Mo Sarkar</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                            <a href="https://pareshram-labour.odisha.gov.in/en/labour" target="_blank">
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
                            <a href="">
                                <div className="count-box2" target="_blank">
                                    <h4>Odisha Tender</h4>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </main>




        <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>



    </>;

}

export default HomePage;
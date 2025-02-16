import React from "react";
import { Helmet } from "react-helmet";

function TL() {
	return <div className="container">
		<div id="layoutSidenav_content">
			<Helmet><title>Trade License</title></Helmet>
			<main>
				<header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div className="container-fluid">
						<div className="page-header-content">
							<div className="row align-items-center justify-content-between">
								<div className="col-auto">
									<h1 className="page-header-title">
										<div className="page-header-icon"><i data-feather="activity"></i></div>
										Services / Trade License
									</h1>

								</div>

							</div>
						</div>
					</div>
				</header>

				<div className="container-fluid mt-n10">
					<div className="col">
						<div className="row">


							<div className="col-xl-12 col-md-6 mb-4 card card2">
								<div className="card-header">Trade License</div>
								<div className="row card-body">
									<div className="col-md-12">
										<div className="d-flex">

											<ul id="tabs" className="nav nav-tabs" role="tablist">
												<li className="nav-item">
													<a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">About</a>
												</li>
												<li className="nav-item">
													<a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Facilities</a>
												</li>
												<li className="nav-item">
													<a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">List of Documents</a>
												</li>

												<li className="nav-item">
													<a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab"> Trade License Tariffs </a>
												</li>

												<li className="nav-item">
													<a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">User Manual</a>
												</li>




											</ul>

											<div id="content" className="tab-content" role="tablist">
												<div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

													<div className="card-header" role="tab" id="heading-A">
														<h5 className="mb-0">
															<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
																About
															</a>
														</h5>
													</div>

													<div id="collapse-A" className="collapse show" role="tabpanel" aria-labelledby="heading-A">

														<div className="flex-grow-1 free-1">
															<p>The Trade License System provides a digital interface, allowing citizens to apply for the Trade License and
																subsequently make the payment online. Traders can apply for new licenses, renewals, amendments, and supplemental
																licenses. It streamlines and automates business licensing processes and helps a business to be set up quickly.</p>
														</div>
													</div>
												</div>


												<div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
													<div className="card-header" role="tab" id="heading-B">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
																Facilities
															</a>
														</h5>
													</div>
													<div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
														<div className="flex-grow-1 free-1">
															<p>
																1. Apply for new Permanent Trade License <br></br>
																2. Apply for new Temporary Trade License <br></br>
																3. Appy for renewal of Trade License. <br></br>
																4. Download a Provisional Trade License.  <br></br>
																5. Make Online payments <br></br>
																6. Track application Status <br></br>
																2.Refer to the Trade Tariffs Chart for the particular ULB <br></br>
																3. Renewal your old trade license for more than 1 year upto 5 years at a time

															</p>
														</div>
													</div>

												</div>



												<div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

													<div className="card-header" role="tab" id="heading-C">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
																List of Documents
															</a>
														</h5>
													</div>

													<div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">List of Documents required for new trade license
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for new Trade License.pdf" className="tooltip"
																	target="_blank">
																	<span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for new Trade License.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">List of Documents required for temporary trade license
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Temporary Trade License.pdf" className="tooltip"
																	target="_blank">
																	<span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Temporary Trade License.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>

													</div>
												</div>


												<div id="pane-d" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">
													<div className="card-header" role="tab" id="heading-d">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																Trade License Tariffs
															</a>
														</h5>
													</div>
													<div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Trade License Tariffs
																<div className="h5 pull-right"><a href="/Deshboard/images/Trade-Tariffs.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/Trade-Tariffs.pdf" className="tooltip" target="_blank"><span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>

													</div>
												</div>


												<div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
													<div className="card-header" role="tab" id="heading-e">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
																User Manual
															</a>
														</h5>
													</div>
													<div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Trade License User Manual for Citizen
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Trade License_Citizen User Manual.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Trade License_Citizen User Manual.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank"><span className="tooltiptext">View</span><img alt="Trade License" alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>
													</div>
												</div>


											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</main>
		</div>
	</div>
};
export default TL;
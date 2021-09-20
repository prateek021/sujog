import React from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
	return <div id="layoutSidenav_content">
		<Helmet>
			<title>Welcome to ODISHA DIGIT</title>
		</Helmet>
		<main>
			<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
				<div class="container-fluid">
					<div class="page-header-content">
						<div class="row align-items-center justify-content-between">
							<div class="col-auto">
								<h1 class="page-header-title">
									<div class="page-header-icon"><i data-feather="activity"></i></div>
                                            Welcome to Online Building Plan Approval
                                        </h1>

							</div>

						</div>
					</div>
				</div>
			</header>

			<div class="container-fluid mt-n10">
				<div class="col">
					<div class="row">
						<div class="col-xl-6 col-md-6 mb-4 card">


							<div class="card-header">Public Dashboard <span class="lart1">Last Update: 30.07.2021</span></div>

							<div class="row card-body">

								<div class="container">
									<div class="row">

										<div id="accordion" class="width2">

											<div class="card">
												<div class="card-header">
													<a class="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
														<h6>Building Plan Application Approval</h6>

													</a>
												</div>
												<div id="collapseOne" class="collapse show" data-parent="#accordion">
													<div class="card-body">
														<div class="row card-body">

															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<h6>Service Delivery Time</h6>
																				<div class="small font-weight-bold text-primary mb-1">Low Risk Approval</div>
																				<div class="h5">7 Days</div>
																				<div class="small font-weight-bold text-primary mb-1">Other than Low Risk Approval </div>
																				<div class="h5">60 Days</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">

																				<div class="small font-weight-bold text-secondary mb-1">Total Number of Applications Received</div>
																				<div class="h5">2</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-success mb-1">Number of Applications Approved</div>
																				<div class="h5">1</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-info mb-1">Number of Applications Rejected</div>
																				<div class="h5">0</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-primary mb-1">Total Number of Applications Pending</div>
																				<div class="h5">1</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-secondary mb-1">Mean/Average Number of Days for Approval</div>
																				<div class="h5">1</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-success mb-1">Median Number of Days for Approval</div>
																				<div class="h5">1</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-info mb-1">Minimum Number of Days for Approval</div>
																				<div class="h5">1</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xl-4 col-md-6 mb-4">

																<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																	<div class="card-body">
																		<div class="d-flex align-items-center">
																			<div class="flex-grow-1">
																				<div class="small font-weight-bold text-success mb-1">Maximum Number of Days for Approval</div>
																				<div class="h5">1</div>

																			</div>

																		</div>
																	</div>
																</div>
															</div>

														</div>
													</div>
												</div>
											</div>

											<div class="card">
												<div class="card-header">
													<a class="collapsed card-link text-dark" data-toggle="collapse" href="#collapseThree"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
														<h6>Occupancy certificate

</h6>
														<span class="float-right"><i class="ti-plus"></i></span>
													</a>
												</div>
												<div id="collapseThree" class="collapse" data-parent="#accordion">
													<div class="row card-body">

														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-primary mb-1">Occupancy Application
</div>
																			<div class="h5">30 Days</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-secondary mb-1">Total Number of Applications Received
</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-success mb-1">Number of Applications Approved
</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-info mb-1">Number of Applications Rejected
</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-primary mb-1">Total Number of Applications Pending</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-secondary mb-1">Mean/Average Number of Days for Approval</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-success mb-1">Median Number of Days for Approval

</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-info mb-1">Minimum Number of Days for Approval

</div>
																			<div class="h5">0</div>

																		</div>

																	</div>
																</div>
															</div>
														</div>
														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-success mb-1">Maximum Number of Days for Approval
</div>
																			<div class="h5">0</div>

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

						<div class="col-xl-6 col-md-6 mb-4 card card2">
							<div class="card-header">Information related to Building Plan Application Approval</div>
							<div class="row card-body">
								<div class="col-md-12">
									<div class="d-flex">

										<ul id="tabs" class="nav nav-tabs" role="tablist">
											<li class="nav-item">
												<a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">Fee Details</a>
											</li>
											<li class="nav-item">
												<a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">Procedures</a>
											</li>
											<li class="nav-item">
												<a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">List of Documents</a>
											</li>

											<li class="nav-item">
												<a id="tab-d" href="#pane-d" class="nav-link" data-toggle="tab" role="tab">List of (NOCs) </a>
											</li>

											<li class="nav-item">
												<a id="tab-e" href="#pane-e" class="nav-link" data-toggle="tab" role="tab">Inspection</a>
											</li>

											<li class="nav-item">
												<a id="tab-f" href="#pane-f" class="nav-link" data-toggle="tab" role="tab">Industrial Related</a>
											</li>

											<li class="nav-item">
												<a id="tab-g" href="#pane-g" class="nav-link" data-toggle="tab" role="tab">Other Documents</a>
											</li>

											<li class="nav-item">
												<a id="tab-h" href="#pane-h" class="nav-link" data-toggle="tab" role="tab">Manuals</a>
											</li>


										</ul>

										<div id="content" class="tab-content" role="tablist">
											<div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

												<div class="card-header" role="tab" id="heading-A">
													<h5 class="mb-0">
														<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
															Fee Details
												  </a>
													</h5>
												</div>

												<div id="collapse-A" class="collapse show" role="tabpanel" aria-labelledby="heading-A">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Fee for Building Permit-New Development
												<div class="h5 pull-right">
																<a href="/Deshboard/images/Fee for Building Permit-New Development.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right">
																<a href="/Deshboard/images/Fee for Building Permit-New Development.pdf" class="tooltip">
																	<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Fee for Building Permit-Alteration
											   <div class="h5 pull-right"><a href="/Deshboard/images/Fee for Building Permit-Alteration.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Fee for Building Permit-Alteration.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Fee for Building Permit-Revalidation
											 <div class="h5 pull-right"><a href="/Deshboard/images/Fee for Building Permit-Revalidation.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Fee for Building Permit-Revalidation.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>

											<div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">

												<div class="card-header" role="tab" id="heading-B">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
															Procedures
											  </a>
													</h5>
												</div>

												<div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Stakeholder Registration
											<div class="h5 pull-right"><a href="/Deshboard/images/Stakeholder Registration.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Stakeholder Registration.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Building Permit for Other Than Low Risk
												<div class="h5 pull-right"><a href="/Deshboard/images/Building Permit for Other Than Low Risk.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Building Permit for Other Than Low Risk.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Occupancy Certificate for Low Risk
											<div class="h5 pull-right"><a href="/Deshboard/images/Occupancy Certificate for Low Risk.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Occupancy Certificate for Low Risk.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Occupancy Certificate for Other Than Low Risk
												<div class="h5 pull-right"><a href="/Deshboard/images/Occupancy Certificate for Other Than Low Risk.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Occupancy Certificate for Other Than Low Risk.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>

											<div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

												<div class="card-header" role="tab" id="heading-C">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
															List of Documents
											  </a>
													</h5>
												</div>

												<div id="collapse-C" class="collapse" role="tabpanel" aria-labelledby="heading-C">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">List of Documents required for Low-risk building
											<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Low-risk building.pdf" class="tooltip"
																target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Low-risk building.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">List of Documents required for Other than Low-risk building
												<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Other than Low-risk building.pdf" class="tooltip"
																target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Other than Low-risk building.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>


												</div>
											</div>

											<div id="pane-d" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

												<div class="card-header" role="tab" id="heading-d">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
															List of (NOCs)
												  </a>
													</h5>
												</div>

												<div id="collapse-d" class="collapse" role="tabpanel" aria-labelledby="heading-d">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">List of NOC for Low-risk building
												<div class="h5 pull-right"><a href="/Deshboard/images/List of NOC for Low-risk building.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/List of NOC for Low-risk building.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">List of NOC for Other than Low-risk building
												<div class="h5 pull-right"><a href="/Deshboard/images/List of NOC for Other than Low-risk building.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/List of NOC for Other than Low-risk building.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

												</div>
											</div>

											<div id="pane-e" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">

												<div class="card-header" role="tab" id="heading-e">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
															Inspection
												  </a>
													</h5>
												</div>

												<div id="collapse-e" class="collapse" role="tabpanel" aria-labelledby="heading-e">
													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Sample Site Inspection Checklist for Building Plan Approval
												<div class="h5 pull-right"><a href="/Deshboard/images/Sample Site Inspection Checklist for Building Plan Approval.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Sample Site Inspection Checklist for Building Plan Approval.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Sample Site Inspection Checklist for Occupancy Application
										<div class="h5 pull-right"><a href="/Deshboard/images/Sample Site Inspection Checklist for Occupancy Application.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Sample Site Inspection Checklist for Occupancy Application.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

												</div>
											</div>


											<div id="pane-f" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-f">

												<div class="card-header" role="tab" id="heading-f">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-f" data-parent="#content" aria-expanded="false" aria-controls="collapse-f">
															Industrial Related
												  </a>
													</h5>
												</div>

												<div id="collapse-f" class="collapse" role="tabpanel" aria-labelledby="heading-f">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">List of documents - Industrial Occupancy
													<div class="h5 pull-right"><a href="/Deshboard/images/List of documents - Industrial Occupancy.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/List of documents - Industrial Occupancy.pdf" class="tooltip">
																<span class="tooltiptext">View</span><imgv src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Applicable Fee & NOC's For Industrial Occupancies
													<div class="h5 pull-right"><a href="/Deshboard/images/Applicable Fee & NOC's For Industrial Occupancies.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Applicable Fee & NOC's For Industrial Occupancies.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">NOC's For Industrial Occupancies

												   <div class="h5 pull-right"><a href="/Deshboard/images/NOC's For Industrial Occupancies.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/NOC's For Industrial Occupancies.pdf" class="tooltip"><span class="tooltiptext">View</span>
																<img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>


											<div id="pane-g" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-g">

												<div class="card-header" role="tab" id="heading-g">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-g" data-parent="#content" aria-expanded="false" aria-controls="collapse-g">
															Other Documents
											  </a>
													</h5>
												</div>

												<div id="collapse-g" class="collapse" role="tabpanel" aria-labelledby="heading-g">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Odisha CAF Rules Notification 2016
													<div class="h5 pull-right"><a href="/Deshboard/images/Odisha CAF Rules Notification 2016.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Odisha CAF Rules Notification 2016.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Odisha Planning and Building Standard Notification 2020

												   <div class="h5 pull-right"><a href="/Deshboard/images/Odisha Planning and Building Standard Notification 2020.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/Odisha Planning and Building Standard Notification 2020.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>

											<div id="pane-h" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-h">

												<div class="card-header" role="tab" id="heading-h">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-h" data-parent="#content" aria-expanded="false" aria-controls="collapse-h">
															Manuals
	  </a>
													</h5>
												</div>

												<div id="collapse-h" class="collapse" role="tabpanel" aria-labelledby="heading-h">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Drawing Manual of Online Building Permission Application
			<div class="h5 pull-right"><a href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													{/* <div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Odisha Planning and Building Standard Notification 2020

		   <div class="h5 pull-right"><a href="/Deshboard/images/Odisha Planning and Building Standard Notification 2020.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/Odisha Planning and Building Standard Notification 2020.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div> */}

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
};
export default Dashboard;
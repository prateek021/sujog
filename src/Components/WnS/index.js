import React from "react";
import { Helmet } from "react-helmet";

function WnS() {
	return <div class="container">
		<div id="layoutSidenav_content">
			<Helmet><title>Water & Sewerage</title> </Helmet>
			<main>
				<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div class="container-fluid">
						<div class="page-header-content">
							<div class="row align-items-center justify-content-between">
								<div class="col-auto">
									<h1 class="page-header-title">
										<div class="page-header-icon"><i data-feather="activity"></i></div>
										Services / Water & Sewerage
									</h1>

								</div>

							</div>
						</div>
					</div>
				</header>

				<div class="container-fluid mt-n10">
					<div class="col">
						<div class="row">


							<div class="col-xl-12 col-md-6 mb-4 card card2">
								<div class="card-header">Water & Sewerage</div>
								<div class="row card-body">
									<div class="col-md-12">
										<div class="d-flex">

											<ul id="tabs" class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">About</a>
												</li>
												<li class="nav-item">
													<a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">Facilities</a>
												</li>
												<li class="nav-item">
													<a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">List of Documents</a>
												</li>

												<li class="nav-item">
													<a id="tab-d" href="#pane-d" class="nav-link" data-toggle="tab" role="tab"> User Manual </a>
												</li>




											</ul>

											<div id="content" class="tab-content" role="tablist">
												<div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

													<div class="card-header" role="tab" id="heading-A">
														<h5 class="mb-0">
															<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
																About
															</a>
														</h5>
													</div>

													<div id="collapse-A" class="collapse show" role="tabpanel" aria-labelledby="heading-A">

														<div class="flex-grow-1 free-1">
															<p>The Water and Sewerage (W&S) system provides a digital interface to apply for water and sewerage connections,
																pay the water and sewerage charges for connection(s). It can be used by the citizens, Urban Local Body (ULB)
																counter employees and field employees, and ULB Administrators, PHEO and WATCO to accomplish their specific tasks.</p>
														</div>
													</div>
												</div>


												<div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
													<div class="card-header" role="tab" id="heading-B">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
																Facilities
															</a>
														</h5>
													</div>
													<div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">
														<div class="flex-grow-1 free-1">
															<p>
																1. No waiting period to receive Water bills. Realtime bill generation facility as per meter reading.<br></br>
																2. Apply for new Water or Sewerage Connecti on <br></br>
																3. Apply for Disconnection or reconnection <br></br>
																4. Transfer of connection <br></br>
																5. Make Online payments <br></br>
															</p>
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
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for adding new Connection
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for Ownership transfer of Connection.
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>



													</div>
												</div>


												<div id="pane-d" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

													<div class="card-header" role="tab" id="heading-d">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																User Manual
															</a>
														</h5>
													</div>

													<div id="collapse-d" class="collapse" role="tabpanel" aria-labelledby="heading-d">

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">Water & Sewerage User Manual for Citizen

																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank"><span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
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
export default WnS;
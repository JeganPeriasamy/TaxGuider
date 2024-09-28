import React from "react";
import logo from "./Assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg mt-2  ">
        <div class="container-fluid mb-5">
          <h4 className="std_logo rounded-5 px-3 py-1 mt-3"> TAX GUIDER</h4>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <div class="navbar-nav   std_navbar_buttons  mx-auto mb-2 d-flex align-items-start  mb-lg-0 gap-lg-5 gap-2 mt-2">
              <div class="dropdown">
                <a
                  class=" nav-link std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Startup
                </a>
                <ul
                  class="dropdown-menu bg-white  std_list border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <small>
                    <div class="d-flex w-100">
                      <div class="col-md-4 me-5">
                        <li className="text-nowrap fw-5">
                          Business Registered
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Private Limited Company
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Limited Liability Partnership
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Partnership Firm Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            One Person Company
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Public Limited Company
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Section 8 Company
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Nidhi Company
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Sole Proprietorship Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Producer Company Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Branch Office Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Indian Subsidiary Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Foreign Subsidiary Registration
                          </a>
                        </li>
                      </div>
                      <div class="col-md-4  ms-5">
                        <li className="text-nowrap">Other Registration</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Import Export Code (IE Code) Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Udyam Registration – MSME/SSI Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Startup India Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            APEDA Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Spice Board Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Professional Tax Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Digital Signature Certificate
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            ESI & PF Registration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            LMPC Certificate
                          </a>
                        </li>
                      </div>
                    </div>
                  </small>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class=" nav-link py-1 px-lg-4 px-5  std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GST
                </a>

                <ul
                  class="dropdown-menu bg-white std_list  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <small>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        GST Registration
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Return Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        Letter of Undertaking (LUT) -GST
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Refund
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST E-Way Bill
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Annual Return Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Cancellation/Surrender
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Amendment
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                        GST Advisory Services
                      </a>
                    </li>
                  </small>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class=" nav-link py-1 px-lg-4 px-5   std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Income Tax
                </a>

                <ul
                  class="dropdown-menu bg-white  w-100 std_list border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <small>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2   " href="#">
                        Income Tax Return Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        Salaried ITR Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        Business ITR Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        Capital Gain ITR Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2  " href="#">
                        NRI Income Tax Filing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2  " href="#">
                        Income Tax Notice Managemen
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        Form 15CA & Form 15CB4
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2 " href="#">
                        Income Tax Planning
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item rounded-5 mb-2  " href="#">
                        Income Tax Appeal
                      </a>
                    </li>
                  </small>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  class="nav-link std_events rounded-4 me-2"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Compliance
                </a>
                <ul
                  class="dropdown-menu std_list border-0 p-3"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <small>
                    <div class="row row-cols-1  row-cols-md-2 g-5  ">
                      <div class="col ">
                        <li class="fw-bold text-nowrap mb-2">Secretarial Compliances</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Private Limited Annual Compliance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            LLP Annual Compliance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            OPC Annual Compliance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Section 8 Company Compliance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            DIN Validation (DIR-3 KYC)
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Digital Signature Certificate
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Secretarial Audit
                          </a>
                        </li>
                      </div>
                      <div class="col">
                        <li class="fw-bold mb-2  text-nowrap">Event Based Compliances</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Appointment & Resignation of Director
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Change in Object Clause
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Change in Name Clause
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Change in Registered Office Address
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Change in Share Capital
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Removal of Director
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            DIN Surrender
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Update Your DIN
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Due Diligence
                          </a>
                        </li>
                      </div>
                      <div class="col">
                        <li class="fw-bold mb-2">Tax Compliances</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Accounting & Book Keeping
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Pay Roll Service
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Tax Audit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            ESI & PF Filings
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Change in Share Capital
                          </a>
                        </li>
                      </div>
                      <div class="col">
                        <li class="fw-bold mb-2  text-nowrap">Business Conversions</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Sole Proprietorship to Private Limited
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Private Limited to Public Limited
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            LLP to Private Limited
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            OPC to Private Limited
                          </a>
                        </li>
                      </div>
                      <div class="col">
                        <li class="fw-bold mb-2  text-nowrap">Advisory Services</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Legal Advisory Services
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Drafting of Documents
                          </a>
                        </li>
                      </div>
                      <div class="col">
                        <li class="fw-bold mb-2  text-nowrap">Closure of Business</li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Closure of Private Limited
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Closure of LLP
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item rounded-5 mb-2" href="#">
                            Closure of OPC
                          </a>
                        </li>
                      </div>
                    </div>
                  </small>
                </ul>
              </div>

              <div class="dropdown">
                <a
                  class=" nav-link py-1 px-lg-4 px-5   std_events rounded-4 me-2  "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Intellectual Property
                </a>
                <ul
                  class="dropdown-menu bg-transparent std_list  border-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>Trade Mark</li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50  " href="#">
                      Trade Mark Registration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Trade Mark Renewal
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Trade Mark Objection
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Trade Mark Rectification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Trade Mark Assignment
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Trade Mark Registration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Patent Registration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item rounded-5 mb-2 w-50 " href="#">
                      Copy Right Registration
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" d-flex justify-content-between mt-3" role="search">
              <div class="dropdown mt-2">
                <a
                  class="std_sign_up py-2  px-4 ms-2 text-decoration-none rounded-4 me-2 "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Signup/Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../fire";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Addfunds() {
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const [opacity, setOpacity] = useState(false);
  const [move, setMove] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [Opacity2, setOpacity2] = useState(0);

  return (
    <div
      style={{ background: "#f5f5f5" }}
      className={
        move
          ? "moveWholepageToRight container-fluid"
          : "PageBackToNormal container-fluid"
      }
    >
      <header className="navbar row">
        <div className="menu_bars_smaller_screens">
          <div
            className="fabars_container"
            className={move ? "move_bars_container" : "fabars_container"}
            onClick={() => {
              setMove(!move);
            }}
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
        <div className="logo col-md-4 col-lg-2 col-sm-4">
          <Link
            to="/home"
            style={{
              color: "#22ae8e",
              textDecoration: "none",
              userSelect: "none",
            }}
          >
            {" "}
            Bank Logs{" "}
          </Link>
        </div>
        <div className="header_buttons col-md-7 col-lg-7 col-sm-7">
          <div className="buttonDiv">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <button className="btn btn-primary">
              <Link
                to="/addfunds"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Bal: $0.00
              </Link>
            </button>
          </div>

          <div className="buttonDiv">
            <i class="fa fa-plus" aria-hidden="true"></i>
            <button className="btn btn-danger">
              <Link
                to="/addfunds"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Add Fund{" "}
              </Link>
            </button>
          </div>

          <div className="buttonDiv">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <button className="btn btn-primary">
              <Link
                to="/purchased"
                style={{ color: "white", textDecoration: "none" }}
              >
                Purchased
              </Link>
            </button>
          </div>

          <div className="buttonDiv">
            <i class="fa fa-download" aria-hidden="true"></i>
            <button className="btn btn-success">
              <Link
                to="/downloads"
                style={{ color: "white", textDecoration: "none" }}
              >
                Download
              </Link>
            </button>
          </div>
        </div>
        <div
          className="profile col-md-2 col-lg-1 col-sm-1"
          onClick={() => {
            setOpacity(!opacity);
          }}
        >
          {/* <h6 className="profile_description">Eldoret</h6> */}
          <div className="image_container">
            <img
              src="/images/pp3.jpg"
              className="profile_photo"
              alt="profile pic"
            />
          </div>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
          <div className={opacity ? "show" : "hide"}>
            <ul>
              <li>
                {" "}
                <Link
                  to="/purchased"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Purchased{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/addfunds"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  Add Fund{" "}
                </Link>
              </li>
              <li>Profile</li>
              <li>
                {" "}
                <Link
                  to="/support"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  Support{" "}
                </Link>
              </li>
              <li onClick={handleLogOut}>Logout</li>
            </ul>
          </div>
        </div>
      </header>
      <div
        className="dashboard addfundsDashBoard"
        style={{ height: "100vh", marginLeft: "-20px" }}
      >
        <div className="ulDiv">
          <ul>
            <li className="dashboardLi">
              <i class="fa fa-tachometer" aria-hidden="true"></i>
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Dashboard{" "}
              </Link>
            </li>
            <li className="dashboardLi">
              {" "}
              <i class="fa fa-th" aria-hidden="true"></i>
              American Banks
              <div className="dropdownMenu">
                <ul>
                  <li>American Bank Logs</li>
                  <li>
                    <Link
                      to="/chasebanklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {" "}
                      Chase Bank Logs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bankofamericalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      BOA Bank Logs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/suntrusbanklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      suntrust Bank Logs
                    </Link>
                  </li>
                  <li>Wells Fargo Logs</li>
                  <li>
                    <Link
                      to="/citibanklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Citi Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tdbanklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      TD Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hsbcbanklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Hsbc Bank Logs
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dashboardLi">
              {" "}
              <i class="fa fa-th" aria-hidden="true"></i>
              Cananda Banks
              <div className="dropdownMenu">
                <ul>
                  <li>Canadian Bank Logs</li>
                  <li>
                    <Link
                      to="/tdbankcanadalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      TD Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rbcbankcanadalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      RBC Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bmobankcanadalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      BMO Bank Logs
                    </Link>
                  </li>
                  <li
                    style={{
                      position: "absolute",
                      opacity: 0,
                      pointerEvents: "none",
                    }}
                  ></li>
                  <li>
                    <Link
                      to="/scotiabankcanadalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Scotia Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cibcbankcanadalogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      CIBC Logs
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dashboardLi">
              {" "}
              <i class="fa fa-th" aria-hidden="true"></i>
              UK Bank Logs
              <div className="dropdownMenu">
                <ul>
                  <li>Uk Bank Logs</li>
                  <li>
                    <Link
                      to="/hsbcbankuklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      HSBC Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lolydsbankuklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Lolyds Bank Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/barclaysbankuklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Barclays Bank Logs
                    </Link>
                  </li>
                  <li
                    style={{
                      position: "absolute",
                      opacity: 0,
                      pointerEvents: "none",
                    }}
                  ></li>
                  <li>
                    <Link
                      to="/royalbankuklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Royal Bank Scotland Logs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/standardcharteredbankuklogs"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Standard Chartered Bank Logs
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="dashboardLi">
              {" "}
              <i class="fa fa-btc" aria-hidden="true"></i>
              <Link
                to="/addfunds"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Add Fund{" "}
              </Link>
            </li>
            <li className="dashboardLi">
              {" "}
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <Link
                to="/support"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Support{" "}
              </Link>
            </li>
            <li className="dashboardLi" onClick={handleLogOut}>
              {" "}
              <i class="fa fa-sign-out" aria-hidden="true"></i>
              Logout
            </li>
          </ul>
        </div>
      </div>

      <div
        className="contentArea_support_page contentArea"
        style={{ marginTop: "10px", height: "100vh" }}
      >
        {/* menu for smaller screens start */}
        <div
          className={
            move
              ? "show_menu_smalller_screen menu_for_smaller_screens "
              : "hide_menu_smalller_scren"
          }
        >
          <div className="content_menu_smaller_screens">
            <ul>
              <li className="dashboardLi_smaller_screen">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                <Link
                  to="/home"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Dashboard{" "}
                </Link>
              </li>
              <li className="dashboardLi_smaller_screen">
                {" "}
                <i class="fa fa-th" aria-hidden="true"></i>
                American Banks
                <div className="dropdownMenu_smaller_screen">
                  <ul>
                    <li>American Bank Logs</li>
                    <li>
                      <Link
                        to="/chasebanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {" "}
                        Chase Bank Logs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bankofamericalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        BOA Bank Logs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/suntrustbanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        suntrust Bank Logs
                      </Link>
                    </li>
                    <li>Wells Fargo Logs</li>
                    <li>
                      <Link
                        to="/citibanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Citi Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tdbanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        TD Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hsbcbanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Hsbc Bank Logs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dashboardLi_smaller_screen">
                {" "}
                <i class="fa fa-th" aria-hidden="true"></i>
                Cananda Banks
                <div className="dropdownMenu_smaller_screen">
                  <ul>
                    <li>Canadian Bank Logs</li>
                    <li>
                      <Link
                        to="/tdbankcanadalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        TD Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/rbcbankcanadalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        RBC Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bmobankcanadalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        BMO Bank Logs
                      </Link>
                    </li>
                    <li
                      style={{
                        position: "absolute",
                        opacity: 0,
                        pointerEvents: "none",
                      }}
                    ></li>
                    <li>
                      <Link
                        to="/scotiabankcanadalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Scotia Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cibcbankcanadalogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        CIBC Logs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dashboardLi_smaller_screen">
                {" "}
                <i class="fa fa-th" aria-hidden="true"></i>
                UK Bank Logs
                <div className="dropdownMenu_smaller_screen">
                  <ul>
                    <li>Uk Bank Logs</li>
                    <li>
                      <Link
                        to="/hsbcbankuklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        HSBC Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lolydsbankuklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Lolyds Bank Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/barclaysbankuklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Barclays Bank Logs
                      </Link>
                    </li>
                    <li
                      style={{
                        position: "absolute",
                        opacity: 0,
                        pointerEvents: "none",
                      }}
                    ></li>
                    <li>
                      <Link
                        to="/royalbankuklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Royal Bank Scotland Logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/standardcharteredbankuklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Standard Chartered Bank Logs
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dashboardLi_smaller_screen">
                {" "}
                <i class="fa fa-btc" aria-hidden="true"></i>
                <Link
                  to="/addfunds"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Add Fund{" "}
                </Link>
              </li>
              <li className="dashboardLi_smaller_screen">
                {" "}
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <Link
                  to="/support"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Support
                </Link>
              </li>
              <li className="dashboardLi_smaller_screen" onClick={handleLogOut}>
                {" "}
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </li>
            </ul>
          </div>
        </div>
        {/* menu for smaller screens end*/}
        <div className="Div">
          <div className="row addfundsContainer">
            <div className="col-md-8 col-lg-8 paymentScanDiv">
              <div className="bitcoin_and_text">
                <div className="bitcoin_div_funds_page">
                  <i class="fa fa-btc" aria-hidden="true"></i>
                </div>
                <span className="funding_page_bitcoin_text">
                  Bitcoin Funding Page
                </span>
              </div>

              <div className="depo_scanimg_code">
                <p className="scan_description">Minimum Deposit Amount</p>
                <p className="scan_description">$100</p>
                <img
                  src="/images/current.jpg"
                  className="scan_code_img"
                  alt="scan code"
                />
              </div>
              <p className="scan_code_pin">
                38WrfrZ36ENBhfjbBNPKYmNw5UCcodeY4j
              </p>
              <CopyToClipboard text="38WrfrZ36ENBhfjbBNPKYmNw5UCcodeY4j">
                <button
                  className="copy_wallet"
                  onClick={() => {
                    setShowCopied(true);
                  }}
                >
                  <i class="fa fa-check" aria-hidden="true"></i>Copy Wallet
                </button>
              </CopyToClipboard>
              <label
                className="badge badge-success copied"
                style={{
                  visibility: showCopied ? "visible" : "hidden",
                }}
              >
                Copied!
              </label>
            </div>

            <div className="col-md-2 col-lg-2 reportingFundingError">
              {/* no bitcoin detected start */}
              <div className="confirmationPopUp" style={{ opacity: Opacity2 }}>
                <span>
                  {" "}
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>
                </span>
                No Payment Detected
                <div className="border-animation"></div>
              </div>
              {/* no bitcoin detected end */}
              <p className="report_error">Proceed to checkout</p>
              <div className="submission_form">
                <form>
                  <label className="label_form_input">Subject</label>
                  <input
                    type="text"
                    className="add_funds_page_input"
                    placeholder="subject"
                  />

                  <label className="label_form_input">Amount Funded</label>
                  <input
                    type="text"
                    className="add_funds_page_input"
                    placeholder="Amount Funded"
                  />

                  <label className="label_form_input">Comment</label>
                  <input
                    type="text"
                    className="add_funds_page_input"
                    placeholder="Comment"
                  />

                  <label className="label_form_input">Email Address</label>
                  <input
                    type="text"
                    className="add_funds_page_input"
                    placeholder="Email Address"
                  />

                  <button
                    onClick={() => {
                      setOpacity2(!Opacity2);
                    }}
                    className="btn btn-primary submitbtnfundspage"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            {/* footer start */}
            <div className="footerAddfundsPage">
              <p className="footerCopy">&copy; 2022 Current-shop</p>

              <div className="socialmedia">
                <div className="social_media_icons twitterDiv">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className="social_media_icons facebookDiv">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="social_media_icons googlePlusDiv">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            {/* footer end */}
          </div>
        </div>
      </div>

      {/* closing div of dashboard and content area */}
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../fire";

export default function Support() {
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const [opacity, setOpacity] = useState(false);

  const [move, setMove] = useState(false);
  const [Opacity2, setOpacity2] = useState(0);

  return (
    <div
      className="container-fluid"
      style={{ background: "#f5f5f5", width: "100%", height: "100vh" }}
      className={move ? "moveWholepageToRight" : "PageBackToNormal"}
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
      <div className="dashboard addfundsDashBoard dashboard_support_page">
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
                      to="/subtrustbanklogs"
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

      <div className="contentArea">
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
                    <li>
                      <Link
                        to="/wellsfargobanklogs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Wells Fargo Logs
                      </Link>
                    </li>
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
                        to="/lolydbankuklogs"
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
          <div className="row">
            <p className="contact_heading_support_page">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>Contact
              Page
            </p>
          </div>
          <div className="contact_form_support_page">
            {/* no payment detected start */}
            <div className="confirmationPopUp2" style={{ opacity: Opacity2 }}>
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
            {/* no payment detected end */}
            <form>
              <div className="support_page_contact_form">
                <label>Subject : </label>
                <input type="text" placeholder="Your Message Subject" />
              </div>

              <div className="support_page_contact_form">
                <label>Department: </label>
                <select>
                  <option>Funding</option>
                  <option>Refund</option>
                </select>
              </div>

              <div className="support_page_contact_form">
                <label>Email Adresss: </label>
                <input type="email" placeholder="Your Email Address" />
              </div>

              <div className="support_page_contact_form">
                <label>Message: </label>
                <textarea
                  className="textarea_contact_form"
                  placeholder="Message content"
                >
                  {" "}
                </textarea>
              </div>

              <button
                className="btn btn-success send_support_page"
                onClick={() => {
                  setOpacity2(!Opacity2);
                }}
              >
                Send
              </button>
            </form>
          </div>
          <div className="row">
            {/* footer start */}
            <div className="footerAddfundsPage">
              <p className="footerCopy">&copy; 2022 Current-shoop</p>

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

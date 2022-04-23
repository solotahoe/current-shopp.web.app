import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../fire";

export default function BmoBankCanada() {
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const [move, setMove] = useState(false);

  const [opacity, setOpacity] = useState(false);
  return (
    <div
      className="container-fluid"
      style={{ background: "#f5f5f5" }}
      className={move ? "moveWholepageToRight" : "PageBackToNormalLogsPage"}
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

      <div className="row">
        <div className="dashboard banklogsDashBoard">
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
                      {" "}
                      <Link
                        to="/suntrustbanklogs"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        suntrust Bank Logs{" "}
                      </Link>
                    </li>
                    <li> Wells Fargo Logs</li>
                    <li>
                      {" "}
                      <Link
                        to="/citibanklogs"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Citi Bank Logs
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        to="/tdbanklogs"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        TD Bank Logs
                      </Link>
                    </li>
                    <li>
                      {" "}
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

        <div className="logs">
          {/* menu for smaller screens start */}
          <div
            className={
              move
                ? "show_menu_smalller_screen menu_for_smaller_screens menu_smaller_screens_logs_page "
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
                <li
                  className="dashboardLi_smaller_screen"
                  onClick={handleLogOut}
                >
                  {" "}
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  Logout
                </li>
              </ul>
            </div>
          </div>
          {/* menu for smaller screens end*/}
          <div className="row chaseBankHeading">
            <i class="fa fa-university" aria-hidden="true"></i>
            BMO Bank Logs
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <p className="logsHeading">BMO Company Logs</p>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Includes</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Price</th>
                    <th scope="col">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>278k</td>
                    <td>187k</td>
                    <td>
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>59k</td>
                    <td>$108</td>
                    <td>
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>67k</td>
                    <td>$120</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>179k</td>
                    <td>$180</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-6 col-lg-6">
              <p className="logsHeading">Checking Accounts</p>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Includes</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Price</th>
                    <th scope="col">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>77k</td>
                    <td>$110</td>
                    <td>
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>68k</td>
                    <td>$105</td>
                    <td>
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>22k</td>
                    <td>$60</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Online access, Email Access, Questions and answers, card
                      information,
                    </td>
                    <td>138k</td>
                    <td>$128</td>
                    <td>
                      {" "}
                      <button className="btn btn-primary tablebtn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <Link
                          to="/addfunds"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Purchase
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <p className="logsHeading">Savings Accounts</p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Includes</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Price</th>
                  <th scope="col">Buy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>44k</td>
                  <td>$65</td>
                  <td>
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>71k</td>
                  <td>$104</td>
                  <td>
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>97k</td>
                  <td>$120</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>33k</td>
                  <td>$65</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>77k</td>
                  <td>$110</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>22k</td>
                  <td>$60</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>59k</td>
                  <td>$105</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>173k</td>
                  <td>$158</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>198k</td>
                  <td>$160</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information,
                  </td>
                  <td>29k</td>
                  <td>$60</td>
                  <td>
                    {" "}
                    <button className="btn btn-primary tablebtn">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      <Link
                        to="/addfunds"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Purchase
                      </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            {/* footer start */}
            <div className="footerLogsPage">
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
    </div>
  );
}

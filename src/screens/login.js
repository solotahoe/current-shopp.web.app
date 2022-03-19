import React from "react";
import { useEffect, useState } from "react";
import fire from "../fire";

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingUp,
    hasAccount,
    setHassAccount,
    emailError,
    passwordError,
  } = props;

  console.log(hasAccount);

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 left_side_contentt">
          <h2 className="Megashopp">Current-Shop</h2>
          <p>Welcome to Current-Shop vip website, get unlimited bank Logs</p>
          <div className="image_container_landing_page">
            <img
              src="/images/introphoto.jpg"
              className="landing_page_imgg"
              alt="landing_page_photo"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 right_side_content">
          <h2 className="login_heading">Login To Your Account</h2>

          <p className="enter_details_heading">Enter your details to login</p>
          <p className="input_label_landing_page">EMAIL ADDRESS : </p>
          <div className="field_container">
            <i
              className="fa fa-envelope-o pass_email_icons"
              aria-hidden="true"
            ></i>
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="email_inputt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorsg">{emailError}</p>
          </div>
          <p className="input_label_landing_page">PASSWORD : </p>
          <div className="field_container">
            <i
              className="fa fa-unlock-alt pass_email_icons"
              aria-hidden="true"
            ></i>
            <input
              type="password"
              required
              placeholder="Enter Your Password"
              className="password_inputt"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="errorsg">{passwordError}</p>
          </div>
          {hasAccount ? (
            <>
              <p>
                {" "}
                <button
                  className="login_register_buttonn"
                  onClick={handleLogin}
                >
                  LOGIN
                </button>{" "}
              </p>
              <p>
                {" "}
                Don't have an account?{" "}
                <span
                  onClick={() => setHassAccount(!hasAccount)}
                  className="login_register_link"
                >
                  Register here{" "}
                </span>
              </p>
            </>
          ) : (
            <>
              <p>
                {" "}
                <button
                  className="login_register_buttonn"
                  onClick={handleSingUp}
                >
                  Sign Up
                </button>{" "}
              </p>
              <p className="hasanaccount">
                {" "}
                Have an account?{" "}
                <span
                  onClick={() => setHassAccount(!hasAccount)}
                  className="login_register_link"
                >
                  Login here{" "}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
      <div
        className="row"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "-100px",
        }}
      >
        <p className="footerr" style={{ zIndex: "10000" }}>
          {" "}
          &copy; 2021 All rights Reserved |{" "}
          <span className="footerName">Current-Shop </span>{" "}
        </p>
      </div>
    </div>
  );
}

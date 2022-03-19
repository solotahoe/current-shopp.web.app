import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [padding, setPadding] = useState("0px");
  const paddingItToLeft = () => {
    //setPadding("50px")
  };

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 left_side_contentt">
          <h2 className="Megashopp">Current Shop</h2>
          <p className="welcome">
            Welcome to Mega current shop vip website, get unlimited bank Logs
          </p>
          <div className="image_container_landing_page">
            <img
              src="/images/introphoto.jpg"
              className="landing_page_imgg"
              alt="landing_page_photo"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 right_side_content">
          <h2 className="login_heading">Registration</h2>
          <form>
            <p className="enter_details_heading">Enter your details to join</p>
            <p className="input_label_landing_page">EMAIL ADDRESS : </p>
            <div className="field_container">
              <i
                className="fa fa-envelope-o pass_email_icons"
                aria-hidden="true"
              ></i>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={paddingItToLeft}
                placeholder="Enter Your Email"
                className="email_inputt"
              />
            </div>
            <p className="input_label_landing_page">PASSWORD : </p>
            <div className="field_container">
              <i
                className="fa fa-unlock-alt pass_email_icons"
                aria-hidden="true"
              ></i>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="password_inputt"
              />
            </div>
            <p>
              {" "}
              <button className="login_register_buttonn">REGISTER</button>{" "}
            </p>
          </form>
          <p>
            {" "}
            Already have an account?{" "}
            <Link to="/">
              <span className="login_register_link">Login here </span>{" "}
            </Link>
          </p>
        </div>
      </div>

      <p className="footerr">
        {" "}
        &copy; 2022 All rights Reserved |{" "}
        <span className="footerName">Current-shop </span>{" "}
      </p>
    </div>
  );
}

export default Register;

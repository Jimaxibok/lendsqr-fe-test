import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom'
import pabloSignIn from "../assets/jpg/pabloSignIn.jpg";
import lendsqr from "../assets/png/lendsqr.png";
import Union from "../assets/png/Union.png";


import { Row, Col } from "antd";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
     navigate('/user')
  }

  return (
    <Row >
      <Col className="container" xs={0} lg={12}>
        <img src={Union} alt="logo-img" id="logo-img" />
        <img src={lendsqr} alt="company-name" id="company-name" />

        <div className="display-image">
          <img src={pabloSignIn} alt="display-image" id="display-image" />
        </div>
      </Col>

      <Col className='loginForm' xs={24} lg={12} >
        <div className='welcome'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
            />
            <p id='show-password'  onClick={() => setShowPassword((prevState) => !prevState)}>
              SHOW
            </p>
          </div>
         <Link to='' className='forgotPasswordLink'>FORGET PASSWORD</Link>
         <br />
         <input type="submit" className='submit' id='login' value='LOG IN'/>
        </form>
      </Col>
    </Row>
  );
};

export default Login;

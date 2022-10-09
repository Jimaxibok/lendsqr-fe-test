import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom'
import pabloSignIn from "../assets/images/pabloSignIn.jpg";
import lendsqrLogo from "../assets/images/lendsqrLogo.svg";



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
     
        <img src={lendsqrLogo} alt="company-name" id="company-name" />

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

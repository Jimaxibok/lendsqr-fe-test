import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pabloSignIn from '../assets/images/pabloSignIn.jpg';
import LendsqrLogo from '../assets/images/lends-logo.svg';
import { Row, Col } from 'antd';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate('/users');
  };

  return (
    <Row style={{ border: '1px solid green' }} className='login-container'>
      <Col className='hero-image' xs={0} lg={12}>
        <div>
          <img src={LendsqrLogo} alt='lendsqr' id='logo-img' />

          <div className='display-image'>
            <img src={pabloSignIn} alt='display' id='display-image' />
          </div>
        </div>
      </Col>

      <Col className='loginForm-container' xs={24} lg={12}>
        <div className='login-form'>
          <div className='welcome'>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form onSubmit={onSubmit}>
            <input type='email' className='emailInput' placeholder='Email' id='email' />
            <div className='passwordInputDiv'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='passwordInput'
                placeholder='Password'
                id='password'
              />
              <span
                id='show-password'
                onClick={() => setShowPassword((prevState) => !prevState)}>
                SHOW
              </span>
            </div>
            <Link to='' className='forgotPasswordLink'>
              <p>FORGOT PASSWORD?</p>
            </Link>
            <br />
            <input type='submit' className='submit cursor-pointer' id='login' value='LOG IN' />
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;

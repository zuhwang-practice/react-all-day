import React, { Component } from 'react';
import SNSLogin from '../SNSLogin';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className='Login' style={{ backgroundColor: this.props.LoginColor }}>
        <div className='login-wrap'>Login</div>
        <button onClick={this.props.handleLogin}>CHANNNNNGE</button>
        {/* 자식컴포넌트의이벤트로 부모의 state를 변경하려면 props로 이벤트함수를 전달받아야 한다. */}
        <SNSLogin />
      </div>
    );
  }
}

export default Login;

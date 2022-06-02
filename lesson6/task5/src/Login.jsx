import React from 'react';

// in: obj (onLogin: callBack)
// output: jsx
const Login = (props) => {

    return <button className="login btn" onClick={props.onLogin} >Login</button>
};

export default Login;
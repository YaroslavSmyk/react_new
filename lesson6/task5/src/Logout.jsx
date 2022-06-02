import React from 'react';

// in: obj (onLogout: callBack)
// output: jsx
const Logout = (props) => {

    return <button className="logout btn" onClick={props.onLogout}>Logout</button>
};

export default Logout;
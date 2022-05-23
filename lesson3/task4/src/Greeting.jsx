import React from 'react';


// function Greeting (props) {
//     const birth = new Date(props.birthDate)  
//     const dateNow = new Date()  
//     const difference = dateNow - birth;   
//     const year = Math.floor(difference / 1000 / 60 / 60 / 24 / 365)
//   return (
//     <div className="greeting">{
//       `My name is ${props.firstName} ${props.lastName}. I'm ${year} years
//       old`}
//     </div>
//   );
// }

function Greeting (props) {
    const ageUser = Math.floor(
      (new Date() - props.birthDate) / 1000 / 60 / 60 / 24 / 365
    );
    return (
      <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${ageUser} years old`}</div>
    );
  };

export default Greeting;


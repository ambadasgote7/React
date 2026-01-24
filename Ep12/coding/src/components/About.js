import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {
  constructor (props) {
    super(props);
    console.log("Parent cons")
  }

   componentDidMount() {
      console.log("Pare DID mount");
    };

    render() {

      console.log("PArent render")
       return (
        <div className='user-card'>
            <h1>About</h1>
            {/* <User name={"Ambadas"} location={"Dudhani"}/> */}

            <UserClass name={"Ambadas Class"} location={"Dudhani"}/>
        </div>
      )
    }

}

// const About = () => {
  
//   return (
//     <div className='user-card'>
//         <h1>About</h1>
//         {/* <User name={"Ambadas"} location={"Dudhani"}/> */}

//         <UserClass name={"Ambadas Class"} location={"Dudhani"}/>
//     </div>
//   )
// }

export default About;
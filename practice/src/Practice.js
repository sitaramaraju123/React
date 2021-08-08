import React from "react";
import "./_.css";

function Practice(props) {
  return <h1>Hello, {props.name}</h1>;
  //-------->1st way to use jsx<----------
  //   const msg = (
  //     <div>
  //       <h1>As a variable</h1>
  //     </div>
  //   );
  //   return msg;
  //--------> 2nd way to use jsx <----------
  //   return (
  //     <div>
  //       <h1>Hello World</h1>
  //     </div>
  //   );
  // return a;
  //-------------> 3rd way to use jsx<-----------
  // function nice() {
  //   return (
  //     <div>
  //       <h1>Inner Function</h1>
  //     </div>
  //   );
  // }
  // return nice();
}

export class Normal extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello I am Class Component</h1>
      </div>
    );
  }
}

//-------->4rd way to use jsx<-----------
// let a = (
//   <div>
//     <h1>Out side of function</h1>
// );
//   </div>
// class Practice extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
export default Practice;

import React from "react"
import {connect} from "react-redux"
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang: []}
  }
  render(){
      return(
        <div>
          <h1>Vi Van Thuc </h1>
        </div>
      );
  }
}
 
module.exports = Home

import React from "react"
import {connect} from "react-redux"
import {remove} from "../actions/action"

class Note extends React.Component {
  removeNote(){
    var {index, dispatch} = this.props;
    dispatch(remove(index)) 
  }

  render(){
    return(
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.removeNote.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = connect()(Note)

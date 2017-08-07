import React from "react"
import {connect} from "react-redux"
import {toggle, addItem} from "../actions/action"
class NoteForm extends React.Component {
  //Y tuong show hide cai note form nay ... Ban dau no se la dau +
  //Khi click vao dau + no se hien thi ra nodeform .. va khi add xong no se la dau +
  //Nhan thay co su thay doi o component nodeform nen ta cho no mot state
  //De co state ta phai khai bao constructor
  // constructor(props){
  //   super(props);
  //   this.state = {isAdding: false}
  // }
  handleSubmit(e){
    //Khong refresh lai trang web
    e.preventDefault()
    var {dispatch} = this.props;
    dispatch(addItem(this.refs.txt.value))
    dispatch(toggle())
  }
  //ham bat tat dau +
  toggle(){
    var {dispatch} = this.props; 
    dispatch(toggle())
  }
  render(){
    if(this.props.isAdding)return(
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Enter your text" ref="txt"/>
          <br/>
          <button>Add </button>
        </form>
    )
    return <button onClick={this.toggle.bind(this)}>+</button>
  }
}

module.exports = connect(function(state){
  return {isAdding: state.isAdding}
})(NoteForm)

import './App.css';
import React from "react";
export default class ChangeBlue extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             value: true
         }
         this.handleClick = this.handleClick.bind(this)
     }
     handleClick(){
         this.setState({
             value: false
         })
     }
     render() {
        return (
            <div className='square'>
                <div className={this.state.value ? 'valueFalse' : 'valueTrue'} onClick={this.handleClick}></div>
            </div>
        )
    }
}

export  class ChangeRed extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             value: true
         }
         this.handleClick = this.handleClick.bind(this)
     }
     handleClick(){
         this.setState({
             value: false
         })
     }
     render() {
        return (
            <div className='square'>
                <div className={this.state.value ? 'valueTrue' : 'valueFalse'} onClick={this.handleClick}></div>
            </div>
                )
    }
}




import React, { Component } from "react";

export class Counter extends Component{
render(){
    return(              
        <div className='controls'>

        <button type='button' onClick={this.props.good} >Good</button>
        <button type='button' onClick={this.props.neutral} >Neutral</button>
        <button type='button' onClick={this.props.bad} >Bad</button>
    </div>)
}
}
import React from 'react';
import './Counter.css';
class Counter extends React.Component {
    total = 0;
    percent = 0;
    totalPercent=0
state = {
            good: 0,
            neutral: 0,
            bad: 0
          }
 
    good = ()=>{
        this.setState((prevState)=>{
            return{
                good:prevState.good + 1
            }
        })
    }
    bad = ()=>{
        this.setState((prevState)=>{
            return{
                bad:prevState.bad + 1
            }
        });
    }
    neutral = ()=>{
        this.setState((prevState)=>{
            return{
                neutral:prevState.neutral + 1
            }
        });

    }
    countTotalFeedback(){
       return this.total = this.state.good+this.state.neutral+this.state.bad
    }
    countPositiveFeedbackPercentage(){
    this.totalPercent = this.state.good + this.state.bad
    return this.percent = Math.round(this.state.good / this.totalPercent *100)
    }

    render(){
        return(
            <div className='counter'>
                <h1>Please leave feedback</h1>
            <div className='controls'>

                <button type='button' onClick={this.good} >Good</button>
                <button type='button' onClick={this.neutral} >Neutral</button>
                <button type='button' onClick={this.bad} >Bad</button>
            </div>

  <ul className='statistics__conainer'>
    <h2> Statistics</h2>

     <li>Good : <span className='statistic__value'>{this.state.good}</span> </li>
    <li>Neutral : <span className='statistic__value'>{this.state.neutral}</span> </li>
      <li>Bad : <span className='statistic__value'>{this.state.bad}</span> </li>
      <li>Total : <span className='statistic__value'>{this.countTotalFeedback()}</span> </li>
      <li>Positive feedback: <span className='statistic__value'>{this.countPositiveFeedbackPercentage()}%</span> </li>

  </ul> 
    </div> 
        )
    }

}
export default Counter 
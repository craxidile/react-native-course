import React from 'react'
import './counter.css'
import StatefulComponent from './StatefulComponent'

export const a = 1;
export const b = 'yo';
const StatelessComponent = (props) => { return ( <div><span id='cmp'>StatelessComponent = {props.count}</span></div> ) }
export default class Counter extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentWillMount () {
        this.setState({
            count : this.props.count,
            title : 'counter'
        
        })

    }

    increase () {
        this.setState({
            count : this.state.count + 1,
        
        })
    }

    decrease () {
        this.setState({
            count : this.state.count - 1,
        
        })

    }
    
    render () {
        const {title, count} = this.state
        return (
            <div>
                <h1 id='title'>{title}</h1>
                <button className="button" onClick = {event => this.increase()}>+</button>
                <button className= "button" onClick = {event => this.decrease()}>-</button>
                <span>{count}</span>
                <StatelessComponent count = {count}/>
                <StatefulComponent  count = {count}/>
            </div>
        )
    }
}

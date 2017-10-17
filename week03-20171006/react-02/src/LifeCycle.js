import React from 'react'

export default class LifeCycle extends React.Component {
    constructor (props) {
        super(props)
        console.log('constructor');
        this.state = {
            counter: 0,
        }
    }
    componentWillMount () {
        console.log('componentWillMount ' , this.elem)
        // setTimeout(()=>{
        //     this.setState({
        //         counter: 1,
        //     })
        // },5000)
    }

    componentDidMount () {
        console.log('componentDidMount ' , this.elem)
    

    }

    componentWillUnmount () {
        console.log('componentWillUnmount ')

    }

    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        return true

    }

    componentWillUpdate () {
        console.log('componentWillUpdate')
    }

    componentDidUpdate () {
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps' , nextProps)
        this.elem.style.color = 'red'
    }
    

    render () {
        console.log('render')
        return (
            <div ref = { elem => { this.elem = elem } }>{this.props.counter}</div>
        )
    }

    

}
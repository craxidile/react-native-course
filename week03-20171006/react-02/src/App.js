import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter,{a,b} from './Counter'
import LifeCycle from './LifeCycle'
import EventComponent from './EventComponent'

class App extends Component {

  constructor(props) {
    super(props);
    this.name = 'best';
    this.state = {
      counter: 0
    };
  }

  componentWillMount(){
    this.setState({
      array: [],
      timeToKill: false,

    })

    // setTimeout(()=> {
    //   this.setState({timeToKill: true,})
    // },5000);

    setTimeout(()=>{
      this.setState({
          counter: 1,
      })
    },5000)

  }

  addItem(){
    this.setState({
      array: [...this.state.array ,Date.now()],

    })
  }
  render() {
    return (
      <div>
        {
          !this.state.timeToKill ? (
            <EventComponent />
          ) : null
        }
       
      </div>
    );
  }
}

export default App;

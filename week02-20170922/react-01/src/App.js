import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter,{a,b} from './Counter'


class App extends Component {

  constructor(props) {
    super(props);
    this.name = 'best';
  }

  componentWillMount(){
    this.setState({
      array: [],

    })

  }

  addItem(){
    this.setState({
      array: [...this.state.array ,Date.now()],

    })
  }
  render() {
    return (
      <div>
        {a}
        {b}
        <Counter count={10}/>
      </div>
    );
  }
}

export default App;

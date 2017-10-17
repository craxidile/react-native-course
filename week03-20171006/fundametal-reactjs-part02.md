## Event Listener

_if declare event for tag(html) example onClick, onChage etc._

_and in event that use this or state , you have to bind function._

**Example**

```javascript

constructor () {
    this.state = {value: 'click'};
    this.handleOnClick = this.handleOnClick.bind(this)
}

handleOnClick() {
    
    console.log('click', this.state.value)
}

render () {
    return (
        <div><button onClick ={this.handleOnClick} >click</button></div>
    )
}
```

Another way use lamda function to declare event

```javascript

render () {
    return (
        <div><button onClick = {()=>console.log('click')}>click</button></div>
    )
}

```

**See more example in react02/EventComponent.js**

## Introduction React-router


### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-router-dom

**Example in react-02 project**
## Reactjs
### DOM
_1. tree_

_xml need tag_

_html don't need tag_

_1.1 ReactElement_

_1.2 ReactText_ finally end

        x
    /       \
    a       b
        /       \
        c       d=11

_render_

1. createClass
2. createElement
3. render

### Javascript  
### Style


### Stateless vs Stateful

1. can use propsh

_Stateful_

1. have life cycle
2. props --> parent
3. state --> mine
4. use state , life cycle

_Stateless_

1. not have life cycle
2. props
3. can't use state 

Example StateFul and Stateless
```javascript
//StateFul

import React from 'react'

export default class StatefulComponent extends React.Component {
  render () {
      return (
        <div>
          <span id='fulCmp'>StatefulComponent = {this.props.count}</span>
        </div>
      )
  }
}

//Stateless

const StatelessComponent = (props) => { return ( <div><span id='cmp'>StatelessComponent = {props.count}</span></div> ) }

```

### Reactjs lifecycle

## Old React lifecycle
![React Lifecycle](/week03-20171005/images/react-lifecycle.png)

## New React lifecycle
![React New Lifecycle](/week03-20171005/images/0_OoDfQ7pzAqg6yETH.jpeg)

**See more example**

[https://plnkr.co/edit/0cN0tu?p=preview](https://plnkr.co/edit/0cN0tu?p=preview)

import React from 'react'

export default class EventComponent extends React.Component {
  constructor (props) {
      super (props)
      this.state = {
        value: '',
        valueArrow: '',
        valueKeyup: '',
        unControl : ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.input.value);
    console.log(this.input.value)
    event.preventDefault();
  }
  handleChange(event) {
   // this.setState({value: event.target.value})
    console.log(event.target.value)
  }
  handleOnClick() {
      console.log('click')
  }
  render () {
    return (
      <div>
         {/* <label>Input bind function</label> */}
         <br/>
         <input type="text" value={this.state.value} onChange={this.handleChange} />
         <br/>
          result : {this.state.value}
         <br/>
         <label>Input arrow function</label>
         <br/>
         <input type="text" value={this.state.valueArrow} onChange={(event)=>{this.setState({valueArrow: event.target.value})}} />
         <br/>
          result : {this.state.valueArrow}

         <div>
         <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
         </div>
          <input type="text" value={this.state.valueKeyup} onKeyUp= {(event)=>{this.setState({valueKeyup: this.state.valueKeyup + event.key.toUpperCase()})}} />
         <div>

        <div><button onClick = {()=>console.log('onclick')}>click</button></div>


         <div>Uncontroled Component</div>
         <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
            </label>
            <input type="submit" value="Submit" />
        </form>
         </div>

      </div>
    )
  }
}
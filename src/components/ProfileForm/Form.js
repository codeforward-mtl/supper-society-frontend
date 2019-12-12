import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(type, event) {
    event.preventDefault()
    let change = {};
    change[type] = event.target.value;
    this.setState(change);
  } 

  componentWillReceiveProps(newProps) {
      this.setState(newProps.profile)
  }

  submit(event) {
    event.preventDefault()
    this.props.update(this.state);
  }

  render() {
    return (
      <div>

        <form onSubmit={this.submit}>
            <label>Name: </label>
          <input  hintText='Name'
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')}/>
          <br />
          <label>Description: </label>
          <input hintText='Description'
                      value={this.state.description}
                      onChange={this.handleChange.bind(this, 'description')}/>
          <br />

          <input type="submit" />

        </form>
      </div>
    )
  }
}

export default Form;
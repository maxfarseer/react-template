import React, { Component, PropTypes } from 'react'
export default class Step1 extends Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      name: '',
      country: '',
      postCode: '',
      state: '',
      city: '',
      street: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.name) {
      this.setState({
        name: nextProps.data.name,
        country: nextProps.data.country,
        postCode: nextProps.data.postCode,
        state: nextProps.data.state,
        city: nextProps.data.city,
        street: nextProps.data.street,
      })
    }
  }
  onInputChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  componentWillUnmount() {
    this.props.send(1, {
      name: this.state.name,
      country: this.state.country,
      postCode: this.state.postCode,
      state: this.state.state,
      city: this.state.city,
      street: this.state.street,
    }) //TODO: refactor
  }
  render() {
    const { name, country, postCode, state, city, street } = this.state
    return (
      <div>
      {
        this.props.isLoading ? <p>Is loading...</p> : 
        <div>
          <h1>Create Main Account</h1>
          <div>
            <label htmlFor='name'>Main Account Name</label>
            <input id='name' value={name} onChange={this.onInputChange} placeholder={'Input Name'}/>
          </div>
          <div>
            <label htmlFor='country'>Country</label>
            <select 
            name='country' 
            id='country'
            defaultValue={country}>
              <option value='CZ'>Czech</option>
              <option value='EN'>Britain</option>
              <option value='RU'>Russia</option>
            </select>
          </div>
          <div>
            <label htmlFor='post-code'>Post Code</label>
            <input id='post-code' value={postCode} onChange={this.onInputChange} placeholder={'Input Post Code'}/>
          </div>
          <div>
            <label htmlFor='state'>State</label>
            <input id='state' value={state} onChange={this.onInputChange} placeholder={'Input State'}/>
          </div>
          <div>
            <label htmlFor='city'>City</label>
            <input id='city' value={city} onChange={this.onInputChange} placeholder={'Input City'}/>
          </div>
          <div>
            <label htmlFor='street'>Street</label>
            <input id='street' value={street} onChange={this.onInputChange} placeholder={'Input Street'}/>
          </div>
        </div>
      }
      </div>
    )
  }
}

Step1.propTypes = {
  send: PropTypes.func,
  //countries: PropTypes.array.isRequired,
}

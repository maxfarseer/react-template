import React, { Component, PropTypes } from 'react'
export default class Step1 extends Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      test: '',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.name) {
      this.setState({ test: nextProps.data.name })
    }
  }
  onInputChange(e) {
    this.setState({ test: e.target.value })
  }
  componentWillUnmount() {
    this.props.send(1, { name: this.state.test }) //TODO: refactor
  }
  render() {
    const { test } = this.state
    return (
      <div>

      {
        this.props.isLoading ? <p>Is loading...</p> : <input value={test} onChange={this.onInputChange} placeholder={'Input name'}/>
      }

      </div>
    )
  }
}

Step1.propTypes = {
  send: PropTypes.func,
  //countries: PropTypes.array.isRequired,
}

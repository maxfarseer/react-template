import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RatesActions from '../../actions/RatesActions'

class ListOfRates extends Component {
  constructor(props) {
    super(props)
    this.addRate = this.addRate.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.state = {
      name: '',
      price: 0,
    }
  }

  componentDidMount() {
    this.props.loadRates()
  }
  addRate() {
    const { name, price } = this.state

    this.props.addRate({
      name,
      price,
    })
  }
  renderTableBody(data) {
    let template

    template = data.map( (item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      )
    })

    return template
  }
  renderPage() {
    const { isFetching, data } = this.props.rates
    let template

    if (isFetching) {
      template = <p>Загружаю...</p>
    } else {
      template = <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={this.sort}>Price</th>
          </tr>
        </thead>
        <tbody>
          { this.renderTableBody(data) }
        </tbody>
      </table>
    }

    return template
  }
  inputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  render() {
    const { name, price } = this.state
    const error = this.props.rates.error
    return (
      <div>
        <h1>ListOfRates:</h1>

        <div className='row'>
          <div className='col-md-8'>
            <input id='name' onChange={this.inputChange} value={name}/>
            <input id='price' onChange={this.inputChange} value={price}/>{' '}

            <button
              className='btn btn-primary btn-xs'
              onClick={this.addRate}
              disabled={!name || !price}
            >Add</button>

          </div>
        </div>

        { error ? <p className='bg-danger'>{error}</p> : null }

        { this.renderPage() }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rates: state.rates,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( RatesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfRates)

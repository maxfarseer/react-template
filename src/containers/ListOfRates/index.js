import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RatesActions from '../../actions/RatesActions'
import * as CountriesActions from '../../actions/CountriesActions'

class ListOfRates extends Component {
  constructor(props) {
    super(props)
    this.addRate = this.addRate.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
    this.selectChange = this.selectChange.bind(this)
    this.state = {
      name: '',
      price: 0,
      country: '',
      rating: '',
    }
  }

  componentDidMount() {
    this.props.ratesActions.loadRates()
    this.props.countriesActions.loadCountries()
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
          <td>{item.country}</td>
          <td>{item.rating}</td>
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
            <th><i className='fa fa-flag-o'></i></th>
            <th><i className='fa fa-star'></i></th>
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
  selectChange(e) {
    const filterValue = e.target.value
    const filterName = e.target.id
    this.setState({
      [filterName]: filterValue,
    }, () => {
      this.props.ratesActions.countryFilter(filterName, filterValue)
    })
  }
  renderOptions() {
    const data = this.props.countries.data
    return data.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)
  }
  render() {
    const { name, price, country, rating } = this.state
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

        <select id='country' onChange={this.selectChange} value={country}>
          <option value=''>Unset</option>
          { this.renderOptions() }
        </select>

        <select id='rating' onChange={this.selectChange} value={rating}>
          <option value=''>Unset</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>

        { error ? <p className='bg-danger'>{error}</p> : null }

        { this.renderPage() }

      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    rates: state.rates,
    countries: state.countries,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ratesActions: bindActionCreators( RatesActions, dispatch),
    countriesActions: bindActionCreators( CountriesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfRates)

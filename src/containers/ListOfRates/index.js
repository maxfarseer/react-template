import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadRates } from '../../actions/RatesActions'

class ListOfRates extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const { rates } = this.props
    return (
      <div>
        <h1>ListOfRates:</h1>

        { rates.isFetching ? <p>Загружаю...</p> : null }

        {/*<div>
          { data.map( (item,index) => <p key={index}>{item}</p> ) }
        </div>
        <div>
          Всего rates: { data.length }
        </div>*/}
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
  return {
    loadData: () => dispatch(loadRates()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfRates)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CountriesActions from '../../actions/CountriesActions'

import Step1 from '../../components/Steps/Step1'
import Step2 from '../../components/Steps/Step2'
import Step3 from '../../components/Steps/Step3'
import Step4 from '../../components/Steps/Step4'
import Step5 from '../../components/Steps/Step5'

class AddRate extends Component {
  constructor(props) {
    super(props)
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)

    this.state = {
      step: 1,
    }
  }
  componentDidMount() {
    this.props.countriesActions.loadCountries()
  }
  nextStep() {
    this.setState({
      step: this.state.step+1,
    })
  }
  prevStep() {
    this.setState({
      step: this.state.step-1,
    })
  }
  handlSend(step, data) { // eslint-disable-line no-unused-vars
    // устанавливать стейт, в зависимости от данных в шаге
  }
  renderStep() {
    const { step } = this.state
    const { data } = this.props.countries
    //let template

    switch(step) {
      case 1:
        return <Step1 countries={data} send={this.handlSend} />
      case 2:
        return <Step2/>
      case 3:
        return <Step3/>
      case 4:
        return <Step4/>
      case 5:
        return <Step5/>
      default:
        return <p> DEFAULT </p>
    }
  }
  send() {
    console.log('send') //eslint-disable-line no-console
  }
  render() {
    const { step } = this.state
    return (
      <div>
        { this.renderStep() }

        <button className='btn btn-primary' onClick={this.prevStep} disabled={step === 1}>Prev</button>

        {
          step > 4 ?
          <button className='btn btn-success' onClick={this.send}>Send</button> :
          <button className='btn btn-primary' onClick={this.nextStep}>Next</button>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    countriesActions: bindActionCreators( CountriesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRate)

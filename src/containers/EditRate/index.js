import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RateActions from '../../actions/RateActions'

import Step1 from '../../components/Steps/Step1'
import Step2 from '../../components/Steps/Step2'
import Step3 from '../../components/Steps/Step3'
import Step4 from '../../components/Steps/Step4'
import Step5 from '../../components/Steps/Step5'

class EditRate extends Component {
  constructor(props) {
    super(props)
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)

    this.state = {
      step: 1,
    }
  }
  componentDidMount() {
    this.props.actions.getRateById(this.props.params.id)
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
  renderStep() {
    const { step } = this.state
    const { data, isFetching } = this.props.rate
    //let template

    switch(step) {
      case 1:
        return <Step1 data={data} isLoading={isFetching}/>
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
        <p>EDIT</p>
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
    rate: state.rate,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( RateActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRate)

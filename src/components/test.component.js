// -----------------------------
// developed by ARASH
// It's just a boilerplate version
// Nodejs / Expressjs / React.js
//------------------------------


import React, { Component, useState } from 'react'
import axios from 'axios'

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message1: 'UKNOWN',
      message2: 'UKNOWN'
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:3001/test')
    //   .then(response => {
    //     this.setState({
    //       message1: response.data.msg
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    
    const param = 'parameter_test'
    axios.post('http://localhost:3001/test', { param })
      .then(response => {
        this.setState({
          message1: response.data.msg,
          message2: response.data.msg2
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        Server Response 1:
        <div>
          {this.state.message1}
        </div>
        <hr />
        Server Response 2:
        <div>
          {this.state.message2}
        </div>
      </div>
    )
  }
}
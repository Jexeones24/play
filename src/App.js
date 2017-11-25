import React, { Component } from 'react'
import './App.css'
import * as fetch from './lib/service'

class App extends Component {
  componentDidMount() {
    fetch.getTopHeadlines()
    .then(data => {console.log('headlines:', data)})

    fetch.getStarWarsChars()
    .then(data => {console.log('star wars characters:', data)})

    fetch.getNasaInfo()
    .then(data => {console.log('nasa info:', data)})
  }

  render() {
    return (
      <div className='App'>
      </div>
    )
  }
}

export default App

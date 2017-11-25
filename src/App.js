import React, { Component } from 'react'
import './App.css'
import * as fetch from './lib/service'
import { Home, Nasa, Headlines, Swapi } from './components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  state = {
    headlines: []
  }
  componentDidMount() {
    fetch.getTopBBC()
    .then(data => {
      console.log(data.articles)
      this.setState({ headlines: data.articles })
    })

    fetch.getStarWarsChars()
    .then(data => {console.log('star wars characters:', data)})

    fetch.getNasaInfo()
    .then(data => {console.log('nasa info:', data)})
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Links />
          <Route exact path='/' render={() =>
            <Home />} />
          <Route exact path='/nasa' render={() =>
            <Nasa />} />
          <Route exact path='/headlines' render={() =>
            <Headlines headlines={this.state.headlines} />} />
          <Route exact path='/starwars' render={() =>
            <Swapi />} />
        </div>
      </Router>

    )
  }
}

const Links = () => (
  <nav>
    <Link to='/'>HOME</Link>
    <Link to='/nasa'>NASA INFO</Link>
    <Link to='/headlines'>BBC HEADLINES</Link>
    <Link to='/starwars'>SWAPI</Link>
  </nav>
)

export default App

import React, { Component } from 'react'
import './App.css'
import * as fetch from './lib/service'
import { Home, Nasa, Headlines, Swapi } from './components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  state = {
    headlines: [],
    nasa: {},
    swapi: {}
  }
  componentDidMount() {
    const fetches = [fetch.getTopBBC(), fetch.getNasaInfo(), fetch.getStarWarsChars()]

    Promise.all(fetches)
    .then(data => {
      this.setState({
        headlines: data[0].articles,
        nasa: data[1],
        swapi: data[2]
      }, () => {console.log(this.state)})
    })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Links />
          <Route exact path='/' render={() =>
            <Home />} />
          <Route exact path='/nasa' render={() =>
            <Nasa url={this.state.nasa.url} />} />
          <Route exact path='/headlines' render={() =>
            <Headlines headlines={this.state.headlines} />} />
          <Route exact path='/starwars' render={() =>
            <Swapi swapi={this.state.swapi} />} />
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

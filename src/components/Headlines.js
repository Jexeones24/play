import React, { Component } from 'react'

export class Headlines extends Component {
  state = {
    clicked: [],
    showDetails: false
  }

  handleClick = (index) => {
    console.log(index)
    let clicked = this.state.clicked
    clicked[index] = !clicked[index]
    this.setState({ clicked }, () => {console.log(this.state)})
  }
  renderDetails = (h) => {
    console.log('details')
    return (
      <div className='headline-detail'>
        <p>Overview: {h.description}</p>
        <p>Published on: {h.publishedAt}</p>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>HEADLINES</h1>
        {this.props.headlines.map((h, index) =>

        <div key={h.title}>
          <div
            className='headline'
            onClick={this.handleClick.bind(this, index)}>
            <h4>{h.title}</h4>
          </div>
          {this.state.clicked[index] && this.renderDetails(h)}
        </div>)}
      </div>
    )
  }
}

import React, { Component } from 'react'

class Show extends Component {

  render () {
    return (
      <div className='item1'>
      <iframe className="iframe" src={this.props.videoShown.snippet === undefined ? null : `https://www.youtube.com/embed/${this.props.videoShown.id.videoId}`} width="500" height="300"/>
      <h1>{this.props.videoShown.snippet === undefined ? null : this.props.videoShown.snippet.title }</h1>
      <p> {this.props.videoShown.snippet === undefined ? null : this.props.videoShown.snippet.description } </p>
      </div>
    )
  }
}

export default Show;

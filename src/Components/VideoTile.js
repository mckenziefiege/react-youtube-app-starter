import React, { Component } from 'react'

class VideoTile extends Component {

  render () {

    return (
      <div>
        <h3 onClick={() => this.props.clickLinkHandler(this.props.video)}>{this.props.video.snippet.title} </h3>
        <p> {this.props.video.snippet.description} </p>
        <img src={this.props.video.snippet.thumbnails.default.url}/>
      </div>
    );
  }
}

export default VideoTile;

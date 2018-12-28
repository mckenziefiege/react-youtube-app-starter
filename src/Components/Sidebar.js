import React, { Component } from 'react'
import VideoTile from './VideoTile.js'

class Sidebar extends Component {

  render () {
    let videoTiles = this.props.videos.map(video => <VideoTile video={video} clickLinkHandler={this.props.clickLinkHandler}/>)
    return (
      <div className="item2">
      <h1>Top 5 From Search</h1>
        {videoTiles}
      </div>
    );
  }
}

export default Sidebar;

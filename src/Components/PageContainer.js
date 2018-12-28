import React, { Component } from 'react'
import Sidebar from './Sidebar.js'
import Search from './Search.js'
import Show from './Show.js'
import '../key.js'

class PageContainer extends Component {

  state = {
    videos: [],
    videoShown: {}
  }

  searchHandler = (search) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBTdU23RTiKow4zbpKUz0K3HpnYWIbRKh8&q=${search}&type=video`)
      .then(resp => resp.json())
      .then(data => this.setState({
        videos: data.items
      }))
  }

  clickLinkHandler = (obj) => {
    this.setState({
      videoShown: obj
    })
  }

  render () {
    console.log(this.state.videos)
    return (
      <div className="container">
        <Search searchHandler={this.searchHandler}/>
        <Show videoShown={this.state.videoShown}/>
        <Sidebar videos={this.state.videos} clickLinkHandler={this.clickLinkHandler}/>
      </div>
    )
  }
}

export default PageContainer;

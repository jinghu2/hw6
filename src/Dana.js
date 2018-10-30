import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from './images/dana1.jpg';
import baconCookie from './images/dana2.jpg';
import sausageCookie from './images/dana3.jpg';
import rackham04full from './images/dana4.jpg';
import rackham05full from './images/dana5.jpg';


class Dana extends Component{
  constructor(props) {
    super(props);
    var peanutButter = {image: peanutButterCookie, altText: "dog cookie", description: "Dana in blossom"}
    var bacon = {image: baconCookie, altText: "dog cookie", description: "Dana in April"}
    var sausage = {image: sausageCookie, altText: "dog cookie", description: "Dana in May"}
    var dietPeanut = {image: rackham04full, altText: "dog cookie", description: "Dana in Summer"}
    var rackham05 = {image: rackham05full, altText: "dog cookie", description: "Dana in Fall"}

    this.state = {
      inventory: [peanutButter, bacon, sausage, dietPeanut, rackham05],
      detail: null,
    }
  }


  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var detailView = 
    <DetailItemView 
    onClose = {(ev) => this.setState({detail: null})} 
    image = {item.image} altText = {item.altText} 
    description = {item.description} 
    />
    this.setState({detail: detailView})
  }


  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }


  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      elements.push(
        <StoreItem 
        onClick = {this.selectItem.bind(this, i)} 
        image = {item.image} 
        altText = {item.altText} 
        description = {item.description} />)
    }
    return (
      <div className="storeGroup">
      <header className="App-header">
            <h1 className="App-title">Dana</h1>
            <p className="App-intro">
              This $25 million renovation project, completed in 2004, gave SEAS 
              faculty and students an opportunity to demonstrate sustainable 
              building practices to the community. Incorporating sound 
              environmental principles and innovative technologies, the Dana 
              Building now serves as a comfortable home for the school and a 
              model for other forward-looking building projects.
            </p>
          </header>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }


  render() {
    return (
      this.renderInventory()
    );
  }
}


export default Dana;

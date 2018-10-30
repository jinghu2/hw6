import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from './images/nickles1.jpg';
import baconCookie from './images/nickles2.jpg';
import sausageCookie from './images/nickles3.jpg';
import rackham04full from './images/nickles4.jpg';


class Nickles extends Component{
  constructor(props) {
    super(props);
    var peanutButter = {image: peanutButterCookie, altText: "dog cookie", description: "Nickles landscape"}
    var bacon = {image: baconCookie, altText: "dog cookie", description: "A shop in Nickles Arcade"}
    var sausage = {image: sausageCookie, altText: "dog cookie", description: "Flowers"}
    var dietPeanut = {image: rackham04full, altText: "dog cookie", description: "Nickles portrait"}

    this.state = {
      inventory: [peanutButter, bacon, sausage, dietPeanut],
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
            <h1 className="App-title">Nickles Arcade</h1>
            <p className="App-intro">
              Nickels Arcade is a commercial building listed on the National 
              Register of Historic Places in 1987. The building is notable 
              as perhaps the only remaining example in Michigan of a 
              free-standing commercial arcade building that was popularized by 
              the Cleveland Arcade
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


export default Nickles;

import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from './images/eliberty1.jpg';
import baconCookie from './images/eliberty2.jpg';
import sausageCookie from './images/eliberty3.jpg';
import rackham04full from './images/eliberty4.jpg';
import rackham05full from './images/eliberty5.jpg';


class Eliberty extends Component{
  constructor(props) {
    super(props);
    var peanutButter = {image: peanutButterCookie, altText: "dog cookie", description: "Wall and street"}
    var bacon = {image: baconCookie, altText: "dog cookie", description: "Allan Wall"}
    var sausage = {image: sausageCookie, altText: "dog cookie", description: "Fridas Patida"}
    var dietPeanut = {image: rackham04full, altText: "dog cookie", description: "Me and my friends"}
    var rackham05 = {image: rackham05full, altText: "dog cookie", description: "Another wall"}

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
            <h1 className="App-title">E.Liberty</h1>
            <p className="App-intro">
              Every June, Ann Arbor's Summer festival will be held on the lawn in 
              front of the Rackham Building. The summer breeze, the dancing crowds, 
              the late-night movies, and my friends sitting next to me taking a selfie......
              This is the best memory I have about Ann Arbor.
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


export default Eliberty;

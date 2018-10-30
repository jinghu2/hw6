import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import DetailItemView from './DetailItemView.js'

import peanutButterCookie from './images/diag05.jpg';
import baconCookie from './images/diag01.jpg';
import sausageCookie from './images/diag03.jpg';
import rackham04full from './images/diag04.jpg';


class Diag extends Component{
  constructor(props) {
    super(props);
    var peanutButter = {image: peanutButterCookie, altText: "dog cookie", description: "Diag in Summer"}
    var bacon = {image: baconCookie, altText: "dog cookie", description: "Diag in Fall"}
    var sausage = {image: sausageCookie, altText: "dog cookie", description: "Diag in Winter"}
    var dietPeanut = {image: rackham04full, altText: "dog cookie", description: "Diag in Spring"}

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
            <h1 className="App-title">Diag</h1>
            <p className="App-intro">
              At the University of Michigan in Ann Arbor, the Diag is a large 
              open space in the middle of the university's Central Campus. 
              Originally known as the Diagonal Green, the Diag derives its 
              name from the many sidewalks running near or through it in 
              diagonal directions.
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


export default Diag;

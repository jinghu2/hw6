import React, { Component } from 'react';
import './App.css';


class DetailItemView extends Component{

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <img className="detailImage" src={this.props.image} alt={this.props.altText} />
          <div className="detailTitle">{this.props.description}</div>
          <p className="detailLabel"> The Rackham Building was not originally 
          used for music festival. It is the graduate building, where the most
          formal events happen. It is turned into a paradise every June, though.
          </p>
        </div>
      </div>
    );
  }
}


export default DetailItemView;

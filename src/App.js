import React, { Component } from 'react';
import './App.css';
import Store from './Store.js';
import Diag from './Diag.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Store/>
    if(this.state.page === 1)
      return <Diag/>
  }


  render() {
    return (
      <div>
      <div className="App">
        <div className = "App-background" />
        <div className = "App-content">
        <div className = "homeMenu">
            <div className = {"homeButton" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>my Ann Arbor</div>
          </div>
          <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Rackham</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Diag</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Dana</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >E.Liberty</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >Nickles</div>
          </div>
          <div>
          <p className="homeIntro">
              <br/><br/><br/>Only after leaving Ann Arbor did I realize<br/> it is one of the few places I feel as home.
              </p>
          </div>
          {this.renderPageView()}

        </div>
      </div>
      <footer className='foot'>
          <p>Jing Hu @ 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from "react"
import Home from './components/Home'
import Town from './components/town'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'aboutMe'
    }
  }

  render() {
    return (
      <div className="app">
      
        <div className="topnav">
          <p onClick={() => this.setState({ selectedMenu: 'aboutMe' })}>About Me</p>
          <p onClick={() => this.setState({ selectedMenu: 'Town' })}>My Town</p>
        </div>
        
        {this.state.selectedMenu === 'aboutMe' ?
          <Home/>
          :
          <Town />
        }
      </div>
    );
  }
}


export default App;


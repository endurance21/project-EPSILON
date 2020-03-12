import React,{Component} from 'react';
import './App.css';
import './hover.css';
import Asset from './Asset.png';
import Header from './components/header/header.js';
import arrow from './index.png';

class App extends Component{
    render() {
      return (
         <div>
          <Header/>
            <img src = {Asset} id='mainBuilding' alt ='thomson building' class='center'/>
            <p id= 'venue' class = 'hvr-grow '>Venue Booking</p>
            <img src = {arrow} id ='index' class='hvr-wobble-horizontal' alt ='index'/>
         </div>
        );
    }
}

export default App;
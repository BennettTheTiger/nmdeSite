import React, { Component } from 'react';
import './App.css';
import Section1 from './Section1';
import Section2 from './Section2';
import CardContainer from './CardContainer';
import MapContainer from './MapContainer';
import End from './End';
import Top10Container from './Top10Container';






class App extends Component {
  render() {
    return (
      <div className="App">
        <Section1/>
        <Section2/>
        <CardContainer/>
        <MapContainer/>
        <Top10Container/>
        <End/>
      </div>
    );
  }
}

export default App;

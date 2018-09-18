import React from 'react';
import { Container } from 'reactstrap';
import MyMapComponent from './GoogleMap';
import './css/prefs.css';


function MapContainer(props) {
    const bgStyle = {background:'#DD6E42',color:'#EAEAEA',height:"100vh"};

    return <div style={bgStyle}>
    <Container className="spacing">
        <h1>Where in the world are they?</h1>
        <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJfI3I6dd-EnW9nLDdIGnYNMbAr4ih90g&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `80vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

   </Container>
</div>
  }

  export default MapContainer;
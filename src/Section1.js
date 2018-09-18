import React from 'react';
import { Container, Row } from 'reactstrap';
import './css/coreStyles.css';

function Section1(props) {
    const bgStyle = {background:'#DD6E42',color:'#EAEAEA',height:"100vh"};
    const titleStyle = {margin:'left-50%'};

    return <div style={bgStyle}>
    <Container>
    <Row>
        <div className="centerPage" style={titleStyle}>
            <h1 >20 Potential Places to Work!</h1>
            <p>By: Bennett Schoonerman</p>
        </div>
   </Row>
   </Container>
</div>
  }

  export default Section1;
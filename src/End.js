import React from 'react';
import { Container, Row } from 'reactstrap';
import './css/coreStyles.css';

function End(props) {
    const bgStyle = {background:'#DD6E42',color:'#EAEAEA',height:"100vh"};

    return <div style={bgStyle}>
    <Container>
    <Row>
        <div className="centerPage">
            <h1>The End</h1>
            <p>Built by Bennett</p>
        </div>
   </Row>
   </Container>
</div>
  }

  export default End;
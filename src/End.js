import React from 'react';
import { Container, Row } from 'reactstrap';

function End(props) {
    const bgStyle = {background:'#DD6E42',color:'#EAEAEA',height:"100vh"};

    return <div style={bgStyle}>
    <Container>
    <Row>
        <h1>The End</h1>
        <p>Built by Bennett</p>
   </Row>
   </Container>
</div>
  }

  export default End;
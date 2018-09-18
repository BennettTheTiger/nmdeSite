import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import customData from './data/20list.json';
import CustomCard20 from './Card20';

import './css/prefs.css';

const sectionStyle = {padding:'20px'}

class CardContainer extends Component{
    state = {
        data : customData.allData,
    }
    
    render(){
        const dataCards = this.state.data.map((co,index) =>{
            return(
                <CustomCard20 data = {co} key={index}></CustomCard20>
            );
        });  
        return(
            
           <Container>
               <div style={sectionStyle}>
                    <h1 className="spacing">Meet the 20 Companies</h1>
                    <Row>
                            {dataCards}
                    </Row>
                </div>
            </Container>
        );
        
    }
}

export default CardContainer;
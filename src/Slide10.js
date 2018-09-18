import React, { Component } from 'react';
import { Row,Col} from 'reactstrap';
import './css/prefs.css';

import Overview from './Overview';

const videoStyle={position:'absolute',top:0,left:0,width:'100%',height:'100%',minWidth:'100%',minHeight:'100px'};

class Slide10 extends Component{
    render(){
        //destruct data
        const { pros , cons, about, name, logo,bgColor,color,slidesPath } = this.props.data;
        const num = this.props.slide;
        const imgStyle = {width:"100px",height:"100px",borderRadius:"50px"}
        const sectionStyle = {backgroundColor:{bgColor},color:{color},minHeight:'100vh'};

        
        
        return(
            <div style={sectionStyle}>
                <hr/>
            <Row>
                <Col xs={12}>
                <div className="text-center" >
                    <img src={logo} style={imgStyle} alt="logoHere" ></img>
                </div>
                    <h1 className="title">#{num} {name}</h1>
                </Col>
                <Col md={6}>
                    <Overview data={about}/>
                </Col>
                <Col md={6}>
                        <div className="d-none d-sm-block">
                            <iframe className="media" style={videoStyle} title="video" src={slidesPath} frameBorder="0" muted='true' allow="autoplay; fullscreen"></iframe>
                        </div>
                        
                        
                </Col>
                <hr/>
                <Col md={6}>
                    <h4 className="title">Pros</h4>
                    <hr/>
                    <p>{pros}</p>
                </Col>
                <Col md={6}>
                    <h4 className="title">Cons</h4>
                    <hr/>
                    <p>{cons}</p>
                </Col>
                <hr/>
            </Row>
            </div>
        )

        
        
    }
}

export default Slide10;
import React, { Component } from 'react';
import { Col} from 'reactstrap';


class CustomCard20 extends Component{
    render(){
        //destruct data from CardContainer
        const { name , location , size, site, imgLink } = this.props.data;
        const imgStyle = {width:"100px",height:"100px",borderRadius:"50px"}
        const cardBackground = {minHeight:'300px'};
        const bottomOut = {position:'absolute',bottom:'0px'}
        return(
            <Col md={3}>
                <div className="card-body" style={cardBackground}>
                <img src={imgLink} className="img-fluid img-thumbnail" alt="Tumbnail" style={imgStyle}/>
                    <p>Name: {name}</p>
                    <p>Location: {location}</p>
                    <p>Size: {size}</p>
                    <a href={site} className="btn btn-primary" target="new" style={bottomOut}>Visit</a>
                </div>
            </Col>
        )

        
    }
}

export default CustomCard20;
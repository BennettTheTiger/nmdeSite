import React, { Component } from 'react';
import { Col} from 'reactstrap';

class CustomCard extends Component{
    render(){

        //destruct data
        const { data } = this.props;

        const dataCards = data.map(data =>{
            return(
                <div>
                    <p>Name:{data.name}</p>
                    <p>Location:{data.location}</p>
                    <p>Size:{data.size}</p>
                </div>
            )
        });
        return(
            <Col md={3}>
                {dataCards}
            </Col>
        )

        
    }
}

export default CustomCard;
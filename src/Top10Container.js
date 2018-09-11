import React, { Component } from 'react';
import { Container} from 'reactstrap';
import Slide10 from './Slide10';
import top10Data from './data/top10Data.json'

const bgStyle = {background:'#EAEAEA',minHeight:"100vh"};

class Top10Container extends Component {
   
    state = {
        data : top10Data.data 
    }
render(){
    const Slides = this.state.data.map((slideData,index) =>{
        return(
            <Slide10 data={slideData} slide={10 - index} key={index}/>
        );
    });  
    return( <div style={bgStyle}>
            <Container>
                <h1 className="text-center">Top 10</h1>
                {Slides}
                    
            </Container>
            </div>
    );
   }
  }

  export default Top10Container;
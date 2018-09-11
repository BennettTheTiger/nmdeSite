import React, { Component }from 'react';


class Overview extends Component{ 
    render(){
    const bgStyle = {color:'#252525',padding:'5px',borderRadius:'10px'};
    const { industry , location , position } = this.props.data;

    //sytles
    


    return <div style={bgStyle}>
        <ul>
            <li>Industry:<br/>
                 {industry}
        </li><br/>
            <li>Location: <br/>
                {location}
        </li><br/>
            <li>Position: <br/>
            {position}
        </li><br/>
       
        </ul>

    </div>
    
  
  }
}

  export default Overview;
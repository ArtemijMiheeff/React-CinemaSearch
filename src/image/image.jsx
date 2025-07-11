import React from "react";
import './image.css';

class Image extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} className="image"></img>
            </div>
        )
    }
}

export default Image;
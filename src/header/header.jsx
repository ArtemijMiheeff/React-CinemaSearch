import React from 'react';
import './header.css';
import Image from '../image/image.jsx';
import png from '../assets/react.svg';


class Header extends React.Component {
render() {
    return ( 
        <header className="header">
            <Image image={png}/>
            {this.props.title}
        </header>
    )
}
}
export default Header;
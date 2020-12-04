import React from 'react';
import '../memeStyle.css'
class Header extends React.Component{
    render(){
        return(
            <div id="header">
                <img 
                id = "imgheader"
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="header"
                />
                <h1 id="headingTxt"> Meme  Generator </h1>
            </div>
        );
    }
}

export default Header;
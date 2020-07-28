  
import React, {useState} from 'react';

import Logo from '../../images/logo.png';

import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';

import IconDirClosed from '../../images/closed_folder.png';
import IconProfile from '../../images/profile.png'

import "./style.css"

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: false , portifolio: false };
    }

    handleMouseOverAbout = () => {
        this.setState({about:true})
    }

    handleMouseOutAbout = () => {
        this.setState({about:false})
    }

    handleMouseOverPort = () => {
        this.setState({portifolio:true})

    }

    handleMouseOutPort = () => {
        this.setState({portifolio:false})

    }

    render () {
    return(
        <nav>
            <a onClick={this.props.setPage.bind(this, 0)} class='logo-container'><img src={Logo} alt="Logo" id="logo"/></a>
            <div id='icon_bar'>
                <div class='icon-container'
                onClick={this.props.setPage.bind(this, 1)}
                onMouseOver={this.handleMouseOverAbout}
                onMouseOut={this.handleMouseOutAbout}>
                            <img src={IconDirClosed} 
                            alt="IconDirClosed"
                            class='icon'
                            onClick={this.props.setPage.bind(this, 1)}
                            onMouseOver={this.handleMouseOverAbout}
                            onMouseOut={this.handleMouseOutAbout}/>
                            {this.state.about === true && window.innerWidth>760?<div class='icon-name'>Portifolio</div>:null}
                </div>
                <div class='icon-container'
                onClick={this.props.setPage.bind(this, 2)}
                onMouseOver={this.handleMouseOverPort}
                onMouseOut={this.handleMouseOutPort}>
                    <img src={IconProfile}
                    alt="IconProfile"
                    class='icon'
                    onClick={this.props.setPage.bind(this, 2)}
                    onMouseOver={this.handleMouseOverPort}
                    onMouseOut={this.handleMouseOutPort}/>
                    {this.state.portifolio === true && window.innerWidth>760?<div class='icon-name'>Sobre</div>:null}
                </div>
            </div>
            <div id='links_bar'>
                <a href='https://github.com/Rafarache' target="_blank"><img src={Github} alt="Github" class='links'/></a>
                <a href='https://www.linkedin.com/in/rafael-marques-rache-838360122/' target="_blank"><img src={Linkedin} alt="Linkedin" class='links'/></a>
            </div>
        </nav>
    )}
}

export default Navbar
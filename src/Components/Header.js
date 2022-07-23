import React, { Component } from 'react';
import {AiOutlineMediumWorkmark, AiOutlineGithub, AiOutlinePicLeft} from 'react-icons/ai'

let svg_type = {
   'github': <AiOutlineGithub size={50} />,
   'medium': <AiOutlineMediumWorkmark size={50} />,
   'blog': <AiOutlinePicLeft size={50} />
}

class Header extends Component {
  render() {
   
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}>{svg_type[network.svg]}</a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Story</a></li>
         </ul>

      </nav>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">백엔드 개발자</h1>
            <br/>
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

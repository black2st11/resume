import React, { Component } from 'react';
import {AiOutlineMediumWorkmark, AiOutlineGithub, AiOutlinePicLeft} from 'react-icons/ai'

let svg_type = {
   'github': <AiOutlineGithub size={50} />,
   'medium': <AiOutlineMediumWorkmark size={50} />,
   'blog': <AiOutlinePicLeft size={50} />
}
class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}>{svg_type[network.svg]}</a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2022 Moon</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;

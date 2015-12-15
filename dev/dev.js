import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FBLike, FBSend, FBShare} from '../src/index';

document.title = 'React Facebook Plugins Dev';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

/*
var script = document.createElement('script');
script.src = '/webpack-dev-server.js';
document.getElementsByTagName('head')[0].appendChild(script);
*/

document.body.innerHTML = `
  <div id="dev"></div>
  <script src="/.js"></script>
`;

class Dev extends Component {
  render() {
    const divStyle = {
      margin: '1em',
      padding: '1em'
    };
    
    return (
      <div>
        <div style={divStyle}>
          <FBLike appId="253337218049135"
            href="http://facebook.com"
            action="like"
            layout="button_count"
            locale="fr_CA"
            share={false}
            showFaces={false}/>
        </div>
        <div style={divStyle}>
          <FBSend appId="253337218049135"
            href="http://facebook.com"/>
        </div>
        <div style={divStyle}>
          <FBShare appId="253337218049135"
            href="http://facebook.com"
            layout="box_count"
            locale="fr_CA"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Dev/>, document.getElementById('dev'));

import React, {Component, PropTypes} from 'react';

export default class FBFollow extends Component {

  static propTypes = {
    appId: PropTypes.string.isRequired,
    colorScheme: PropTypes.oneOf(['light', 'dark']),
    height: PropTypes.number,
    href: PropTypes.string.isRequired,
    kidDirectedSite: PropTypes.bool,
    layout: PropTypes.oneOf(['standard', 'box_count', 'button_count']),
    locale: PropTypes.string,
    showFaces: PropTypes.bool,
    version: PropTypes.string,
    width: PropTypes.number,
    xfbml: PropTypes.bool
  }

  static defaultProps = {
    colorScheme: 'light',
    kidDirectedSite: false,
    layout: 'standard',
    locale: 'en_US',
    showFaces: true,
    version: 'v2.5',
    xfbml: true
  }

  componentDidMount() {
    const {appId, locale, version, xfbml} = this.props;
    window.fbAsyncInit = () => {
      FB.init({ // eslint-disable-line no-undef
        appId: appId,
        xfbml: xfbml,
        version: version,
      });
    };

    // Load the SDK asynchronously
    ((d, s, id) => { // eslint-disable-line id-length
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  componentDidUpdate() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  render() {
    const {colorScheme, height, href, kidDirectedSite, layout, showFaces, width} = this.props;
    const widthParam = width ? {'data-width': width} : {};
    const heightParam = height ? {'data-height': height} : {};
    return (
      <span>
        <div id="fb-root"></div>
        <div className="fb-follow"
          data-href={href}
          data-colorscheme={colorScheme}
          data-kid-directed-site={kidDirectedSite}
          data-layout={layout}
          data-show-faces={showFaces}
          {...widthParam}
          {...heightParam}></div>
      </span>
    );
  }
}

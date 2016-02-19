import React, {Component, PropTypes} from 'react';

export default class FBSend extends Component {

  static propTypes = {
    appId: PropTypes.string.isRequired,
    colorScheme: PropTypes.oneOf(['light', 'dark']),
    href: PropTypes.string.isRequired,
    kidDirectedSite: PropTypes.bool,
    locale: PropTypes.string,
    referal: PropTypes.string,
    version: PropTypes.string,
    width: PropTypes.number,
    xfbml: PropTypes.bool
  }

  static defaultProps = {
    colorScheme: 'light',
    kidDirectedSite: false,
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
    const {colorScheme, href, kidDirectedSite, referal} = this.props;
    const referalParam = referal ? {'data-ref': referal} : {};
    return (
      <span>
        <div id="fb-root"></div>
        <div className="fb-send" data-href={href} data-colorscheme={colorScheme} data-kid-directed-site={kidDirectedSite} {...referalParam}></div>
      </span>
    );
  }
}

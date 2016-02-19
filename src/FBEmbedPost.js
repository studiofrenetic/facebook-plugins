import React, {Component, PropTypes} from 'react';

export default class FBEmbedPost extends Component {

  static propTypes = {
    appId: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    locale: PropTypes.string,
    version: PropTypes.string,
    width: PropTypes.number,
    xfbml: PropTypes.bool
  }

  static defaultProps = {
    locale: 'en_US',
    version: 'v2.5',
    width: 500,
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
    const {href, width} = this.props;
    return (
      <span>
        <div id="fb-root"></div>
        <div className="fb-post" data-href={href} data-width={width}></div>
      </span>
    );
  }
}

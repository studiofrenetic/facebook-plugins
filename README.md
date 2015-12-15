# Facebook Plugins

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save facebook-plugins
```

## Usage

1. Import Custom Element:

    ```js
    import {
      FBComments,
      FBCommentsCount,
      FBEmbedPost,
      FBEmbedVideo,
      FBFollow,
      FBLike,
      FBPage,
      FBSend,
      FBShare
    } from 'facebook-plugins';
    ```

2. Start using it!

    ```html
    render() {
      <div>
        <div style={divStyle}>
          <FBLike appId="yourFacebookAppId"
            href="http://facebook.com"
            action="like"
            layout="button_count"
            locale="fr_CA"
            share={false}
            showFaces={false}/>
        </div>
        <div style={divStyle}>
          <FBSend appId="yourFacebookAppId"
            href="http://facebook.com"/>
        </div>
        <div style={divStyle}>
          <FBShare appId="yourFacebookAppId"
            href="http://facebook.com"
            layout="box_count"
            locale="fr_CA"/>
        </div>
        <div style={divStyle}>
          <FBEmbedPost appId="yourFacebookAppId"
            href="https://www.facebook.com/20531316728/posts/10154009990506729/"
            width={750}
            locale="fr_CA"/>
        </div>
        <div style={divStyle}>
          <FBEmbedVideo appId="yourFacebookAppId"
            href="https://www.facebook.com/facebook/videos/10153231379946729/"
            width={750}
            locale="fr_CA"/>
        </div>
        <div style={divStyle}>
          <FBComments appId="yourFacebookAppId"
            href="http://developers.facebook.com/docs/plugins/comments/"
            width={750}
            numPosts={5}
            locale="fr_CA"/>
        </div>
        <div style={divStyle}>
          <FBCommentsCount appId="yourFacebookAppId"
            href="http://developers.facebook.com/docs/plugins/comments/"
            width={750}
            numPosts={5}
            locale="fr_CA"/>
        </div>
        <div style={divStyle}>
          <FBPage appId="yourFacebookAppId"
            href="https://www.facebook.com/facebook"
            tabs={['timeline', 'events', 'messages']}/>
        </div>
        <div style={divStyle}>
          <FBFollow appId="yourFacebookAppId"
            href="https://www.facebook.com/zuck"
            tabs={['timeline', 'events', 'messages']}/>
        </div>
      </div>
    }
    ```

## Roadmap
- [X] Like
- [X] Share
- [X] Send
- [X] EmbedPost
- [X] EmbedVideo
- [X] Page
- [X] Comments
- [X] CommentsCount
- [X] Follow

## License

[MIT License](http://opensource.org/licenses/MIT)

# Quill Emotion Module

A module for Quill editor to allow insert emotions.

## Demo

[CodePen](https://codepen.io/liangcy/pen/ZxZLeB)

## Usage

```html
<link rel="stylesheet" href="quill-emotion/quill-emotion.min.css">
<script src="quill-emotion/quill-emotion.min.js"></script>
```

```javascript
var toolbarOptions = [
  ['bold', 'italic', 'strike'],
  // ...
  ['emotion']
];

var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    toolbar: {
      container: toolbarOptions,
      handlers: {
        emotion: function () {}
      }
    },
    emotion: {
      items: [
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_thumb.gif', name: '笑cry', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_thumb.png', name: '坏笑', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2c/moren_yunbei_thumb.png', name: '允悲', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif', name: '可怜', size: 22 },
        // ...
      ]
    },
  }
});
```

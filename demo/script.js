var toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  ['link', 'image'],
  ['emotion']
];

var quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        emotion: function () {
        }
      }
    },
    emotion: {
      items: [
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_thumb.gif', name: '笑cry', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_thumb.png', name: '坏笑', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2c/moren_yunbei_thumb.png', name: '允悲', size: 22 },
        { url: '//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_thumb.gif', name: '可怜', size: 22 }
      ]
    },
  }
});

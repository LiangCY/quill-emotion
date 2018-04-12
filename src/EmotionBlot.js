const Parchment = Quill.import('parchment')

class EmotionBlot extends Parchment.Embed {
  static create (value = {}) {
    const node = super.create()
    const { url, name, size = 20 } = value
    node.classList.add('emotion')
    node.setAttribute('src', url)
    node.setAttribute('alt', name)
    node.setAttribute('title', name)
    node.setAttribute('width', size)
    node.setAttribute('height', size)
    return node
  }

  static formats (node) {
    let format = {}
    if (node.hasAttribute('src')) {
      format.src = node.getAttribute('src')
    }
    if (node.hasAttribute('alt')) {
      format.alt = node.getAttribute('alt')
    }
    if (node.hasAttribute('class')) {
      format.class = node.getAttribute('class')
    }
    return format;
  }
}

EmotionBlot.blotName = 'emotion'
EmotionBlot.tagName = 'img'

export default EmotionBlot


const Parchment = Quill.import('parchment')

class EmotionBlot extends Parchment.Embed {
  static create (value) {
    const node = super.create()
    if (typeof value === 'object') {
      const { url, name, size = 20 } = value
      node.classList.add('emotion')
      node.setAttribute('src', url)
      node.setAttribute('alt', name)
      node.setAttribute('title', name)
      node.setAttribute('width', size)
      node.setAttribute('height', size)
    } else if (typeof value === 'string') {
      node.setAttribute('src', value)
    }
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

  static value (node) {
    return node.getAttribute('src')
  }
}

EmotionBlot.blotName = 'emotion'
EmotionBlot.tagName = 'img'

export default EmotionBlot


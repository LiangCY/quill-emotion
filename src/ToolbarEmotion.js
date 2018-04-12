class ToolbarEmotion {
  constructor (quill, options = {}) {
    this.quill = quill
    this.options = options
    this.toolbar = quill.getModule('toolbar')
    if (!this.toolbar) return
    this.toolbar.addHandler('emotion', this.handleEmotion)
    const emotionButton = document.querySelector('.ql-emotion')
    if (emotionButton) {
      this.emotionButton = emotionButton
      emotionButton.innerHTML = options.buttonIcon || '<svg viewBox="0 0 1024 1024" width="18" height="18"><path d="M288.92672 400.45568c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m334.60224 0c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m-111.5392 362.4704c-78.05952 0-156.13952-39.08096-200.75008-100.3776-16.77312-22.31296-27.84256-50.15552-39.08096-72.45824-5.53472-16.77312 5.5296-33.4592 16.77312-39.08096 16.77312-5.53472 27.84256 5.53472 33.46432 16.768 5.53472 22.30784 16.77312 39.08608 27.84256 55.77728 44.61568 55.76704 100.38272 83.69664 161.664 83.69664 61.30176 0 122.7008-27.84256 156.16-78.07488 11.15136-16.77824 22.30784-38.99904 27.84256-55.77728 5.62176-16.768 22.30784-22.30272 33.4592-16.768 16.768 5.53472 22.30784 22.30272 16.768 33.4592-5.61152 27.84256-22.2976 50.14528-39.08096 72.45824-38.912 61.37856-116.98176 100.3776-195.06176 100.3776z m0 194.51392C268.4928 957.44 66.56 755.52256 66.56 511.99488 66.56 268.48256 268.4928 66.56 511.98976 66.56 755.50208 66.56 957.44 268.48256 957.44 511.99488 957.44 755.52256 755.50208 957.44 511.98976 957.44z m0-831.45728c-213.78048 0-386.00192 172.21632-386.00192 386.01216 0 213.8112 172.22144 386.0224 386.00192 386.0224 213.80096 0 386.0224-172.2112 386.0224-386.0224 0-213.79584-172.22144-386.01216-386.0224-386.01216z"></path></svg>'
    }
    this.initEmotionPicker()
    this.quill.root.addEventListener('click', this.hideEmotionPicker)
  }

  initEmotionPicker = () => {
    let picker = this.quill.container.querySelector('.ql-emotion-picker')
    if (!picker) {
      picker = this.quill.addContainer('ql-emotion-picker')
    }
    this.picker = picker
    this.picker.style.width = '200px'
    const left = this.emotionButton.offsetLeft + this.emotionButton.offsetWidth / 2 - 100
    if (left + 200 > this.quill.container.offsetWidth) {
      this.picker.style.right = 0
    } else {
      this.picker.style.left = left + 'px'
    }
    this.picker.style.display = 'none'
    const emotionList = document.createElement('ul')
    this.picker.appendChild(emotionList)
    const { items = [] } = this.options
    items.forEach((item) => {
      const { url, name, size = 20 } = item
      const emotionItem = document.createElement('li')
      emotionItem.classList.add('ql-emotion-item')
      const emotionImage = document.createElement('img')
      emotionImage.setAttribute('src', url)
      emotionImage.setAttribute('alt', name)
      emotionImage.setAttribute('title', name)
      emotionImage.style.width = size + 'px'
      emotionImage.style.height = size + 'px'
      emotionItem.appendChild(emotionImage)
      emotionItem.addEventListener('click', () => {
        this.insertEmotion(item)
        this.picker.style.display = 'none'
      })
      emotionList.appendChild(emotionItem)
    })
  }

  handleEmotion = () => {
    if (this.picker.style.display === 'none') {
      this.picker.style.display = 'block'
    } else {
      this.picker.style.display = 'none'
    }
  }

  hideEmotionPicker = () => {
    this.picker.style.display = 'none'
  }

  insertEmotion = (item) => {
    const { url, name, size } = item
    let selection = this.quill.getSelection(true)
    this.quill.insertEmbed(selection.index, 'emotion', { url, name, size }, 'user')
    this.quill.setSelection(selection.index + 1)
  }
}

export default ToolbarEmotion

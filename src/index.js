import './style.less'

import EmotionBlot from './EmotionBlot'
import ToolbarEmotion from './ToolbarEmotion'

Quill.register({
  'formats/emotion': EmotionBlot,
  'modules/emotion': ToolbarEmotion
})

export default { EmotionBlot, ToolbarEmotion }
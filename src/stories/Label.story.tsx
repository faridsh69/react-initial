import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const LabelStory = () => {
  return (
    <div className={styles.story}>
      <h4>2) Label, Tooltip</h4>
      <small>
        For all places we need to render text, only we should use this label component and add it
        proper font and color from props, injecting any type of classname or style is forbidden, It
        will wrap the text and show tooltip if the label text space is not enough
      </small>
      <code>{'<Label label="label" font={FontsEnum.Label16} color={ColorsEnum.Primary} />'}</code>
      <h2>Fonts</h2>
      <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
        {Object.values(FontsEnum).map(font => (
          <Label label={`${font} - Label`} font={font} key={font} />
        ))}
        <hr />
        <h2>Colors</h2>
        {Object.values(ColorsEnum).map(color => (
          <Label label={`${color} - Color`} color={color} key={color} />
        ))}
      </div>
    </div>
  )
}

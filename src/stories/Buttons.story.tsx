import { Button } from 'components/Button/Button'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ButtonStory = () => {
  return (
    <div className={styles.story}>
      <h4>3) Button</h4>
      <small>
        We have 3 variants: primary, secondary and text, also we are supporting iconLeft and
        iconRight, also we have 2 sizes: M and S
      </small>
      <code>
        {
          '<Button label="Button" size={SizesEnum.M} variant={VariantsEnum.Primary} iconRight={IconsEnum.ArrowRight} />'
        }
      </code>
      <div className={styles.story}>
        <div style={{ gap: 30, display: 'flex', flexDirection: 'column' }}>
          {[SizesEnum.M, SizesEnum.S].map(size => (
            <div key={size} style={{ gap: 30, display: 'flex' }}>
              {[VariantsEnum.Primary, VariantsEnum.Secondary, VariantsEnum.Text].map(variant => (
                <div key={size + variant} style={{ width: 300 }}>
                  <Button
                    label={'Variant: ' + '  ' + variant + '  size: ' + size}
                    size={size}
                    variant={variant}
                    iconRight={IconsEnum.ArrowRight}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <br />
        <div>
          Disabled
          <Button label='Disabled' disabled width={343} />
        </div>
        <div>
          Custom width
          <Button label='Save' width={343} />
        </div>
        <div>
          Left icon
          <Button label='Shipping' width={343} iconLeft={IconsEnum.Car} />
        </div>
      </div>
    </div>
  )
}

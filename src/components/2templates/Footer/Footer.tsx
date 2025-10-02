import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum, SizesEnum, VariantsEnum } from 'enums/enums'

import styles from './Footer.module.scss'

export const Footer = () => {
  const handleClickPath = (path: string) => {
    alert(path)
  }

  const buttonProps = {
    variant: VariantsEnum.Text,
    size: SizesEnum.S,
    font: FontsEnum.Text16,
  }

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <Button {...buttonProps} label={'SHOP'} />
          <Button {...buttonProps} label={'Ui kit'} />
          <Button {...buttonProps} label={'Api library'} />
          <Button {...buttonProps} label={'Rosé Product'} />
          <Button {...buttonProps} label={'Fortified Product'} />
          <Button {...buttonProps} label={'Sparkling Product'} />
        </div>
        <div className={styles.column}>
          <Button {...buttonProps} label={'DISCOVER & LEARN'} />
          <Button {...buttonProps} label={'News & Articles'} />
          <Button {...buttonProps} label={'Product Regions'} />
          <Button {...buttonProps} label={'Grape Varieties'} />
          <Button {...buttonProps} label={'Food Pairing'} />
        </div>
        <div className={styles.column}>
          <Button {...buttonProps} label={'Uikit'} />
          <Button {...buttonProps} label={'About'} />
          <Button {...buttonProps} label={'Contact'} />
          <Button {...buttonProps} label={'Partnerships'} />
          <Button {...buttonProps} label={'Careers'} />
        </div>
        <div className={styles.actions}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          <Label label={'Copyright © 2026'} color={ColorsEnum.White} font={FontsEnum.Text12} />
        </div>
        <Button {...buttonProps} label='Terms of Use' onClick={() => handleClickPath('Terms')} />
        <Button
          {...buttonProps}
          label='Privacy Policy'
          onClick={() => handleClickPath('Privacy Policy')}
        />
        <Button
          {...buttonProps}
          label='Return Policy'
          onClick={() => handleClickPath('Return Policy')}
        />
        <Button
          {...buttonProps}
          label='Cookie Policy'
          onClick={() => handleClickPath('Cookie Policy')}
        />
        <Button
          {...buttonProps}
          label='Content Policy'
          onClick={() => handleClickPath('Content Policy')}
        />
        <Button {...buttonProps} label='Sitemap' onClick={() => handleClickPath('Sitemap')} />
      </div>
    </div>
  )
}

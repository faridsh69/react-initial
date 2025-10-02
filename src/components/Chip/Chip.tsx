import { clsx } from 'clsx'
import { Flag } from 'components/Flag/Flag'
import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { FONTS_SIZES_MAP } from 'constants/constants'
import { IconsEnum, SizesEnum, TextAlignEnum } from 'enums/enums'

import { ChipProps } from './Chip.types'
import styles from './Chip.module.scss'

export const Chip = (props: ChipProps) => {
  const {
    label,
    onClose,
    size = SizesEnum.M,
    icon: iconProps,
    active,
    width,
    noHover = false,
    country,
    onClick,
    image,
  } = props

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[`size-${size}`],
        noHover && styles.noHover,
        active && styles.active,
        !!image && styles.hasImage,
      )}
      style={{ width }}
      onClick={onClick}
    >
      {iconProps && <Icon icon={iconProps} size={size} />}
      {country && <Flag country={country} />}
      {image && <Image src={image} alt={label} borderRadius='10px' />}
      <Label
        label={label}
        font={FONTS_SIZES_MAP[size]}
        cursorPointer
        linesCount={2}
        textAlign={TextAlignEnum.Center}
      />
      {onClose && (
        <Icon
          icon={IconsEnum.CloseMedium}
          size={SizesEnum.S}
          onClick={onClose}
          className={styles.close}
        />
      )}
    </div>
  )
}

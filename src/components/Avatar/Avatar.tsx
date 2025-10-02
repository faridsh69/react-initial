import { clsx } from 'clsx'
import { Image } from 'components/Image/Image'
import { SizesEnum } from 'enums/enums'

import { AvatarProps } from './Avatar.types'
import defaultSrc from './default_avatar.jpeg'
import styles from './Avatar.module.scss'

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = SizesEnum.M, width } = props

  return (
    <div
      className={clsx(styles.avatar, !width && styles[`size-${size}`])}
      style={{ width, height: width }}
    >
      {!!src && <Image src={src} alt={alt || 'user avatar'} />}
      {!src && <Image src={defaultSrc} alt={alt || 'user avatar'} />}
    </div>
  )
}

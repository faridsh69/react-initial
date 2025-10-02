import { useState } from 'react'
import { clsx } from 'clsx'
import { imageModalAtom } from 'hooks/contexts/imageModalAtom'
import { useAtom } from 'jotai'
import Skeleton from 'react-loading-skeleton'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { ImageProps } from './Image.types'
import styles from './Image.module.scss'

export const Image = (props: ImageProps) => {
  const {
    src,
    alt = 'image',
    className,
    width,
    height,
    borderRadius = '0px',
    keepRatio = true,
  } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(new Date().getTime())

  const handleLoadImage = () => {
    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < MINIMUM_TIME_FOR_SHOW_ANIMATION) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }

  const [, setImageModal] = useAtom(imageModalAtom)

  const hasBorderRadius = borderRadius !== '0px'

  return (
    <div
      className={clsx(
        styles.image,
        keepRatio && styles.keepRatio,
        hasBorderRadius && styles.hasBorderRadius,
        className,
      )}
      style={{ height, width, borderRadius }}
      onClick={() => setImageModal({ isOpen: true, src, alt })}
    >
      {imageState === IMAGE_STATES.loading && <Skeleton width={width} height={height} />}
      <img
        src={src}
        onLoad={handleLoadImage}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          styles.img,
          imageState === IMAGE_STATES.loading && styles.loading,
          imageState === IMAGE_STATES.cached && styles.cached,
        )}
      />
    </div>
  )
}

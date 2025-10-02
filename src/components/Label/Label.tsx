import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Tooltip } from 'components/Tooltip/Tooltip'
import { ZINDEXES } from 'constants/constants'
import { FontsEnum, IconsEnum, PlacementsEnum, SizesEnum } from 'enums/enums'
import { useIsTextFit } from 'hooks/useIsTextFit'

import { LabelProps } from './Label.types'
import styles from './Label.module.scss'

export const Label = (props: LabelProps) => {
  const {
    label = '',
    disabled = false,
    font = FontsEnum.Label16,
    linesCount = 1,
    hasError = false,
    hint = '',
    zIndex = ZINDEXES.tooltip,
    mouseEnterDelay = 0.5,
    forceTooltip = false,
    color,
    textAlign = 'left',
    required = false,
    tooltipPlacement = PlacementsEnum.Top,
    className,
    htmlFor,
    onClick,
    cursorPointer = false,
  } = props

  const { isFit, textRef } = useIsTextFit()

  if (!label) return <></>

  return (
    // @h1 h2 should be handled here
    // @todo change to typografi
    <label
      className={clsx(styles.wrapper, className, cursorPointer && styles.cursorPointer)}
      // @ts-ignore
      style={{ textAlign }}
      htmlFor={htmlFor}
      onClick={onClick}
    >
      <Tooltip
        overlay={label}
        disabled={isFit && !forceTooltip}
        placement={tooltipPlacement}
        zIndex={zIndex}
        mouseEnterDelay={mouseEnterDelay}
      >
        <div
          ref={textRef}
          className={clsx(
            styles.text,
            disabled && styles.disabled,
            hasError && styles.hasError,
            cursorPointer && styles.cursorPointer,
            linesCount === 1 && styles.oneLine,
            linesCount > 1 && styles.multiLines,
            styles[`font-${font}`],
          )}
          style={{
            color,
            // @ts-ignore
            '--lines-count': linesCount,
          }}
        >
          {label}
          {required && ' *'}
        </div>
      </Tooltip>
      {/* {required && <Icon icon={IconsEnum.Required} className={styles.required} />} */}

      {hint && (
        <Tooltip overlay={hint}>
          <Icon icon={IconsEnum.Info} className={styles.hint} size={SizesEnum.M} />
        </Tooltip>
      )}
    </label>
  )
}

import { Popover } from 'components/Popover/Popover'
import { PopoverProps } from 'components/Popover/Popover.types'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const PopoverStory = () => {
  const defaultProps = {
    overlay: (
      <div
        style={{
          padding: 30,
          background: 'white',
          border: '1px solid #eee',
          minWidth: 200,
          font: 'var(--font-400-14)',
        }}
      >
        Popover overlay goes here!, its a div with 30px padding
      </div>
    ),
    disabled: false,
    isOpen: false,
    placement: PlacementsEnum.RightStart,
  }
  const propsArray: PopoverProps[] = []

  for (const openOnActionKey in ActionsEnum) {
    const openOnAction = ActionsEnum[openOnActionKey as keyof typeof ActionsEnum]

    propsArray.push({
      ...defaultProps,
      openOnAction,
      children: (
        <button style={{ width: 300, height: 100, border: 'none' }}>
          Children JSX, Left/Right click on it
        </button>
      ),
    })
  }

  return (
    <div className={styles.story}>
      <h4>11) Popover</h4>
      <small>Popover placement and on action can be used as a portal, it has openOnAction</small>
      <code>{'<Popover openOnAction={ActionsEnum.OnClick} children={<div>test</div>} />'}</code>
      <h5></h5>
      <div style={{ width: 100 }}>
        {propsArray.map((props, index) => {
          return (
            <div key={index}>
              <Popover {...props} />
              <br />
              <br />
            </div>
          )
        })}
        <Popover />
      </div>
    </div>
  )
}

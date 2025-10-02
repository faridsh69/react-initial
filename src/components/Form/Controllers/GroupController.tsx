import { useCallback } from 'react'
import clsx from 'clsx'
import { Button } from 'components/Button/Button'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useFieldArray } from 'react-hook-form'

import { getInputController } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import styles from '../Form.module.scss'

export const GroupController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name: groupName,
    inputs = [],
    label = 'Add new item',
    noItemsLabel = 'No item added yet.',
    disabled = false,
    hiddenInputLabelsBasedOnIndex,
    errors,
  } = props

  const { fields, append, remove } = useFieldArray({
    control,
    name: groupName,
  })

  const handleAddRow = useCallback(() => {
    append({})
    onChangeInput?.({ [groupName]: 'new_field_added' })
  }, [onChangeInput])

  const handleRemoveRow = useCallback(
    (rowIndex: number) => {
      remove(rowIndex)
      onChangeInput?.({ [groupName]: rowIndex })
    },
    [onChangeInput],
  )

  const hideInput = useCallback(
    (input: any, fieldIndex: number) => {
      if (!hiddenInputLabelsBasedOnIndex) return false

      const hiddenInputLabels = hiddenInputLabelsBasedOnIndex(fieldIndex)

      return hiddenInputLabels.includes(input.label)
    },
    [hiddenInputLabelsBasedOnIndex],
  )
  const rootErrorMessage = errors?.[groupName]?.root?.message

  const showActionButtons = !disabled

  return (
    <div className={styles.groupsWrapper}>
      <div className={styles.groups}>
        {!fields.length && (
          <div className={styles.noItems}>
            <span>{noItemsLabel}</span>
          </div>
        )}
        {fields.map((_, fieldIndex) => {
          return (
            <div className={clsx(styles.group)} key={fieldIndex}>
              <div className={clsx(styles.row, styles.groupInputs)}>
                {inputs.map(input => {
                  const { name, columns = 12, component, ...rest } = input
                  if (hideInput(input, fieldIndex)) return null

                  const InputController = getInputController(component)
                  const inputName = `${groupName}.${fieldIndex}.${name}`

                  return (
                    <div key={inputName} className={styles[`col-${columns}`]}>
                      <InputController
                        name={inputName}
                        control={control}
                        onChangeInput={onChangeInput}
                        {...rest}
                      />
                    </div>
                  )
                })}
              </div>
              {showActionButtons && (
                <Button
                  onClick={() => handleRemoveRow(fieldIndex)}
                  iconRight={IconsEnum.CloseSmall}
                  variant={VariantsEnum.Text}
                />
              )}
            </div>
          )
        })}
      </div>
      <span className={styles.hasError}>{rootErrorMessage}</span>
      {showActionButtons && (
        <div>
          <Button label={'+ ' + label} onClick={handleAddRow} size={SizesEnum.S} />
        </div>
      )}
    </div>
  )
}

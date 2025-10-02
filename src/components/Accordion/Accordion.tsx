import { useEffect, useState } from 'react'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { IconsEnum, VariantsEnum } from 'enums/enums'

import { AccordionProps } from './Accordion.types'
import styles from './Accordion.module.scss'

export const Accordion = (props: AccordionProps) => {
  const { title, content, isExpanded: propsIsExpanded, onExpand } = props

  const [isExpanded, setIsExpanded] = useState(propsIsExpanded)

  useEffect(() => {
    setIsExpanded(propsIsExpanded)
  }, [propsIsExpanded])

  const toggleAccordion = () => {
    setIsExpanded(p => !p)
    onExpand?.(!isExpanded)
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <Label label={title} cursorPointer />
        <Button
          variant={VariantsEnum.Text}
          iconLeft={isExpanded ? IconsEnum.Mines : IconsEnum.Plus}
        />
      </div>
      <div className={styles.content}>{isExpanded && content}</div>
    </div>
  )
}

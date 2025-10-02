import { ProductDetailAccordions } from 'components/2templates/ProductDetailAccordions/ProductDetailAccordions'

import styles from './Story.module.scss'

export const AccordionStory = () => {
  return (
    <div className={styles.story}>
      <h4>20) Accordion</h4>

      <small>We can collapse and expand content</small>
      <code>{'<Accordion />'}</code>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ProductDetailAccordions />
      </div>
    </div>
  )
}

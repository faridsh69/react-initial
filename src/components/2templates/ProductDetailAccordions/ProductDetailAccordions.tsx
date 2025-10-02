import { Accordion } from 'components/Accordion/Accordion'

export const ProductDetailAccordions = () => {
  return (
    <div>
      <Accordion
        title='PRODUCT DESCRIPTION'
        content={
          <p>
            Vega Sicilia Valbuena 5º is a highly sought-after product that showcases the expertise
            of a renowned producer. Hailing from a prestigious appellation, this product is crafted
            from grapes grown in exceptional vineyards. The vineyard features include carefully
            selected plots with ideal soil composition and optimum number.
          </p>
        }
      />
      <Accordion
        title='AROMAS (7)'
        content={
          <p>
            Vega Sicilia Valbuena 5º is a highly sought-after product that showcases the expertise
            of a renowned producer. Hailing from a prestigious appellation, this product is crafted
            from grapes grown in exceptional vineyards. The vineyard features include carefully
            selected plots with ideal soil composition and optimum number.
          </p>
        }
      />
      <Accordion title='TASTE PROFILE' content={'TASTE PROFILE'} />
      <Accordion title='DRINKING WINDOW' content={'DRINKING WINDOW'} />
      <Accordion title='ORIGINS' content={'ORIGINS'} />
      <Accordion title='GRAPES (5)' content={'GRAPES (5)'} />
      <Accordion title='RATINGS & REVIEWS' content={'RATINGS & REVIEWS'} />
    </div>
  )
}

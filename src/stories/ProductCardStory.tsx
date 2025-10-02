import { ProductCard } from 'components/ProductCard/ProductCard'
import { ProductCardHorizontal } from 'components/ProductCardHorizontal/ProductCardHorizontal'
import { ProductImage } from 'components/ProductImage/ProductImage'
import { IMAGES, PRODUCTS } from 'constants/constants'

import styles from './Story.module.scss'

export const ProductCardStory = () => {
  return (
    <div className={styles.story}>
      <h4>24) ProductCard</h4>

      <small>We are using this component to render list of products</small>
      <code>{'<ProductCard product={product} />'}</code>

      <div style={{ gap: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div style={{ gap: 20, display: 'flex', flexDirection: 'column' }}>
        {PRODUCTS.map(product => (
          <ProductCardHorizontal key={product.id} product={product} />
        ))}
      </div>
      <div style={{ width: 380 }}>
        <ProductImage src={IMAGES[0]} alt={'text'} width={97} height={360} />
        <ProductImage src={''} alt={'text'} width={97} height={360} />
      </div>
    </div>
  )
}

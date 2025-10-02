export const APP_PATHS = {
  home: '/',
  uikit: '/uikit',
  apis: '/apis',
  products: '/products',
  productDetails: '/product/:productId',
  instagram: '/instagram',
  instagramUser: '/instagram/user/:userId',
  profile: '/profile',
}

export const PRODUCT_SORTS = [
  {
    label: 'Recommended',
    value: 'recommended',
  },
  {
    label: 'Top Rated',
    value: 'rating-desc',
  },
  {
    label: 'Price: High to Low',
    value: 'price',
  },
  {
    label: 'Price: Low to High',
    value: 'price-desc',
  },
]

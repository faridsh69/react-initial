import { Navbar } from 'components/Navbar/Navbar'

export const NavbarStory = () => {
  const categoryOptions = [
    {
      label: 'Cabernet Sauvignon',
      path: '/red-product/cabernet-sauvignon',
    },
    {
      label: 'Pinot Noir',
      path: '/red-product/pinot-noir',
    },
    {
      label: 'Merlot',
      path: '/red-product/merlot',
    },
    {
      label: 'Malbec',
      path: '/red-product/malbec',
    },
    {
      label: 'Shiraz / Syrah',
      path: '/red-product/shiraz',
    },
    {
      label: 'Cabernet Franc',
      path: '/red-product/cabernet',
    },
    {
      label: 'Nebbiolo',
      path: 'red-product/nebbiolo',
    },
    {
      label: 'Grenache',
      path: 'red-product/grenache',
    },
    {
      label: 'Red Blend',
      path: 'red-product/red-blend',
    },
    {
      label: 'Sweet Ui kit',
      path: 'red-product/sweet-red-product',
    },
  ]
  const categories = [
    {
      label: 'Red Grape Varieties',
      path: 'rose-product/rose-product-styles',
      options: categoryOptions,
    },
    {
      label: 'Ui kit Regions',
      path: 'rose-product/rose-product-styles',
      options: categoryOptions,
    },
    {
      label: 'Popular Ui kits',
      path: 'rose-product/rose-product-styles',
      options: categoryOptions,
    },
  ]
  const options = [
    {
      label: 'Ui kit',
      categories: categories,
    },
    {
      label: 'Api library',
      categories: categories,
    },
    {
      label: 'Rosé / Pink Product',
      categories: categories,
    },
    {
      label: 'Sparkling Product',
      categories: categories,
    },
    {
      label: 'News & Articles',
      categories: categories,
    },
  ]

  return <Navbar options={options} />
}

import { Navbar } from 'components/Navbar/Navbar'

export const HeaderNavbar = () => {
  const categoryOptions = [
    {
      label: 'Ui kit',
      path: '/uikit',
    },
    {
      label: 'Api library',
      path: '/apis',
    },
    {
      label: 'Instagram',
      path: '/instagram',
    },
  ]

  const categories = [
    {
      label: 'Ui kit',
      path: '/uikit',
      options: categoryOptions,
    },
    {
      label: 'Api library',
      path: '/apis',
      options: categoryOptions,
    },
    {
      label: 'Instagram',
      path: '/instagram',
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
      label: 'Instagram',
      categories: categories,
    },
  ]

  return <Navbar options={options} />
}

import { NewsCard } from 'components/NewsCard/NewsCard'
import { Slider } from 'components/Slider/Slider'
import { IMAGES } from 'constants/constants'
import { themeStyles } from 'scss/theme.styels'

export const NewsSlider = () => {
  const news: any[] = [
    {
      id: 1,
      src: IMAGES[0],
      title: 'The Ultimate Guide to Rioja Product: Styles, Grapes, Travel Tips & Product Pairings',
      created_at: 'May 22, 2025',
      duration: '29 minutes read',
      author: 'Matthew Cocks',
    },
    {
      id: 2,
      src: IMAGES[1],
      title: 'Chianti Product Guide: From Black Rooster Legends to Modern Classics',
      created_at: 'May 20, 2025',
      duration: '9 minutes read',
      author: 'Sanya Abhay',
    },
    {
      id: 3,
      src: IMAGES[2],
      title: 'Viognier: Your Summer Holiday in a Glass',
      created_at: 'May 15, 2025',
      duration: '5 minutes read',
      author: 'Krystal Wen',
    },
    {
      id: 4,
      src: IMAGES[0],
      title: 'Pinot Gris: Fifty Shades of Grey Pinot',
      created_at: 'May 13, 2025',
      duration: '7 minutes read',
      author: 'Sylvia Ba',
    },
    {
      id: 5,
      src: IMAGES[1],
      title: 'Meet Cabernet Franc: The Parent of Cabernet Sauvignon and a Rising Star',
      created_at: 'Jul 11, 2025',
      duration: '7 minutes read',
      author: 'Lotte Gabrovits',
    },
  ]

  return (
    <div className={themeStyles.container}>
      <Slider
        label='News & Articles'
        options={news}
        SlideComponent={NewsCard}
        SlideComponentProp='news'
      />
    </div>
  )
}

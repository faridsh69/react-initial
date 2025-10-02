import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { FontsEnum, IconsEnum, SizesEnum, TextAlignEnum } from 'enums/enums'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './MainSliderSwipper.css'

import { MainSliderSwipperProps } from './MainSliderSwipper.types'
import styles from './MainSliderSwipper.module.scss'

export const MainSliderSwipper = (props: MainSliderSwipperProps) => {
  const { options } = props

  return (
    <div className={styles.MainSliderSwipper}>
      <Swiper
        slidesPerView={'auto'}
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        speed={6000}
        cubeEffect={{ slideShadows: false }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {options.map(option => (
          <SwiperSlide key={option.label} className={styles.swiperSlide}>
            <div className={styles.slider}>
              <Image src={option.src} alt={option.label} width={200} height={200} />
              <Icon icon={IconsEnum.Night} size={SizesEnum.M} />
              <Label
                label={option.label}
                font={FontsEnum.Text14}
                linesCount={2}
                textAlign={TextAlignEnum.Center}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

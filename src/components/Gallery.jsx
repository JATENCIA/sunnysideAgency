import Image from './Image'

import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg'
import milkBottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import sugarCubesMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'

import coneDesktop from '../assets/images/desktop/image-gallery-cone.jpg'
import milkBottlesDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import sugarCubesDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
  const images = [
    {
      desktop: milkBottlesDesktop,
      mobile: milkBottlesMobile
    },
    {
      desktop: orangeDesktop,
      mobile: orangeMobile
    },
    {
      desktop: coneDesktop,
      mobile: coneMobile
    },
    {
      desktop: sugarCubesDesktop,
      mobile: sugarCubesMobile
    }
  ]

  return (
    <div className='grid grid-cols-2  sm:grid-cols-4'>
      {images.map((image, index) => {
        return (
          <Image
            imgMobile={image.mobile}
            imgDesktop={image.desktop}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default Gallery

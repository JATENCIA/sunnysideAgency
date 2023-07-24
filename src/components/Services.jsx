import Image from './Image'
import Text from './Text'
import ImageText from './ImageText'

import eggImgMobile from '../assets/images/mobile/image-transform.jpg'
import eggImgDesktop from '../assets/images/desktop/image-transform.jpg'
import glassImgMobile from '../assets/images/mobile/image-stand-out.jpg'
import glassImgDesktop from '../assets/images/desktop/image-stand-out.jpg'
import grphicDesingMobile from '../assets/images/mobile/image-graphic-design.jpg'
import grphicDesingDesktop from '../assets/images/desktop/image-graphic-design.jpg'
import photographyMobile from '../assets/images/mobile/image-photography.jpg'
import photographyDesktop from '../assets/images/desktop/image-photography.jpg'

const Services = () => {
  const images = [
    {
      mobile: eggImgMobile,
      desktop: eggImgDesktop,
      title: 'Transform your brand',
      text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      color: 'bg-Yellow',
      orderImg: 'order-2',
      orderText: 'order-1'
    },
    {
      mobile: glassImgMobile,
      desktop: glassImgDesktop,
      title: 'Stand out to the right audience',
      text: ' Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ',
      color: 'bg-SoftRed',
      orderImg: 'order-3',
      orderText: 'order-4'
    }
  ]

  const imagesTexts = [
    {
      mobile: grphicDesingMobile,
      desktop: grphicDesingDesktop,
      order: 'order-5',
      title: 'Graphic design',
      text: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
    },
    {
      mobile: photographyMobile,
      desktop: photographyDesktop,
      order: 'order-6',
      title: ' Photography',
      text: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
    }
  ]

  return (
    <section className='tablet:grid tablet:grid-cols-2'>
      {images.map((image) => {
        return (
          <>
            <Image
              imgMobile={image.mobile}
              imgDesktop={image.desktop}
              key={image.mobile}
              order={image.orderImg}
            />
            <Text
              title={image.title}
              text={image.text}
              color={image.color}
              key={image.color}
              order={image.orderText}
            />
          </>
        )
      })}
      {imagesTexts.map((imageText) => {
        return (
          <ImageText
            title={imageText.title}
            text={imageText.text}
            imgMobile={imageText.mobile}
            imgDesktop={imageText.desktop}
            key={imageText.mobile}
            order={imageText.order}
          />
        )
      })}
    </section>
  )
}

export default Services

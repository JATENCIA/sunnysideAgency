import imgMobile from '../assets/images/mobile/image-header.jpg'
import imgDesktop from '../assets/images/desktop/image-header.jpg'
import arrow from '../assets/images/icon-arrow-down.svg'

const Main = () => {
  return (
    <section>
      <picture>
        <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt='Background header' />
      </picture>
      <p className='absolute font-Fraunces text-White text-center text-[40px] uppercase tracking-[6.25px] w-[327px] top-[144px] left-0 right-0 mx-auto sm:w-[600px]'>
        We are creatives
      </p>
      <img
        className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]'
        src={arrow}
        alt='icon arrow down'
      />
    </section>
  )
}

export default Main

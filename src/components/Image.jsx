const Image = ({ imgMobile, imgDesktop, order = '' }) => {
  return (
    <picture className={order}>
      <source media='(max-width: 639px)' srcSet={imgMobile} />
      <source media='(min-width: 640px)' srcSet={imgDesktop} />
      <img src={imgMobile} alt='Image services ' />
    </picture>
  )
}

export default Image

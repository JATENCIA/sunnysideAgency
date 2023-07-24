const Testimonial = ({ img, testimonial, name, position }) => {
  return (
    <div className='flex flex-col items-center text-center mb-16 '>
      <img
        className='w-[72px] p-1 rounded-full border border-gray-200 shadow'
        src={img}
        alt='photo'
      />
      <p className='my-8 font-Barlow text-VeryDarkGrayishBlue px-4 max-w-[400px]'>
        {testimonial}
      </p>
      <h3 className='font-Fraunces text-[18px] text-VeryDarkDesaturatedBlue'>
        {name}
      </h3>
      <p className='text-GrayishBlue font-Barlow text-[14px]  '>{position}</p>
    </div>
  )
}

export default Testimonial

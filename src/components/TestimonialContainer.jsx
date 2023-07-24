import Testimonial from './Testimonial'
import emilyPhoto from '../assets/images/image-emily.jpg'
import thomasPhoto from '../assets/images/image-thomas.jpg'
import jenniePhoto from '../assets/images/image-jennie.jpg'

const TestimonialContainer = () => {
  const objTestimonials = [
    {
      img: emilyPhoto,
      testimonial:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      position: 'Marketing Director'
    },
    {
      img: thomasPhoto,
      testimonial:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      position: 'Chief Operating Officer'
    },
    {
      img: jenniePhoto,
      testimonial:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      position: 'Business Owner'
    }
  ]

  return (
    <section className='bg-white pt-16'>
      <h2 className='text-center uppercase font-Fraunces mb-16 text-GrayishBlue tracking-wider lg:tracking-widest'>
        Client testimonials
      </h2>
      <div className='lg:flex lg:justify-center lg:gap-x-14 '>
        {objTestimonials.map((testimonial) => {
          return (
            <Testimonial
              img={testimonial.img}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              position={testimonial.position}
              key={testimonial.name}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TestimonialContainer

import Main from './components/Main'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Footer from './components/Footer'

import TestimonialContainer from './components/TestimonialContainer'
function App() {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
      <Header />
      <Main />
      <Services />
      <TestimonialContainer />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App

import logo from '../assets/images/logo.svg'
import NavBar from './NavBar'
const Header = () => {
  return (
    <header className='absolute w-full flex place-content-between px-6 py-8 font-Barlow'>
      <img src={logo} alt='Logo header' />
      <NavBar />
    </header>
  )
}

export default Header

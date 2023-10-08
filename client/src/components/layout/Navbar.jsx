import { Link } from "react-router-dom"
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <Link to='/'>
          <div className="logo">
            <img src="/assets/logonew.png" alt="" />
            <span>EcoSpace</span>
          </div>
        </Link>
        <div className="nav_links">
          <Link to='/'>
            Home
          </Link>
          <Link to='/astro-events'>
            Astronomical events
          </Link>
          <Link to='/eco-events'>
            Ecological events
          </Link>
          <Link to='/chatbot'>
            Chatbot
          </Link>
        </div>


        <div className="navmenu" onClick={() => setIsOpen(true)}>
          <BiMenu />
        </div>
      </div>
      <div className="mobile_menu"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(101%)' }}
      >
        <Link to='/' onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to='/astro-events' onClick={() => setIsOpen(false)}>
          Astronomical events
        </Link>
        <Link to='/eco-events' onClick={() => setIsOpen(false)}>
          Ecological events
        </Link>
        <Link to='/chatbot' onClick={() => setIsOpen(false)}>
          Chatbot
        </Link>

        <AiOutlineClose onClick={() => setIsOpen(false)} />
      </div>
    </nav>



  )
}

export default Navbar
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  const location = useLocation();
  
      if (location.pathname === '/login' || location.pathname === '/forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
          return null;
      }

  return (
    <div className='bg-gray-900 text-white'>
      <footer className="border-t py-3 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 mb-2">
          <Link to="https://twitter.com" target="_blank" className="py-1 px-2 rounded-full border border-blue-300 text-white hover:bg-blue-500"><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link to="https://linkedin.com" target="_blank" className="py-1 px-2 rounded-full border border-blue-300 text-white hover:bg-blue-500"><FontAwesomeIcon icon={faLinkedin} /></Link>
          <Link to="https://instagram.com" target="_blank" className="py-1 px-2 rounded-full border border-blue-300 text-white hover:bg-blue-500"><FontAwesomeIcon icon={faInstagram} /></Link>
        </div>
        <p>@2024 Ethan Carter. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer

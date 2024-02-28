import {Link} from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import "../header/header.css";



export default function Header() {
  return (
    <nav className="maiNav">
        <div className="logo">
            COFFEE
        </div>

            <div className="links">
                 <nav>
                    <ul className='navList'>
                        <li><Link to="/" className='linkss'>Home</Link></li>
                        <li><Link to="/about" className='linkss'>Coffee</Link></li>
                        <li><Link to="/contact" className='linkss'>Bakery</Link></li>
                         <li><Link to="/contact" className='linkss'>Shop</Link></li>
                        <li><Link to="/contact" className='linkss'>About</Link></li>
                    </ul>
                </nav>
             </div>

        <div className="search">
            <BsSearch/>
        </div>
    </nav>
  )
}

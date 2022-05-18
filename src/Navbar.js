import React from 'react';
import  {Link, Outlet}  from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                    Home
                    
                    </Link>
                </li>
                <li>
                    <Link to='/About'>
                    About
                    
                    </Link>
                </li>
                <li>
                    <Link to='/Services'>
                    Services
                    
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar
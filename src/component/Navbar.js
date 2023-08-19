import React from 'react'
import Logo from './pic/FoodyZone.png';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-main'>
            {/* <h2>Foody Zone</h2> */}
            <img src={Logo} alt='foody' className='logo'/>
            <input type='text' placeholder='Search items'/>
        </div>
        <div className='btn'>
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
        </div>
    </div>
  )
}

export default Navbar
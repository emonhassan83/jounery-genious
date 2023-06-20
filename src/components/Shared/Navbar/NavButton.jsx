import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const NavButton = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <Link to='/all-guides'>
          <div className='text-sm font-semibold px-6'>All Guides</div>
        </Link>
        <Link to='/bookings'>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          Bookings
        </div>
        </Link>
        <Link to='/about-us'>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          About Us
        </div>
        </Link>
        <Link to='/blog'>
        <div className='text-sm pl-6 pr-2 text-gray-600 font-semibold flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Blog</div>
          <div className='p-2 bg-pink-600 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default NavButton;

import Container from './Container';
import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-black/95 py-4 shadow-md">
      <Container>
        <div className='text-2xl font-bold flex justify-center text-prColor'>
        Food<span className='text-white'>tuck</span>

        </div>
    <div  className="flex items-center justify-between h-[54px]">
        <nav className="flex space-x-6">
          <Link href="/" className="text-white hover:text-prColor font-medium">Home</Link>
          <Link href="/Menu" className="text-white hover:text-prColor font-medium">Menu</Link>
          <Link href="/Blog" className="text-white hover:text-prColor font-medium">Blog</Link>
          <Link href="/Pages" className="text-white hover:text-prColor font-medium">Pages</Link>

          {/* About Dropdown (using CSS hover for this) */}
          <div className="relative group">
  <Link
    href="/"
    className="text-white hover:text-prColor font-medium flex items-center space-x-1"
  >
    <span>About</span>
    {/* Dropdown Icon (Custom CSS Triangle) */}
    <ChevronDownIcon className="w-4 h-4 text-white ml-1 group-hover:text-prColor" />
  </Link>
 
</div>

          <Link href="/Shop" className="text-white hover:text-prColor font-medium">Shop</Link>
          <Link href="/Contact" className="text-white hover:text-prColor font-medium">Contact</Link>
        </nav>

        {/* Right Side: Search Box and Handbag Icon */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative w-[310px] h-[54px]">
            <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-6 pr-6 text-white bg-transparent border border-prColor rounded-full"
            />
          </div>

          {/* Handbag Icon */}
          <ShoppingBagIcon className="w-6 h-6 text-white cursor-pointer hover:text-prColor" />
        </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

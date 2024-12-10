
import Container from './Container';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Otherpage = () => {
  return (
    <header className="bg-black/95 py-4 shadow-md">
      <Container className="flex items-center justify-between h-[54px]">

        <div className='text-2xl font-bold  text-prColor'>
          Food<span className='text-white'>tuck</span>

        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="text-white hover:text-prColor font-medium">Home</Link>
          <Link href="/Menu" className="text-white hover:text-prColor font-medium">Menu</Link>
          <Link href="/Blog" className="text-white hover:text-prColor font-medium">Blog</Link>
          <Link href="/Pages" className="text-white hover:text-prColor font-medium">Pages</Link>

          {/* About Dropdown (using CSS hover for this) */}
          <div className="relative group">
            <Link
              href="/About"
              className="text-white hover:text-prColor font-medium flex items-center space-x-1"
            >
              About

            </Link>

          </div>

          <Link href="/Shop" className="text-white hover:text-prColor font-medium">Shop</Link>
          <Link href="/Contact" className="text-white hover:text-prColor font-medium">Contact</Link>
        </nav>

        {/* Right Side: Search Box and Handbag Icon */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}

          <MagnifyingGlassIcon className=" text-white w-6 h-6" />

          <UserCircleIcon className=" text-white w-6 h-6" />

          {/* Handbag Icon */}
          <ShoppingBagIcon className="w-6 h-6 text-white " />
        </div>

      </Container>
    </header>
  );
};

export default Otherpage;

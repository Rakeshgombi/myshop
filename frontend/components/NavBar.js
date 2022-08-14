import React from 'react';
import Link from 'next/Link';


const NavBar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow">
        <div className="container mx-auto flex flex-wrap py-2 px-5 flex-col md:flex-row items-center">
          <Link href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src='logo.svg' className='w-8' alt='Logo' />
            <span className="ml-3 text-xl">My Shop</span>
          </a></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
            <Link href="/products"><a className="mr-5 hover:text-gray-900">Products</a></Link>
            <Link href="/contact"><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>
            <Link href="/about"><a className="mr-5 hover:text-gray-900">About Us</a></Link>
          </nav>
          <button className="mt-2 md:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 md:py-2 md:px-3 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-base">Button</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
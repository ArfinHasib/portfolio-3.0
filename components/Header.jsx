'use client';

import React, { useState, useEffect } from 'react';

// comps
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
   return (
      <div className='container mx-auto'>
         <div className='flex justify-between items-center'>
            <Logo />
            <div className='flex items-center gap-x-6'>
               {/* nav */}
               <Nav />
               <ThemeToggler />
               {/* mobile menu */}
               <div className='xl:hidden'>
                  <MobileNav />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;

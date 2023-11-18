import Link from 'next/link';

import { motion } from 'framer-motion';

// next hooks
import { usePathname } from 'next/navigation';

const links = [
   { path: '/', name: 'home' },
   { path: '/projects', name: 'my projects' },
   { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
   const path = usePathname();

   return (
      <div className={`${containerStyles}`}>
         {links.map((link, index) => {
            return (
               <Link
                  key={index}
                  href={link.path}
                  className={`capitalize ${linkStyles}`}
               >
                  {link.path === path && (
                     <motion.span
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                     />
                  )}
                  {link.name}
               </Link>
            );
         })}
      </div>
   );
};

export default Nav;

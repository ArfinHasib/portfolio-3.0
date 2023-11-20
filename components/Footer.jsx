import Socials from './Socials';

const Footer = () => {
   return (
      <footer className='bg-secondary dark:bg-tertiary py-12'>
         <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-between'>
               {/* socials */}
               <Socials
                  containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                  iconStyles='text-primary dark:text-white/40 text-[70px] hover:text-white dark:hover:text-primary transition-all'
               />
               {/* copyright */}
               <div className='text-muted-foreground'>
                  Copyright &copy; Arfin Hasib. All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

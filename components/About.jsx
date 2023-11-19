import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

import {
   User2,
   MailIcon,
   HomeIcon,
   PhoneCall,
   GraduationCap,
   Calendar,
   Briefcase,
} from 'lucide-react';

const infoData = [
   {
      icon: <User2 size={20} />,
      text: 'Arfin Hasib',
   },
   {
      icon: <PhoneCall size={20} />,
      text: '+880 1781721375',
   },
   {
      icon: <MailIcon size={20} />,
      text: 'arfinhasib@gmail.com',
   },
   {
      icon: <Calendar size={20} />,
      text: 'Born on 10 Mar, 1996',
   },
   {
      icon: <GraduationCap size={20} />,
      text: 'Master on Computer Science',
   },
   {
      icon: <HomeIcon size={20} />,
      text: '321, Blue Avenue, Dhaka, BD',
   },
];

const qualificationData = [
   {
      title: 'education',
      data: [
         {
            university: 'University of Dhaka',
            qualification: 'Bachelore of Science',
            years: '2016 - 2020',
         },
         {
            university: 'University of Dhaka',
            qualification: 'Master of Science',
            years: '2021 - 2022',
         },
         {
            university: 'University of Dhaka',
            qualification: 'Ph.D in Computer Science',
            years: '2023-2024',
         },
      ],
   },
   {
      title: 'experience',
      data: [
         {
            company: 'Robi Inc',
            qualification: 'Software Engineer',
            years: '2020 - 2022',
         },
         {
            company: 'Upwork',
            qualification: 'Freelance Web Developer',
            years: '2016 - Present',
         },
         {
            company: 'Fiverr',
            qualification: 'Freelance Frontend Developer',
            years: '2018 - Present',
         },
      ],
   },
];

const skillData = [
   {
      title: 'skills',
      data: [
         {
            name: 'HTML, CSS',
         },
         {
            name: 'UI/UX Design',
         },
         {
            name: 'Front-end Development',
         },
         {
            name: 'Webflow, Framer, Shopify',
         },
      ],
   },
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/notion.svg',
         },
         {
            imgPath: '/about/wordpress.svg',
         },
      ],
   },
];

const About = () => {
   const getData = (arr, title) => {
      return arr.find((item) => item.title === title);
   };

   return (
      <section className='xl:h-[860px] pb-12 xl:py-24'>
         <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
               About Me
            </h2>
            <div className='flex flex-col xl:flex-row'>
               {/* image */}
               <div className='hidden xl:flex flex-1 relative'>
                  <DevImg
                     containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                     imgSrc='/about/developer.png'
                  />
               </div>
               {/* tabs */}
               <div className='flex-1'>
                  <Tabs defaultValue='personal'>
                     <TabsList>
                        <TabsTrigger>Personal Info</TabsTrigger>
                        <TabsTrigger>Qualifications</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                     </TabsList>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;

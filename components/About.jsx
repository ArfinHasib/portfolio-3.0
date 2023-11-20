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
            role: 'Software Engineer',
            years: '2020 - 2022',
         },
         {
            company: 'Upwork',
            role: 'Freelance Web Developer',
            years: '2016 - Present',
         },
         {
            company: 'Fiverr',
            role: 'Freelance Frontend Developer',
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
                     <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                        <TabsTrigger
                           className='w-[162px] xl:w-auto'
                           value='personal'
                        >
                           Personal Info
                        </TabsTrigger>

                        <TabsTrigger
                           className='w-[162px] xl:w-auto'
                           value='qualifications'
                        >
                           Qualifications
                        </TabsTrigger>
                        <TabsTrigger
                           className='w-[162px] xl:w-auto'
                           value='skills'
                        >
                           Skills
                        </TabsTrigger>
                     </TabsList>
                     {/* tabs content */}
                     <div className='text-lg mt-12 xl:mt-8'>
                        <TabsContent value='personal'>
                           <div className='text-center xl:text-left'>
                              <h3 className='h3 mb-4'>
                                 Umatched Service Quality for Over 10 Years
                              </h3>
                              <p className='subtitle max-w-xl max-auto xl:mx-0'>
                                 I specialize in crafting intuitive websites
                                 with cutting-edge technology, delivering
                                 dynamic and engaging user experiences.
                              </p>
                              {/* icons */}
                              <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                 {infoData.map((item, index) => {
                                    return (
                                       <div
                                          className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                          key={index}
                                       >
                                          <div className='text-primary'>
                                             {item.icon}
                                          </div>
                                          <div>{item.text}</div>
                                       </div>
                                    );
                                 })}
                              </div>
                              {/* languages */}
                              <div className='flex flex-col gap-y-2'>
                                 <div className='text-primary'>
                                    Language Skill
                                 </div>
                                 <div className='border-b border-border'></div>
                                 <div>Enlish, Bengali, Hindi, Spanish</div>
                              </div>
                           </div>
                        </TabsContent>
                        {/* Qualifications */}
                        <TabsContent value='qualifications'>
                           <div>
                              <h3 className='h3 mb-8 text-center xl:text-left'>
                                 My Awesome Journey
                              </h3>
                              {/* experience & education wrapper */}
                              <div className='grid md:grid-cols-2 gap-y-8'>
                                 {/* experience */}
                                 <div className='flex flex-col gap-y-6'>
                                    <div className='flex gap-x-4 items-center text-[22px] text-primary pb-5'>
                                       <Briefcase />
                                       <h4 className='capitalize font-medium'>
                                          {
                                             getData(
                                                qualificationData,
                                                'experience'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* lists */}
                                    <div className='flex flex-col gap-y-8'>
                                       {getData(
                                          qualificationData,
                                          'experience'
                                       ).data.map((item, index) => {
                                          const { company, role, years } = item;
                                          return (
                                             <div
                                                className='flex gap-x-8 group'
                                                key={index}
                                             >
                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                   <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                </div>
                                                <div>
                                                   <div className='font-semibold text-xl leading-none mb-2'>
                                                      {company}
                                                   </div>
                                                   <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                      {role}
                                                   </div>
                                                   <div className='text-base font-medium'>
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          );
                                       })}
                                    </div>
                                 </div>
                                 {/* education */}
                                 <div className='flex flex-col gap-y-6'>
                                    <div className='flex gap-x-4 items-center text-[22px] text-primary pb-5'>
                                       <GraduationCap size={28} />
                                       <h4 className='capitalize font-medium'>
                                          {
                                             getData(
                                                qualificationData,
                                                'education'
                                             ).title
                                          }
                                       </h4>
                                    </div>
                                    {/* lists */}
                                    <div className='flex flex-col gap-y-8'>
                                       {getData(
                                          qualificationData,
                                          'education'
                                       ).data.map((item, index) => {
                                          const {
                                             university,
                                             qualification,
                                             years,
                                          } = item;
                                          return (
                                             <div
                                                className='flex gap-x-8 group'
                                                key={index}
                                             >
                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                   <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                </div>
                                                <div>
                                                   <div className='font-semibold text-xl leading-none mb-2'>
                                                      {university}
                                                   </div>
                                                   <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                      {qualification}
                                                   </div>
                                                   <div className='text-base font-medium'>
                                                      {years}
                                                   </div>
                                                </div>
                                             </div>
                                          );
                                       })}
                                    </div>
                                 </div>
                                 {/* education */}
                                 <div>education</div>
                              </div>
                           </div>
                        </TabsContent>
                        <TabsContent value='skills'>
                           <div className='text-center xl:text-left'>
                              <h3 className='h3 mb-8'>What I Use Everyday</h3>
                              {/* skills */}
                              <div className='mb-16'>
                                 <h4 className='text-xl font-semibold mb-2'>
                                    Skills
                                 </h4>
                                 <div className='border-b border-border mb-4'></div>
                                 {/* skills list */}
                                 <div>
                                    {getData(skillData, 'skills').data.map(
                                       (item, index) => {
                                          const { name } = item;
                                          return (
                                             <div
                                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                                key={index}
                                             >
                                                <div className='font-medium'>
                                                   {name}
                                                </div>
                                             </div>
                                          );
                                       }
                                    )}
                                 </div>
                              </div>
                              {/* tools */}
                              <div>
                                 <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                    Tools
                                 </h4>
                                 <div className='border-b border-border mb-4' />
                                 {/* todo list */}
                                 <div className='flex gap-x-8 justify-center xl:justify-start'>
                                    {getData(skillData, 'tools').data.map(
                                       (item, index) => {
                                          const { imgPath } = item;
                                          return (
                                             <div key={index}>
                                                <Image
                                                   src={imgPath}
                                                   width={48}
                                                   height={48}
                                                   alt=''
                                                   priority
                                                />
                                             </div>
                                          );
                                       }
                                    )}
                                 </div>
                              </div>
                           </div>
                        </TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;

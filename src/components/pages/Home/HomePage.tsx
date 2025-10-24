import Banner from '@/components/modules/home/Banner';
import CareerStates from '@/components/modules/home/CareerStats';
import Expertise from '@/components/modules/home/Expertise';
import Featured from '@/components/modules/home/Featured';
import GetInTouch from '@/components/modules/home/GetInTouch';
import SkillsSet from '@/components/modules/home/SkillsSet';
import React from 'react';

const HomePage = () => {
  return <div className='flex flex-col md:flex-row items-start gap-6'>
    <div id="main" className='space-y-6 w-full md:w-[70%] '>
      <Banner />
      <CareerStates />
      <Featured />
    </div>


    <div id="right-side" className='space-y-6 w-full md:w-[30%]'>
      <SkillsSet />
      <Expertise />
      <GetInTouch />
    </div>
  </div>;
};

export default HomePage;

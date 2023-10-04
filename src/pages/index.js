import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';

export const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <Fragment>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne} />
      </Fragment>
   );
};


























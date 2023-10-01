import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

export const Home = () => {
   const [isOpen, setIsOpen] = useState(false);

   // функція toggle змінює стан змінної isOpen на протилежний стан
   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <Fragment>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
      </Fragment>
   );
};


























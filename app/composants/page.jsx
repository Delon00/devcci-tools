'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import './composants.css';
import { BiSolidComponent } from 'react-icons/bi';
import { IoArrowForward, IoClose } from "react-icons/io5";


import guapo from '@/public/guapo.png';

import Avatar from './pages/avatar';
import Button from './pages/button';
import Card from './pages/card';
import Dropdown from './pages/dropdown';
import Form from './pages/form';
import Icon from './pages/icons';
import Modal from './pages/modal';

export default function Composants() {
  const [selectedComponent, setSelectedComponent] = useState('avatar');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  const toogleSidebarOn = () => {
    setIsSidebarOpen(true);
  };

  const toogleSidebarOff = () => {
    setIsSidebarOpen(false);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'avatar':
        return <Avatar />;
      case 'button':
        return <Button />;
      case 'card':
        return <Card />;
      case 'dropdown':
        return <Dropdown />;
      case 'form':
        return <Form />;
      case 'icons':
        return <Icon />;
      case 'modal':
        return <Modal />;
      default:
        return null;
    }
  };

  return (
    <main className="main-composant">
      <Navbar />
      <div className="hero-composant">
        <div className="hero-composant-section">
          <div className='bulle1'></div>
          <div className='bulle2'></div>
          <h1>Composants</h1>
        </div>
      </div>
      <div className="composant-section1">
        <div className="sidebar">
          <div className='flex justify-between'>
            <h3 className="flex items-center"><BiSolidComponent /> Composants</h3>
            <span className='close-btn' onClick={toogleSidebarOff}><IoClose/></span>
          </div>

          <ul>
            <li className={selectedComponent === 'avatar' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('avatar')}>Avatar</button>
            </li>
            <li className={selectedComponent === 'button' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('button')}>Button</button>
            </li>
            <li className={selectedComponent === 'card' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('card')}>Card</button>
            </li>
            <li className={selectedComponent === 'dropdown' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('dropdown')}>Dropdown</button>
            </li>
            <li className={selectedComponent === 'form' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('form')}>Form</button>
            </li>
            <li className={selectedComponent === 'icon' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('icons')}>Icon</button>
            </li>
            <li className={selectedComponent === 'modal' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('modal')}>Modal</button>
            </li>
          </ul>
        </div>
        <div className='sidebar-responsive-btn' onClick={toogleSidebarOn}><IoArrowForward /></div>
        <div className="content-section">{renderComponent()}</div>
      </div>
      <div className={`sidebar-responsive ${isSidebarOpen ? 'active' : ''}`}>

        <h3 className="flex items-center my-2"><BiSolidComponent /> Composants</h3>
        <ul>
            <li className={selectedComponent === 'avatar' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('avatar')}>Avatar</button>
            </li>
            <li className={selectedComponent === 'button' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('button')}>Button</button>
            </li>
            <li className={selectedComponent === 'card' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('card')}>Card</button>
            </li>
            <li className={selectedComponent === 'dropdown' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('dropdown')}>Dropdown</button>
            </li>
            <li className={selectedComponent === 'form' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('form')}>Form</button>
            </li>
            <li className={selectedComponent === 'icon' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('icon')}>Icon</button>
            </li>
            <li className={selectedComponent === 'modal' ? 'current my-2 ps-2' : 'my-2 ps-2'}>
              <button onClick={() => handleComponentChange('modal')}>Modal</button>
            </li>
          </ul>
      </div>
    </main>
  );
}

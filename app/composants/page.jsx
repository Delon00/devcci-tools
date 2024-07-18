'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar/navbar';
import './composants.css';
import { BiSolidComponent } from 'react-icons/bi';

// Importez votre image
import guapo from '@/public/guapo.png';

// Importez les composants spécifiques
import Avatar from './pages/avatar';
import Button from './pages/button';
import Card from './pages/card';
import Dropdown from './pages/dropdown';
import Form from './pages/form';
import Icon from './pages/icon';
import Modal from './pages/modal';

export default function Composants() {
  // État pour suivre le composant actuellement affiché
  const [selectedComponent, setSelectedComponent] = useState('avatar');

  // Fonction pour mettre à jour le composant sélectionné
  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  // Sélectionner le composant à afficher en fonction de selectedComponent
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
      case 'icon':
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
          <h3 className="flex items-center"><BiSolidComponent /> Composants</h3>
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
              <button onClick={() => handleComponentChange('icon')}>Icon</button>
            </li>
            <li className={selectedComponent === 'modal' ? 'current' : ''}>
              <button onClick={() => handleComponentChange('modal')}>Modal</button>
            </li>
          </ul>
        </div>
        <div className='sidebar-responsive'></div>
        <div className="content-section">{renderComponent()}</div>
      </div>
    </main>
  );
}

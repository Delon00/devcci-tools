/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer"
import CardFramework from "@/components/cards/cardFramework"
import { LuCopy } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import AOS from "aos";
import { useState, useEffect } from "react";
import Link from "next/link";
import 'aos/dist/aos.css';


// ---------------------IMAGES--------------------------------
import guapo from '@/public/guapo.png';
import mobile from '@/public/mobile.png';
import formulaire from '@/public/formlog.png';
import tabs from '@/public/tabs.png';
import card from '@/public/card.png';
import nextjs from '@/public/nextjs.png';
import reactjs from '@/public/react.png';
import expo from '@/public/expo.png';
import laravel from '@/public/laravel.png';
import flutter from '@/public/flutter.png';
import electron from '@/public/electron.png';
// -----------------------------------------------------------
export default function Home() {
  useEffect(() => {AOS.init();}, []);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npm install devcci-tools');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {console.error('Échec de la copie : ', err);}
  }
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div  className="main-hero">
        <div  className="texts-hero" >
          <div className="circlebubble"></div>
          <div className="circlebubble2"></div>
          <h1>Devcci tools</h1>
          <h2>Augmentez votre productivité grâce à nos composants,docs et astuces avancés.</h2>
          <p>Docs+, composants, astuces, débogage, forum</p>
          <div className="terminal">
            <p>$ ~<span> npm install devcci-tools</span></p>
            <span className="copy-icon" onClick={handleCopy}>
              {copied ? <IoMdCheckmark /> : <LuCopy />}
            </span>
          </div>
        </div>
        <div className="images-hero">
          <div className="guapo-store"><Image src={guapo} alt="guapo store"/></div>
          <div className="mobile"><Image src={mobile} alt="guapo store"/></div>
          <div className="formulaire"><Image src={formulaire} alt="edy-ia"/></div>
          <div className="tabs-img"><Image src={tabs} alt="edy-ia"/></div>
          <div className="card-img"><Image src={card} alt="card"/></div>
          <div className="chat date-picker chat-start"><div className="chat-bubble">Hey Delon j&apos;aurais besoin<br />d'astuces pour mon projet electron js</div> </div>
        </div>
      </div>

      <div className="section2">
        <div className="circlePosition"></div>
        <div className="circlePosition2"></div>
        <div data-aos="fade-up" className="texts-section2">
          <h1>Choisissez votre <span>language</span>  ou <span>framework</span> et documentez-vous. </h1>
          <p>Sélectionnez votre outil de prédilection et accédez à des ressources variées pour approfondir vos connaissances et maîtriser les technologies de pointe.</p>
        </div>
        <div className="cards-section2-container">
          <CardFramework>
            <Link className="card-link" href="/"></Link>
            <Image className="logo-section2" src={nextjs} alt="nextjs"/>
            <div className="card-texts">
              <h2>NextJs</h2>
              <p>Découvrez des outils et des astuces pratiques pour optimiser le développement avec Next.js.</p>
            </div>
          </CardFramework>
          <CardFramework>
            <Link className="card-link" href="/"></Link>
            <Image className="logo-section2" src={reactjs} alt="nextjs"/>
            <div className="card-texts">
              <h2 className="text-[#00d7fe]">React</h2>
              <p>Explorez des outils et des astuces pratiques pour le framework avec React</p>
            </div>
          </CardFramework>
          <CardFramework>
            <a className="card-link" href="/"></a>
            <Image className="logo-section2" src={expo} alt="nextjs"/>
            <div className="card-texts">
              <h2>Expo</h2>
              <p>Découvrez de nouvelles astuces pour simplifier le développement de vos appli. mobile avec Expo.</p>
            </div>
          </CardFramework>
          <CardFramework>
            <a className="card-link" href="/"></a>
            <Image className="logo-section2" src={laravel} alt="nextjs"/>
            <div className="card-texts">
            <h2 className="text-red-500">Laravel</h2>
              <p>Explorez des conseils pratiques pour améliorer votre expérience de développement avec Laravel.</p>
            </div>
          </CardFramework>
          <CardFramework>
            <a className="card-link" href="/"></a>
            <Image className="logo-section2" src={flutter} alt="nextjs"/>
            <div className="card-texts">
            <h2 className="text-[#00b2fe]">Flutter</h2>
              <p>Découvrez de nouvelles astuces pour simplifier le développement de vos appli. mobile avec Flutter.</p>
            </div>
          </CardFramework>
          <CardFramework>
            <a className="card-link" href="/"></a>
            <Image className="logo-section2" src={electron} alt="nextjs"/>
            <div className="card-texts">
            <h2 >Electron</h2>
              <p>Découvrez de nouvelles astuces pour développer des logiciel pour windows et mac</p>
            </div>
          </CardFramework>
        </div>

      </div>
      <Footer/>
    </main>
  );
}

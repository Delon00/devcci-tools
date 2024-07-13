/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "@/components/navbar/navbar"
import CardFramework from "@/components/cards/cardFramework"




// ---------------------IMAGES--------------------------------
import guapo from '@/public/guapo.png';
import vscode from '@/public/vscode.png';
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
export default function composants() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      
    </main>
  );
}

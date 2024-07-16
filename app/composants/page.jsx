/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Navbar from "@/components/navbar/navbar"
import CardFramework from "@/components/cards/cardFramework"




// ---------------------IMAGES--------------------------------
import guapo from '@/public/guapo.png';
// -----------------------------------------------------------
export default function composants() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      
    </main>
  );
}

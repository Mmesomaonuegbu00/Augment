'use client';
import Certificate from "@/components/Certificate/Certificate";
import Faculty from "@/components/Faculty/Faculty";
import Faq from "@/components/FAQ/Faq";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Program from "@/components/Programs/Program";
import Ready from "@/components/Ready/Ready";
import Reveiw from "@/components/Reveiw/Reveiw";
import Stories from "@/components/Stories/Stories";
import Video from "@/components/Video/Video";
import Why from "@/components/Why/Why";
import { useState } from "react";


export default function Home() {

  const [playState, setPlayState] = useState(false);


  return (
  <div className="overflow-hidden">
    <Hero/>
    <Featured/>
    <Program/>
    <Faculty/>
    <Why/>
    <Reveiw/>
    <Certificate setPlayState={setPlayState} />
    <Video  playState={playState} setPlayState={setPlayState}/>
    <Stories/>
    <Ready/>
    <Faq/>
    <Footer/>
  </div>
  );
}

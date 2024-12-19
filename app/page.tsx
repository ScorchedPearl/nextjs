'use client'
import { Cards } from "../components/modif/cards";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import Header from "../components/self/header";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "Write",
    },
    {
      text: "Awesome",
    },
    {
      text: "Blogs",
    },
    {
      text: "with",
    },
    {
      text: "Pearl",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  return (
    <div>
      <Header></Header>
      
      <BackgroundBeamsWithCollision>
        <div>
        <div> <TypewriterEffect words={words} /></div>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Multi-Functional.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Multi-Functional.</span>
          </div>
        </div>
      </h2>
      </div>
    </BackgroundBeamsWithCollision>
    <Cards></Cards>
  </div> 
  );
}

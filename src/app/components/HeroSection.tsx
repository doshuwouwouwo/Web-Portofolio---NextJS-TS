"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import { FiDownload } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 font-extrabold text-4xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-blue-500">Hello, I'm {""}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Firdaus",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "WengDev Pemula",
                1000,
                "HengkerTzy",
                1000,
                "Unemployed",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quam hic distinctio cupiditate, nulla sed. Autem repellat fugit maiores recusandae!</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center justify-center px-6 py-3 rounded-full w-full sm:w-fit bg-white hover:bg-transparent hover:text-white text-black border border-white transform hover:scale-110 transition duration-300 ease-in-out">
              Contact Me
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-white hover:text-black border border-white transform hover:scale-110 transition duration-300 ease-in-out">
              Download CV <FiDownload />
            </button>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-24 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/firdaus.png" alt="Firdaus" width={300} height={200} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}

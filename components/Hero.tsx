"use client";
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section
      id="home-section"
      className="max-container relative padding-container flex flex-col flexCenter gap-20 py-10 pb-10 md:gap-28 lg:py-20 lg:flex-row z-0 m-auto bg-white text-black"
    >
      {/* Soft rose glow in background */}
      <span className="absolute top-64 left-44 h-[144px] w-[777px] bg-rose-300 rounded-full shadow-lg blur-[7rem] -z-10"></span>

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col pt-16 m-auto justify-center">
        <h4 className="text-lg font-semibold text-gray-700">Hi, I&apos;m</h4>
        <h1 className="text-4xl lg:text-6xl font-bold text-black">
          Saifeddine <span className="text-rose-600">Douidy</span>
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium mt-2 capitalize">
          Passionate about{' '}
          <span className="text-rose-600">
            <Typewriter
              words={['Data Science', 'Big Data', 'AI', 'Cloud Computing']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-gray-700">
          Engineering student in Big Data and Artificial Intelligence at ENSA El Jadida. I&apos;m driven by a deep interest in harnessing data to solve real-world problems. Experienced in backend systems, data pipelines, and cloud infrastructure, with a focus on delivering impactful solutions through innovation and teamwork.
        </p>
        <div className="flexStart gap-1 pt-6">
          <Button
            type="button"
            title="Download CV"
            icon=""
            variant="btn_dark_rounded"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block">
        <Image
          src="/saif_id.jpg"
          width={350}
          height={350}
          className="rounded-2xl shadow-md"
          alt="Saifeddine Douidy"
        />
      </div>

      <div className="block lg:hidden">
        <Image
          src="/saif_id.jpg"
          width={350}
          height={350}
          className="rounded-2xl shadow-md"
          alt="Saifeddine Douidy"
        />
      </div>
    </section>
  );
};

export default Hero;

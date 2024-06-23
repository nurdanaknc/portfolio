import Link from 'next/link';
import react, { useEffect, useState } from 'react';
import { LuHome, LuMoon, LuSunDim } from 'react-icons/lu';

export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col mb-10 justify-center">
      <Link href='/' className="text-xl sm:text-2xl font-bold">Nurdan Akıncı</Link>
      <div className="flex flex-row justify-between items-center">
        <div className=" text-xs sm:text-base font-light">Frontend Developer</div>
        <div className="flex flex-wrap gap-2 sm:gap-7 text-center items-center">

         
          <Link href="/about" className=" text-xs sm:text-base font-light">about</Link>
          <Link href="/posts" className="text-xs  sm:text-base font-light">posts</Link>
          <Link href="/projects" className="text-xs  sm:text-base font-light">projects</Link>
          <button onClick={toggleDarkMode}>
            {(isDarkMode) ? (
              <LuSunDim className="w-9 h-9 p-2 hover:bg-[#FFF3C8] dark:hover:bg-[#4F4F4F] rounded-full " />
             
            ) : (
              <LuMoon className="w-9 h-9 p-2 hover:bg-[#FFF3C8] dark:hover:bg-[#4F4F4F] rounded-full" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
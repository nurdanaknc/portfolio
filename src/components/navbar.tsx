import react, { useEffect, useState } from 'react';
import { LuSunDim } from 'react-icons/lu';

export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    return(
        <div className="flex flex-col mb-10">
        <a href='/' className="text-2xl font-bold">Nurdan Akıncı</a>
        <div className="flex flex-row justify-between">
          <div className=" text-base font-light">Frontend Developer</div>
          <div className="flex flex-row gap-7 text-center items-center">
            <a href="/about" className="text-base font-light">about</a>
            <a href="/posts" className="text-base font-light">posts</a>
            <a href="#" className="text-base font-light">project</a>
            <button onClick={toggleDarkMode}>
                        <LuSunDim className="w-6 h-6" />
                    </button>
          </div>
        </div>
      </div>
    );
}
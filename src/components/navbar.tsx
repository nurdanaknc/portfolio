import react from 'react';
import { LuSunDim } from 'react-icons/lu';

export default function Navbar() {
    return(
        <div className="flex flex-col mb-10">
        <a href='/' className="text-2xl font-bold">Nurdan Akıncı</a>
        <div className="flex flex-row justify-between">
          <div className=" text-base font-light">Frontend Developer</div>
          <div className="flex flex-row gap-7 text-center items-center">
            <a href="/about" className="text-base font-light">about</a>
            <a href="#" className="text-base font-light">posts</a>
            <a href="#" className="text-base font-light">project</a>
            <a href="#" ><LuSunDim className=" w-6 h-6"/></a>
          </div>
        </div>
      </div>
    );
}
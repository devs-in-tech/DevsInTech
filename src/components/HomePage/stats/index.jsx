import React, { useState, useEffect } from 'react';
import img from '../../../assets/Team/Developer.jpg';
import Image from 'next/image';

const Stats = ({ stats }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className='flex space-x-6 items-center justify-center'>
      {
        stats &&
        stats.map((data, index) => {
          return (
            <div 
            key={index}
            className="block 
            w-[24rem] 
            h-[10rem] 
            p-6 
            bg-gradient-to-r from-indigo-800 to-purple-500 
            border 
            border-gray-200 
            rounded-lg 
            shadow 
            hover:bg-[#6B3183] 
            items-center 
            justify-center 
            text-center
            hover:translate-y-2
            transition-transform
            mt-4
            mb-4
            ">
              <h2 className="mb-2 text-5xl font-bold tracking-tight text-white dark:text-white text-center">
              {count > data.number ? data.number : count}+
              </h2>
              <p className="font-bold text-gray-400 text-2xl mt-5 text-center">{data.name}</p>
            </div>
          )
        })
      }
    </section>

  );
};

export default Stats;

import React, { useState, useEffect } from 'react';

const Stats = ({ stats }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto bg-[#13161B] md:w-full w-fit my-5 md:my-0 rounded-lg">
        <div className="flex flex-wrap -m-4 text-center">
          {stats &&
            stats.map((data, index) => {
              return (
                <div key={index} className="p-4 sm:w-1/3 w-full">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF008A] to-[#6100FF]">
                    {count > data.number ? data.number : count}+
                  </h2>
                  <p className="leading-relaxed text-white mt-2">{data.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

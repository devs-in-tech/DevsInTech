const Stats = ({ stats }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {stats &&
            stats.map((data, index) => {
              return (
                <div key={index} className="p-4 sm:w-1/3 w-full">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF008A] to-[#6100FF]">
                    {data.number}+
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

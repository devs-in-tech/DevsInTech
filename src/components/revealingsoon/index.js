const Revealingsoon = () => {
  return (
    <>
      <div class="relative w-full flex items-center justify-center h-screen top-[-100px] text-center">
        <div class="flex flex-col justify-center text-white w-full ">
          <h1 class="text-5xl">
            Revealing <b>SOON!</b>
          </h1>
          <p className="mt-3">Stay tuned!!!</p>

          <div class="mt-10 mb-5">
            <div class="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
              <div
                class="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revealingsoon;

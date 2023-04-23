const Header = ({ name }) => {
  return (
    <>
      <div className="w-full flex justify-center text-center">
        <h1 className="sm:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-purple-400">
          {name}
        </h1>
      </div>
    </>
  );
};

export default Header;

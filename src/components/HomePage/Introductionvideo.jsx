const Introductionvideo = ({ embedLink }) => {
  return (
    <div className=" w-full md:w-1/2 m-auto h-96 my-14">
      <iframe
        src={embedLink}
        title="YouTube video player"
        className="w-full h-full rounded-xl"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Introductionvideo;

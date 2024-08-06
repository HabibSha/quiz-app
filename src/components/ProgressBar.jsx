const ProgressBar = () => {
  return (
    <article className="bg-white px-3 sm:px-6 py-2 rounded-md flex items-center justify-center gap-3 sm:gap-6">
      <div>
        <button className="flex-shrink-0">Prev</button>
      </div>
      <div className="w-[82%] bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-400 h-2 rounded-full w-[40%]"
          // style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex-shrink-0">
        <button className="button-style2">Next Question</button>
      </div>
    </article>
  );
};

export default ProgressBar;

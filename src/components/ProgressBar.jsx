const ProgressBar = () => {
  return (
    <article className="w-full bg-white px-6 py-2 rounded-md flex items-center justify-center gap-6">
      <div>
        <button className="max-w-[17.5%]">Prev</button>
      </div>
      <div className="w-[82%] bg-gray-200 rounded-full h-2">
        <div
          className="bg-green-400 h-2 rounded-full w-[40%]"
          // style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div>
        <button className="button-style2 max-w-[17.5%]">Next Question</button>
      </div>
    </article>
  );
};

export default ProgressBar;

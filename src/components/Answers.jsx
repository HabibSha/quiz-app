const Answers = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="bg-gray-200 px-5 py-4 flex items-center space-x-2 mb-3 cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-[14px] w-[14px]cursor-pointer text-black"
          style={{ outline: "none", boxShadow: "none" }}
        />
        <span className="text-black font-semibold">Pick the first answer</span>
      </label>
      <label className="bg-gray-200 px-5 py-4 flex items-center space-x-2 mb-3 cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-[14px] w-[14px] cursor-pointer text-black"
          style={{ outline: "none", boxShadow: "none" }}
        />
        <span className="text-black font-semibold">
          I agree to the terms & conditions
        </span>
      </label>
    </div>
  );
};

export default Answers;

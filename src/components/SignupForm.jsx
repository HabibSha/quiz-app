const SignupForm = () => {
  return (
    <>
      <form className="w-full bg-colorBlueLight p-8 rounded-md">
        <h2 className="text-[24px] font-semibold text-center mb-10">
          SignUp to Play Quiz
        </h2>
        <div>
          <input type="text" placeholder="Username" className="input-style" />
        </div>
        <div>
          <input type="email" placeholder="Email" className="input-style" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            className="input-style"
          />
        </div>
        <div>
          <input type="checkbox" /> <span>I agree to terms & conditions</span>
        </div>
        <div>
          <button className="button-style">SIGN UP</button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;

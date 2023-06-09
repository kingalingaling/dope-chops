import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/authService";
import googleLogo from "../assets/icons/google.png";
import signInImage from "../assets/images/sign-in.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Sign In Function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin");
    } catch (error) {
      console.error("Login failed", error);
      setError(true);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-full text-white">
      {/* Left column container with background */}
      <div className="g-6 flex-col md:flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src={signInImage}
            className="w-3/4 lg:w-3/4 mx-auto"
            alt="Sample image"
          />
        </div>

        {/* Right column container */}
        <div className="mb-12 md:mb-0 md:w-8/12 p-4 md:p-0 lg:w-5/12 lg:pr-6 xl:w-5/12">
          <form onSubmit={handleLogin}>
            {/* Sign in section */}
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-0 mr-4 text-lg">Sign in with</p>

              {/*  Google  */}
              {/* <button
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-white uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca]"
                onClick={() => signInWithGoogle()}
              >
                <img className='w-auto h-full' src={googleLogo} alt="" />
              </button> */}
              <div
                className="flex justify-center items-center mx-1 h-9 w-9 rounded-full bg-white uppercase cursor-pointer leading-normal shadow-[0_4px_9px_-4px_#3b71ca]"
                onClick={() => signInWithGoogle()}
              >
                <img className="w-5 h-5" src={googleLogo} alt="" />
              </div>
            </div>

            {/* Separator between social media sign in and email/password sign in */}
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                Or
              </p>
            </div>

            {/* Error Field */}
            {error && (
              <p className="text-xs mb-2 text-red-400">
                There seems to be an error with your login credentials. Please
                check them again or contact the database admin for further
                instructions
              </p>
            )}
            {/* Email input */}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-black/20 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-transparent transition-all duration-200 ease-out"
              >
                Email address
              </label>
            </div>

            {/* Password input */}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-black/20 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-transparent transition-all duration-200 ease-out "
              >
                Password
              </label>
            </div>

            {/* Login button */}
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

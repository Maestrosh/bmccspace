import { tw } from "twind";

export default function LoginPage() {
  return (
    <>
        <div className={tw`bg-gray-200 h-screen flex flex-col items-center justify-center`}>

        <header className={tw`text-center`}>
        <h1 href={"/"} className={tw`text-6xl font-bold text-blue-500`}>
          online student directory for BMCC
        </h1>
      </header>

<div className={tw`bg-white mt-8 p-6 rounded-lg max-w-md w-full`}>
  <form className={tw`mt-6`}>
    <input
      className={tw`w-full p-2 border rounded mb-4`}
      type="email"
      placeholder="Email"
    />

    <input
      className={tw`w-full p-2 border rounded mb-4`}
      type="password"
      placeholder="Password"
    />

    <button
      className={tw`bg-blue-500 text-white py-2 px-6 rounded-lg w-full`}
    >
      Log In
    </button>
  </form>

  <p className={tw`mt-4 text-center text-gray-600`}>
    Don't have an account yet?{" "}
    <a  href={"/signup"} className={tw`text-blue-500 font-medium`}>Sign up</a>
  </p>
</div>
</div>
    </>

  );
}

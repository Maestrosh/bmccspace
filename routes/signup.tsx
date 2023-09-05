import { tw } from "twind";

export default function SignUpPage() {
  return (
    <div
      className={tw`bg-gray-200 h-screen flex flex-col items-center justify-center`}
    >
      <div className={tw`text-center`}>
        <h1 href={"/"} className={tw`text-6xl font-bold text-blue-500`}>
          BMCC.space
        </h1>
        <p className={tw`text-xl text-gray-500`}>An online student directory</p>
      </div>

      <div className={tw`bg-white mt-8 p-6 rounded-lg max-w-md w-full`}>
        <form>
          <input
            className={tw`w-full border p-2 rounded mb-4`}
            placeholder="First Name"
          />

          <input
            className={tw`w-full border p-2 rounded mb-4`}
            placeholder="Last Name"
          />
          <input
            className={tw`w-full border p-2 rounded mb-4`}
            placeholder="Email"
          />

          <button
            className={tw`bg-blue-500 text-white py-2 px-4 rounded-lg w-full`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

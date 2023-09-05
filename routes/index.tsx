import { tw } from "twind";

export default function LoginPage() {
  return (
    <div className={tw`flex flex-col h-screen`}>
      <header className={tw`bg-blue-500 p-4 flex justify-between`}>
        <a href="/" className={tw`text-white font-bold text-2xl`}>
          Apollo
        </a>
      </header>

      <div className={tw`flex flex-col justify-center items-center h-screen`}>
        <div className={tw`max-w-md w-full bg-white shadow-md rounded-lg p-6`}>
          <h1 className={tw`text-3xl font-medium text-gray-700 mb-6`}>Login</h1>
          <form>
            <div className={tw`mb-4`}>
              <label className={tw`block text-gray-700 font-medium mb-2`}>
                Email
              </label>
              <input
                className={tw`w-full border rounded py-2 px-3`}
                type="email"
                defaultValue="@stu.bmcc.cuny.edu"
              />
            </div>

            <div className={tw`mb-4`}>
              <label className={tw`block text-gray-700 font-medium mb-2`}>
                Password
              </label>
              <input
                className={tw`w-full border rounded py-2 px-3`}
                type="password"
              />
            </div>

            <button
              className={tw`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
            >
              Sign in
            </button>
          </form>
          <p className={tw`mt-4 text-center text-gray-600`}>
            Don't have an account yet?{" "}
            <a href={"/signup"} className={tw`text-blue-500 font-medium`}>
              Sign up
            </a>
          </p>
        </div>
      </div>

      <footer className={tw`bg-gray-200 p-4 flex justify-between`}>
        <span>&copy; 2023 Student Directory</span>

        <nav>
          <a href="/about" className={tw`text-gray-800 mx-4`}>
            About
          </a>
          <a href="/contact" className={tw`text-gray-800`}>
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}

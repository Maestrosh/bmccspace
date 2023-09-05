import { tw } from "twind";
import Header from "../components/Header.tsx";
export default function SignUpPage() {
  return (
    <div className={tw`flex flex-col h-screen`}>
      <Header/>
      <div className={tw`flex flex-col justify-center items-center h-screen`}>
      <div className={tw`max-w-md w-full bg-white shadow-md rounded-lg p-6`}>
        <h1 className={tw`text-3xl font-medium text-gray-700 mb-6`}>Sign up</h1>

        <form>
          <div className={tw`mb-4`}>
            <label className={tw`block text-gray-700 font-medium mb-2`}>
              First Name
            </label>
            <input
              className={tw`w-full border rounded py-2 px-3`}
            />
          </div>

          <div className={tw`mb-4`}>
            <label className={tw`block text-gray-700 font-medium mb-2`}>
              Last Name
            </label>
            <input
              className={tw`w-full border rounded py-2 px-3`}
            />
          </div>

          <div className={tw`mb-4`}>
            <label className={tw`block text-gray-700 font-medium mb-2`}>
              Email
            </label>
            <input
              className={tw`w-full border rounded py-2 px-3`}
              defaultValue="@stu.bmcc.cuny.edu"
            />
          </div>

          <button
            className={tw`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
          >
            Sign up
          </button>
        </form>
      </div>
      </div>
      <footer className={tw`bg-gray-200 p-4 flex justify-between`}>
        <span>&copy; 2023 Apollo</span>

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

import { tw } from "twind";

export default function UserProfilePage() {
  return (
    <div className={tw`h-screen bg-gray-200`}>
      {/* Page Header */}
      <header className={tw`bg-white shadow p-4 flex items-center`}>
        <a href={"/"} className={tw`text-3xl font-bold text-blue-500`}>
          BMCC.space
        </a>
      </header>

      {/* Page Content */}
      <div className={tw`max-w-5xl mx-auto p-4 mt-16`}>
        {/* User Profile & Search Sections */}
        <div className={tw`flex`}>
          {/* User Profile */}
          <div className={tw`flex flex-col items-center`}>
            <img
              src="/profilepic.png"
              alt="Profile"
              className={tw`w-48 h-48 rounded-md mr-8`}
            />
          </div>
          <div>
            <h2 className={tw`text-2xl font-medium`}>John Doe</h2>
            <p className={tw`mt-2 text-gray-600`}>Computer Science Major</p>

            <h3 className={tw`mt-4 text-lg font-medium`}>Courses</h3>

            <ul className={tw`mt-2 list-disc list-inside`}>
              <li>CMSC 250 - Computer Architecture</li>
              <li>MATH 265 - Calculus III</li>
              <li>ENGL 201 - Technical Writing</li>
            </ul>
          </div>

          {/* Search */}
          <div className={tw`flex-1`}>
            <input
              type="text"
              placeholder="Search"
              className={tw`border p-2 rounded w-full`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

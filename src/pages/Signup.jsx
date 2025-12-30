import PageMeta from "../components/PageMeta";

export default function Signup() {
  return (
    <>
      <PageMeta
        title="Sign Up - My React App"
        description="Create a new account to get started. Join our community and access all features."
        keywords="Sign Up, Create Account, Register, New User"
        canonical="https://yourwebsite.com/signup"
        url="https://yourwebsite.com/signup"
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-lg rounded w-full max-w-sm">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" />
          <span>
            I agree to the{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Terms & Conditions
            </span>
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>
      </div>
    </>
  );
}

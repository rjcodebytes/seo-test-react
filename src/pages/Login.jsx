import PageMeta from "../components/PageMeta";

export default function Login() {
  return (
    <>
      <PageMeta
        title="Login - My React App"
        description="Login to your account to access exclusive features and personalized content."
        keywords="Login, Sign In, User Login, Account Access"
        canonical="https://seo-testrj.netlify.app/login"
        url="https://seo-testrj.netlify.app/login"
      />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-lg rounded w-full max-w-sm">
        
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

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
            placeholder="Enter your password"
            className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <span className="text-blue-600 cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </div>
    </>
  );
}

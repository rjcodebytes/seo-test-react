import PageMeta from "../components/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home - My React App"
        description="Welcome to My React App built with React 19, Vite, and Tailwind CSS. Modern UI design with clean project structure."
        keywords="React, Vite, Tailwind CSS, Web Development, Modern UI"
        canonical="https://yourwebsite.com/"
        url="https://yourwebsite.com/"
        image="https://yourwebsite.com/og-image.jpg"
      />
      <div className="p-10 bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to My React App
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          This application is built using React 19, Vite, and Tailwind CSS.
          It demonstrates a clean project structure, routing, and modern UI design.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Vite provides instant server start and lightning-fast hot reload.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
          <p className="text-gray-600">
            Tailwind CSS helps build responsive and clean interfaces quickly.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Scalable Structure</h3>
          <p className="text-gray-600">
            The project is organized into components and pages for easy maintenance.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white p-8 rounded shadow mb-12">
        <h2 className="text-2xl font-bold mb-4">About This Project</h2>
        <p className="text-gray-600">
          This project is designed as a learning example for React routing,
          component-based architecture, and frontend styling using Tailwind CSS.
          It can be extended with backend integration, authentication, and APIs.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white p-10 rounded">
        <h2 className="text-2xl font-bold mb-4">
          Get Started Today
        </h2>
        <p className="mb-6">
          Explore our services, read blogs, or contact us for more information.
        </p>
      </section>

      </div>
    </>
  );
}

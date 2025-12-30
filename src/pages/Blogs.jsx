import PageMeta from "../components/PageMeta";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      description:
        "Learn the basics of React, components, JSX, and how to build your first app.",
      author: "Admin",
      date: "10 Aug 2025",
    },
    {
      id: 2,
      title: "Why Use Vite for React?",
      description:
        "Vite provides a faster development experience compared to traditional bundlers.",
      author: "Admin",
      date: "15 Aug 2025",
    },
    {
      id: 3,
      title: "Tailwind CSS Basics",
      description:
        "Understand utility-first CSS and how Tailwind helps build responsive UIs quickly.",
      author: "Admin",
      date: "20 Aug 2025",
    },
  ];

  return (
    <>
      <PageMeta
        title="Blogs - My React App"
        description="Read our latest blogs about React, Vite, Tailwind CSS, and modern web development best practices."
        keywords="React Blogs, Vite Tutorial, Tailwind CSS Guide, Web Development Blogs"
        canonical="https://seo-testrj.netlify.app/blogs"
        url="https://seo-testrj.netlify.app/blogs"
        image="https://seo-testrj.netlify.app/og-image.jpg"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>

            <div className="text-sm text-gray-500">
              <span>By {blog.author}</span> • <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

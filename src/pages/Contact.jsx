import PageMeta from "../components/PageMeta";

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact Us - My React App"
        description="Get in touch with us. Email: support@example.com, Phone: +91 98765 43210. Working Hours: Mon – Fri, 9:00 AM – 6:00 PM."
        keywords="Contact Us, Get in Touch, Customer Support, Contact Form"
        canonical="https://seo-testrj.netlify.app/contact"
        url="https://seo-testrj.netlify.app/contact"
        image="https://seo-testrj.netlify.app/og-image.jpg"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mb-8">
        <p className="mb-2">
          <strong>Email:</strong> support@example.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p className="mb-2">
          <strong>Address:</strong> Pune, Maharashtra, India
        </p>
        <p className="mb-2">
          <strong>Working Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

import PageMeta from "../components/PageMeta";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build modern, responsive, and scalable web applications using React and modern tools.",
    },
    {
      id: 2,
      title: "UI / UX Design",
      description:
        "We design clean and user-friendly interfaces focused on great user experience.",
    },
    {
      id: 3,
      title: "API Integration",
      description:
        "We integrate third-party and custom APIs to make applications dynamic and powerful.",
    },
    {
      id: 4,
      title: "Authentication Systems",
      description:
        "We implement secure login and signup systems using modern authentication methods.",
    },
    {
      id: 5,
      title: "Performance Optimization",
      description:
        "We optimize applications for speed, performance, and scalability.",
    },
    {
      id: 6,
      title: "Deployment & Hosting",
      description:
        "We deploy applications on platforms like Vercel and Netlify for production use.",
    },
  ];

  return (
    <>
      <PageMeta
        title="Our Services - My React App"
        description="Explore our services including Web Development, UI/UX Design, API Integration, Authentication Systems, Performance Optimization, and Deployment."
        keywords="Web Development, UI Design, UX Design, API Integration, React Services, Authentication"
        canonical="https://seo-testrj.netlify.app/services"
        url="https://seo-testrj.netlify.app/services"
        image="https://seo-testrj.netlify.app/og-image.jpg"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

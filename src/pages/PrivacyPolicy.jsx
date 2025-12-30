import PageMeta from "../components/PageMeta";

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy - My React App"
        description="Learn how we collect, use, and protect your personal information. Our commitment to data security and privacy."
        keywords="Privacy Policy, Data Protection, User Privacy, GDPR, Data Security"
        canonical="https://yourwebsite.com/privacy-policy"
        url="https://yourwebsite.com/privacy-policy"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <div className="bg-white p-8 rounded shadow max-w-4xl mx-auto space-y-6">

          <section>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-600">
              We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <p className="text-gray-600">
              We may collect personal information such as your name, email address,
              and contact details when you register, log in, or contact us through
              our forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
            <p className="text-gray-600">
              The information we collect is used to provide better services,
              improve user experience, communicate updates, and respond to user
              inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Data Security</h2>
            <p className="text-gray-600">
              We implement reasonable security measures to protect your personal
              data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
            <p className="text-gray-600">
              We may use third-party services for analytics or hosting. These
              services have their own privacy policies and we are not responsible
              for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will
              be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact
              us at <strong>support@example.com</strong>.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

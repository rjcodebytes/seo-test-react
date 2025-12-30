import PageMeta from "../components/PageMeta";

export default function TermsConditions() {
  return (
    <>
      <PageMeta
        title="Terms & Conditions - My React App"
        description="Read our terms and conditions. Understand the rules and guidelines for using our website and services."
        keywords="Terms and Conditions, Terms of Service, Usage Policy, Legal Terms"
        canonical="https://seo-testrj.netlify.app/terms-conditions"
        url="https://seo-testrj.netlify.app/terms-conditions"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>

      <div className="bg-white p-8 rounded shadow max-w-4xl mx-auto space-y-6">

        <section>
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be bound
            by the terms and conditions described here. If you do not agree, you
            should not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Use of Website</h2>
          <p className="text-gray-600">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use of
            the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">User Accounts</h2>
          <p className="text-gray-600">
            If you create an account, you are responsible for maintaining the
            confidentiality of your login details and all activities under your
            account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website, including text, graphics, logos, and
            software, is the property of the website owner and is protected by
            intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not liable for any direct or indirect damages resulting from
            the use or inability to use this website or its services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. Continued use
            of the website after changes indicates acceptance of the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms & Conditions, please
            contact us at <strong>support@example.com</strong>.
          </p>
        </section>

      </div>
      </div>
    </>
  );
}

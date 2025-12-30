import PageMeta from "../components/PageMeta";

export default function UserPolicy() {
  return (
    <>
      <PageMeta
        title="User Policy - My React App"
        description="Understand user responsibilities, account security, and acceptable use policies for our platform."
        keywords="User Policy, User Guidelines, Account Policy, User Responsibilities"
        canonical="https://seo-testrj.netlify.app/user-policy"
        url="https://seo-testrj.netlify.app/user-policy"
      />
      <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        User Policy
      </h1>

      <div className="bg-white p-8 rounded shadow max-w-4xl mx-auto space-y-6">

        <section>
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-gray-600">
            Users are expected to provide accurate information while registering
            and must not misuse the platform in any way that violates laws or
            regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Account Security</h2>
          <p className="text-gray-600">
            Users are responsible for maintaining the confidentiality of their
            login credentials. Any activity under a user account is the
            responsibility of the account holder.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Prohibited Activities</h2>
          <p className="text-gray-600">
            Users must not engage in activities such as spamming, uploading
            harmful content, attempting unauthorized access, or disrupting the
            website services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Content Usage</h2>
          <p className="text-gray-600">
            Users may view and use website content for personal and educational
            purposes only. Redistribution or commercial use without permission
            is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Account Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate user accounts that
            violate our policies, terms, or applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
          <p className="text-gray-600">
            This User Policy may be updated from time to time. Continued use of
            the platform indicates acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions regarding this User Policy, please contact
            us at <strong>support@example.com</strong>.
          </p>
        </section>

      </div>
      </div>
    </>
  );
}

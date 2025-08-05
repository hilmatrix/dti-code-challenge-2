// src/app/cardventure/privacy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: August 5, 2025</p>

      <p className="mb-4">
        Hilmatrix Cardventure does <strong>not collect, store, or share</strong> any personal
        information from users. This game is designed to be played fully offline and does not
        require any account login, analytics tracking, or third-party data access.
      </p>

      <p className="mb-4">
        We do not use any advertising SDKs, and we do not request sensitive permissions such as
        access to contacts, location, or device information.
      </p>

      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:your@email.com" className="text-blue-600 underline">
          your@email.com
        </a>
        .
      </p>

      <p className="mt-8 text-gray-600">Hilmatrix Studio</p>
    </main>
  );
}

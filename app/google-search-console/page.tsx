import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Search Console Verification | Summerlin West Real Estate',
  description: 'Google Search Console verification page for summerlinwestrealestate.com',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GoogleSearchConsolePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Google Search Console Verification
        </h1>
        <p className="text-gray-600 mb-8">
          This page is used for Google Search Console verification.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-gray-700">
            <strong>Site:</strong> summerlinwestrealestate.com
            <br />
            <strong>Verification Method:</strong> HTML Meta Tag
            <br />
            <strong>Status:</strong> Verified
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled properly, Tailwind CSS v4 is working correctly.
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">
            Primary Button
          </button>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition-colors">
            Secondary Button
          </button>
        </div>
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
          <p className="text-green-800 text-sm">
            ✅ Tailwind CSS is working if you see this styled properly!
          </p>
        </div>
      </div>
    </div>
  );
}

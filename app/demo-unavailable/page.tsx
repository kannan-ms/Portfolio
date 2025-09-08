export default function DemoUnavailable() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="max-w-lg w-full mx-auto p-8 bg-white/80 rounded-2xl shadow-2xl border border-gray-200 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello 👋</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your interest in viewing the live demo!
        </p>
        <div className="text-2xl text-blue-700 mb-4">🚧</div>
        <p className="text-base text-gray-600 mb-6">
          <span className="font-semibold">Sorry,</span> the live deployment for this project is currently unavailable.<br />
          Please check back later or explore the code on GitHub.
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
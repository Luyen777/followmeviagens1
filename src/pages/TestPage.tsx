import { Link } from "react-router-dom";

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
      <div className="text-center px-4">
        <h1
          className="text-6xl md:text-8xl font-bold text-white mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Hello from Claude Code!
        </h1>
        <Link
          to="/"
          className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default TestPage;

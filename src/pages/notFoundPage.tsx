import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1 style={{ color: 'red' }}>404</h1>
        <p style={{ color: 'red' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

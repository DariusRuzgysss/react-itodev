import { useNavigate } from 'react-router-dom';
import { ErrorFallback } from '../components';
import { Routes } from '../utils/constants';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorFallback
      message="Oops! The page you're looking for doesn't exist."
      buttonText="Go Home"
      onReset={() => navigate(Routes.Home)}
    />
  );
};

export default NotFoundPage;

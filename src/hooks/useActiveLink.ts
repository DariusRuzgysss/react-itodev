import { useLocation } from 'react-router-dom';

const useActiveLink = () => {
  const location = useLocation();
  return location.pathname.startsWith('/')
    ? location.pathname.slice(1)
    : location.pathname;
};

export default useActiveLink;

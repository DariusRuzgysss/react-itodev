import { Routes } from '../utils/constants';
//Libraries
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography>404</Typography>
      <Typography
        sx={{
          bgcolor: 'error.main',
          p: 2,
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button>
        <Link to={Routes.Home}>Go Home</Link>
      </Button>
    </Box>
  );
};

export default NotFoundPage;

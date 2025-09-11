import { Box, Typography } from '@mui/material';
import type { CardProps } from './types';
import { Link } from 'react-router-dom';

const Card = ({ title, path }: CardProps) => {
  return (
    <Box
      component={Link}
      to={path}
      sx={{
        bgcolor: 'secondary.main',
        height: 120,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        textDecoration: 'none',
        transition: 'all 0.4s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          bgcolor: 'secondary.dark',
          color: 'white',
        },
      }}
    >
      <Typography
        aria-label="Card title"
        variant="body2"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          transition: 'color 0.3s ease',
          fontSize: 20,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Card;

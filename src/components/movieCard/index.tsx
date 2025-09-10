import { Routes } from '../../utils/constants';

//Libraries
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({
  title,
  openingCrawl,
  index,
}: {
  title: string;
  openingCrawl: string;
  index: number;
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="div"
      onClick={() => navigate(Routes.MovieDetails(index))}
      sx={{
        borderRadius: 3,
        cursor: 'pointer',
        p: 3,
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        },
      }}
    >
      <Box sx={{ p: 1, bgcolor: 'background.paper' }}>
        <Typography variant="h5" color="black" noWrap>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="black" noWrap>
          {openingCrawl}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;

import EmptyScreen from '../components/emptyScreen';
import { fetchMovieById } from '../utils/helper';
import type { Movie } from '../utils/types';
import LoadingScreen from '../components/loadingScreen';

//Libraries
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const MovieDetailCard = () => {
  const { id } = useParams();
  const { data: movie, isPending } = useQuery<Movie>({
    queryKey: ['characters', id],
    queryFn: () => fetchMovieById(id!),
    enabled: !!id,
    staleTime: 0,
  });

  if (isPending) {
    return <LoadingScreen fullscreen />;
  }

  if (!movie) {
    return <EmptyScreen />;
  }

  return (
    <Box display="flex" justifyContent="center" p={3}>
      <Card sx={{ maxWidth: 800, width: '100%', boxShadow: 3 }}>
        <CardContent>
          {movie.title && (
            <Typography variant="h4" gutterBottom>
              {movie.title}
            </Typography>
          )}
          <Typography variant="subtitle1" color="text.secondary">
            Episode {movie.episode_id}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {movie.opening_crawl && (
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {movie.opening_crawl}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {movie.director && (
            <Typography variant="body2">
              <strong>Director:</strong> {movie.director}
            </Typography>
          )}
          {movie.producer && (
            <Typography variant="body2">
              <strong>Producer:</strong> {movie.producer}
            </Typography>
          )}
          {movie.release_date && (
            <Typography variant="body2">
              <strong>Release Date:</strong> {movie.release_date}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Characters
          </Typography>
          <List>
            {movie?.characters?.map((char) => (
              <ListItem key={char} disablePadding>
                <ListItemText
                  primary={
                    <Link href={char} underline="hover">
                      {char}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetailCard;

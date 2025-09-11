import { fetchMovieById } from '../utils/helper';
import type { Movie } from '../utils/types';
import LoadingScreen from '../components/loadingScreen';
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
import { EmptyScreen } from '@/components';

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
    <Box display="flex" justifyContent="center" p={4}>
      <Card
        aria-label="Movie card"
        sx={{ maxWidth: 800, width: '100%', boxShadow: 3 }}
      >
        <CardContent>
          {movie.title && (
            <Typography
              aria-label={`Movie title ${movie.title}`}
              variant="h4"
              gutterBottom
            >
              {movie.title}
            </Typography>
          )}
          {movie?.episode_id && (
            <Typography
              aria-label={`Episode ${movie.episode_id}`}
              variant="subtitle1"
              color="text.secondary"
            >
              Episode {movie.episode_id}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {movie.opening_crawl && (
            <Typography
              aria-label={movie.opening_crawl}
              variant="body1"
              sx={{ whiteSpace: 'pre-line' }}
            >
              {movie.opening_crawl}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {movie.director && (
            <Typography
              aria-label={`Director ${movie.director}`}
              variant="body2"
            >
              Director: {movie.director}
            </Typography>
          )}
          {movie.producer && (
            <Typography
              aria-label={`Producer ${movie.producer}`}
              variant="body2"
            >
              Producer: {movie.producer}
            </Typography>
          )}
          {movie.release_date && (
            <Typography
              aria-label={`Release Date ${movie.release_date}`}
              variant="body2"
            >
              Release Date: {movie.release_date}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {movie?.characters?.length && (
            <>
              <Typography
                aria-label="Characters list"
                variant="h6"
                gutterBottom
              >
                Characters
              </Typography>
              <List>
                {movie.characters.map((char, index) => (
                  <ListItem key={char} disablePadding>
                    <ListItemText
                      aria-label={`Character link number ${index + 1}`}
                      primary={
                        <Link href={char} underline="hover">
                          {char}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieDetailCard;

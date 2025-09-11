import { EmptyScreen, MovieCard } from '../components';
import Grid from '@mui/material/Grid';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMovies } from '@/utils/helper';
import type { Movie } from '@/utils/types';

const Movies = () => {
  const { data: movies } = useSuspenseQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  if (!movies.length) {
    return <EmptyScreen />;
  }

  return (
    <Grid container spacing={4} p={4} justifyContent="center">
      {movies.map((item, index) => (
        <Grid key={item.episode_id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <MovieCard
            index={index + 1}
            title={item.title}
            openingCrawl={item.opening_crawl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;

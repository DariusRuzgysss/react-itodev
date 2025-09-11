import { fetchMovieById } from '@/utils/helper';
import type { Movie } from '@/utils/types';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useMovie(id: string | undefined) {
  return useSuspenseQuery<Movie>({
    queryKey: ['movies', id],
    queryFn: id ? () => fetchMovieById(id) : undefined,
  });
}

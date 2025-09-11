import { fetchMovies } from '@/utils/helper';
import type { Movie } from '@/utils/types';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useMovies() {
  return useSuspenseQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
}

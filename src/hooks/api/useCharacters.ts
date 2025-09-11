import { fetchCharacters } from '@/utils/helper';
import type { Character } from '@/utils/types';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useCharacters() {
  return useSuspenseQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });
}

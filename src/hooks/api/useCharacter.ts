import { fetchCharacterById } from '@/utils/helper';
import type { Character } from '@/utils/types';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useCharacter(id: string | undefined) {
  return useSuspenseQuery<Character>({
    queryKey: ['character', id],
    queryFn: id ? () => fetchCharacterById(id) : undefined,
  });
}

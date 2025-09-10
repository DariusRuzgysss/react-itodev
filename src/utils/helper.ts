import type { Character, Movie } from './types';

export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/films`);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  return res.json();
};

export const fetchMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/films/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  return res.json();
};

export const fetchCharacters = async (): Promise<Character[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/people`);
  if (!res.ok) {
    throw new Error('Failed to fetch people');
  }
  return res.json();
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/people/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch people');
  }
  return res.json();
};

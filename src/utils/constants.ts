import TheatersIcon from '@mui/icons-material/Theaters';
import PeopleIcon from '@mui/icons-material/People';

export const Routes = {
  Home: '/',
  Movies: 'movies',
  MovieDetails: (id: number) => `${id}`,
  Characters: 'characters',
  CharacterDetails: (id: number) => `${id}`,
};

export const ListItems = [
  { title: 'Movies', icon: TheatersIcon, path: Routes.Movies },
  { title: 'Characters', icon: PeopleIcon, path: Routes.Characters },
];

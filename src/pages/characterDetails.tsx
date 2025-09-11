import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Divider,
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../utils/helper';
import type { Character } from '../utils/types';
import LoadingScreen from '../components/loadingScreen';
import { EmptyScreen } from '../components';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character, isPending } = useQuery<Character>({
    queryKey: ['characters', id],
    queryFn: () => fetchCharacterById(id!),
    enabled: !!id,
    staleTime: 0,
  });

  if (isPending) {
    return <LoadingScreen fullscreen />;
  }

  if (!character) {
    return <EmptyScreen />;
  }

  return (
    <Box p={4}>
      <Card sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}>
        <CardContent>
          {character.name && (
            <Typography variant="h4" gutterBottom>
              {character.name}
            </Typography>
          )}

          <Box sx={{ mb: 2 }}>
            {character.height && (
              <Typography variant="body1">
                Height: {character.height}
              </Typography>
            )}
            <Typography variant="body1">Mass: {character.mass}</Typography>
            {character.hair_color && (
              <Typography variant="body1">
                Hair Color: {character.hair_color}
              </Typography>
            )}
            {character.skin_color && (
              <Typography variant="body1">
                Skin Color: {character.skin_color}
              </Typography>
            )}
            {character.eye_color && (
              <Typography variant="body1">
                Eye Color: {character.eye_color}
              </Typography>
            )}
            {character.birth_year && (
              <Typography variant="body1">
                Birth Year: {character.birth_year}
              </Typography>
            )}
            {character.gender && (
              <Typography variant="body1">
                Gender: {character.gender}
              </Typography>
            )}
          </Box>

          <Divider sx={{ my: 2 }} />

          {character?.films && (
            <>
              <Typography variant="h6" gutterBottom>
                Movies
              </Typography>
              <List>
                {character.films.map((film) => (
                  <ListItem key={film}>
                    <ListItemText
                      primary={
                        <Link href={film} underline="hover">
                          {film}
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

export default CharacterDetail;

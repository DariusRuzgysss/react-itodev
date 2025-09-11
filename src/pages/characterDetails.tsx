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
import { EmptyScreen } from '@/components';
import { useCharacter } from '@/hooks/api/useCharacter';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: character } = useCharacter(id);

  if (!character) {
    return <EmptyScreen />;
  }

  return (
    <Box p={4}>
      <Card
        aria-label="Character card"
        sx={{ maxWidth: 600, margin: '0 auto', p: 2 }}
      >
        <CardContent>
          {character.name && (
            <Typography aria-label={character.name} variant="h4" gutterBottom>
              {character.name}
            </Typography>
          )}

          <Box sx={{ mb: 2 }}>
            {character.height && (
              <Typography
                aria-label={`Height ${character.height}`}
                variant="body1"
              >
                Height: {character.height}
              </Typography>
            )}
            {character?.mass && (
              <Typography aria-label={`Mass ${character.mass}`} variant="body1">
                Mass: {character.mass}
              </Typography>
            )}
            {character.hair_color && (
              <Typography
                aria-label={`Hair Color ${character.hair_color}`}
                variant="body1"
              >
                Hair Color: {character.hair_color}
              </Typography>
            )}
            {character.skin_color && (
              <Typography
                aria-label={`Skin Color ${character.skin_color}`}
                variant="body1"
              >
                Skin Color: {character.skin_color}
              </Typography>
            )}
            {character.eye_color && (
              <Typography
                aria-label={`Eye Color ${character.eye_color}`}
                variant="body1"
              >
                Eye Color: {character.eye_color}
              </Typography>
            )}
            {character.birth_year && (
              <Typography
                aria-label={`Birth Year ${character.birth_year}`}
                variant="body1"
              >
                Birth Year: {character.birth_year}
              </Typography>
            )}
            {character.gender && (
              <Typography
                aria-label={`Gender ${character.gender}`}
                variant="body1"
              >
                Gender: {character.gender}
              </Typography>
            )}
          </Box>

          <Divider sx={{ my: 2 }} />

          {character?.films && (
            <>
              <Typography aria-label="Movies list" variant="h6" gutterBottom>
                Movies
              </Typography>
              <List>
                {character.films.map((film, index) => (
                  <ListItem key={film}>
                    <ListItemText
                      aria-label={`Movie link number ${index + 1}`}
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

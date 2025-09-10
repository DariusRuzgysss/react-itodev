import { Box, Typography } from '@mui/material';
import type { EmptyScreenProps } from './types';

const EmptyScreen = ({
  message = 'Nothing here yet!',
  children,
}: EmptyScreenProps) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {children}
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyScreen;

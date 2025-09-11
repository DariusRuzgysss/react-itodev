import { Box, Typography, Button } from '@mui/material';
import type { ErrorFallbackProps } from './types';

const ErrorFallback = ({
  onReset,
  message,
  buttonText,
}: ErrorFallbackProps) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography
        sx={{
          bgcolor: 'error.main',
          p: 2,
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
      <Button onClick={onReset}>{buttonText}</Button>
    </Box>
  );
};

export default ErrorFallback;

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { LoadingScreenProps } from './types';

export default function LoadingScreen({
  text = 'Loading',
  fullscreen = false,
  size = 12,
  dotCount = 3,
}: LoadingScreenProps) {
  const theme = useTheme();

  const dots = Array.from({ length: dotCount }).map((_, i) => ({
    delay: i * 0.15,
    key: `dot-${i}`,
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={fullscreen ? '100vw' : 'auto'}
      height={fullscreen ? '100vh' : 'auto'}
      position={fullscreen ? 'fixed' : 'relative'}
      top={0}
      left={0}
      bgcolor={
        fullscreen ? theme.palette.background.default + 'CC' : 'transparent'
      }
      zIndex={fullscreen ? 1300 : 'auto'}
      role="status"
      aria-live="polite"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        p={2}
      >
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <Typography variant="h6" color="textPrimary">
            Star Wars
          </Typography>
        </motion.div>

        <Box display="flex" alignItems="center" gap={1}>
          {dots.map((d) => (
            <motion.div
              key={d.key}
              initial={{ y: 0, opacity: 0.6, scale: 1 }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: d.delay,
              }}
              style={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.main,
              }}
              aria-hidden
            />
          ))}
        </Box>

        <Typography variant="body2" color="textSecondary" mt={1}>
          {text}…
        </Typography>
      </Box>
    </Box>
  );
}

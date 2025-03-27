'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { Archivo_Narrow } from 'next/font/google';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const archivoNarrow = Archivo_Narrow({ subsets: ['latin'] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error.message === '404') notFound();
  }, [error]);

  return (
    <Container maxWidth="lg">
      {error.message !== '404' && (
        <Box sx={{ flexGrow: 1, mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 0 }}>
            {error.message}
          </Typography>
          <Typography variant="h6">
            Please try again or contact an admin.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={reset}>
            Reload
          </Button>
        </Box>
      )}
    </Container>
  );
}

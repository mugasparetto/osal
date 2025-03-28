'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { Archivo_Narrow } from 'next/font/google';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { red } from '@mui/material/colors';

import WeaponsSelect from '@/components/weapons-select';

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
    <Container
      sx={{ mt: 4, flexGrow: 1, display: 'flex', boxSizing: 'border-box' }}
      component="main"
      maxWidth={false}
    >
      {error.message !== '404' && (
        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          spacing={3}
          sx={{ flexGrow: 1 }}
        >
          <Grid
            size={4}
            padding={2}
            paddingLeft={0}
            paddingTop={0}
            component="aside"
          >
            <Box sx={{ position: 'sticky', top: '1rem' }}>
              <WeaponsSelect weaponId={''} />
            </Box>
          </Grid>
          <Grid size={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: archivoNarrow.style.fontFamily,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  Searching by Weapon System
                </Typography>
                <Button
                  variant="contained"
                  LinkComponent={Link}
                  href="/advanced-search"
                  replace
                >
                  Advanced Search
                </Button>
              </Box>
              <Typography variant="body2" component="p">
                Choose a weapon system to explore its supply chain.
              </Typography>
              <Typography variant="body2" component="p">
                Search by “location” if you want to learn what sub-components
                are made in your neighborhood.
              </Typography>
            </Box>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '2rem',
                color: red[800],
              }}
            >
              <Typography variant="h6" sx={{ mb: 0 }}>
                Something wrong happened.
              </Typography>
              <Typography variant="h6">
                Please try again or contact an admin.
              </Typography>
              <Button
                variant="outlined"
                sx={{ mt: 2, alignSelf: 'flex-start' }}
                onClick={reset}
              >
                Reload
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

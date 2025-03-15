import { Suspense } from 'react';
import Link from 'next/link';
import { Archivo_Narrow } from 'next/font/google';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WeaponsGrid from '@/components/weapons-grid';
import WeaponsGridSkeleton from '@/components/weapons-grid-skeleton';

const archivoNarrow = Archivo_Narrow({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
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
          >
            Advanced Search
          </Button>
        </Box>
        <Typography variant="body1" component="p">
          Choose a weapon system to explore its supply chain.
        </Typography>
        <Typography variant="body1" component="p">
          Search by "location" if you want to learn what sub-components are made
          in your neighborhood.
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 6 }}>
        <Suspense fallback={<WeaponsGridSkeleton />}>
          <WeaponsGrid />
        </Suspense>
      </Box>
    </Container>
  );
}

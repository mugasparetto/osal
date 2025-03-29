import { Suspense } from 'react';
import Link from 'next/link';
import { Archivo_Narrow } from 'next/font/google';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import WeaponsSelect from '@/components/weapons-select';
import ComponentsTable from '@/components/components-table';
import ComponentsTableSkeleton from '@/components/data-table-skeleton';

const archivoNarrow = Archivo_Narrow({ subsets: ['latin'] });

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Container
      maxWidth={false}
      sx={{ mt: 4, flexGrow: 1, display: 'flex', boxSizing: 'border-box' }}
      component="main"
    >
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
            <WeaponsSelect weaponId={id} />
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
              >
                Advanced Search
              </Button>
            </Box>
            <Typography variant="body2" component="p">
              Choose a weapon system to explore its supply chain.
            </Typography>
            <Typography variant="body2" component="p">
              Search by “location” if you want to learn what sub-components are
              made in your neighborhood.
            </Typography>
          </Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              paddingBottom: '2rem',
            }}
          >
            <Suspense fallback={<ComponentsTableSkeleton />}>
              <ComponentsTable weaponId={id} />
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

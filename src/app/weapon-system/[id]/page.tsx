import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import ClientPage from './client-page';
import ImageWithTitle from '@/components/image-with-title';
import WeaponsSelect from '@/components/weapons-select';

async function fetchWeapon(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `http://localhost:4000/weapons/${id}?_embed=components`
    );

    if (!response.ok) {
      console.log(`Failed to fetch weapon: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // const weapon = await fetchWeapon(id);

  // return <ClientPage weapon={weapon} />;
  return (
    <Container
      maxWidth={false}
      sx={{ mt: 4, flexGrow: 1, display: 'flex', boxSizing: 'border-box' }}
      component="main"
    >
      <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
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
      </Grid>
    </Container>
  );
}

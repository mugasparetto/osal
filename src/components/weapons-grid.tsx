import * as React from 'react';
import Grid from '@mui/material/Grid2';

import { Weapon } from '@/data';
import ImageWithTitle from '@/components/image-with-title';
import GridItem from '@/components/weapons-grid-item';

async function fetchWeapons() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('http://localhost:4000/weapons');

    if (!response.ok) {
      console.log(`Failed to fetch weapons: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function WeaponsGrid() {
  const weapons = await fetchWeapons();

  return (
    <Grid container columns={{ xs: 4, md: 12 }} spacing={3} sx={{ mb: 4 }}>
      {weapons.map((weapon: Weapon) => (
        <Grid key={weapon.id} size={{ xs: 4, sm: 2, md: 4, lg: 3 }}>
          <GridItem href={`/weapon-system/${weapon.id}`}>
            <ImageWithTitle weapon={weapon} />
          </GridItem>
        </Grid>
      ))}
    </Grid>
  );
}

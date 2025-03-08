'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import { weapons } from '@/data';
import ImageWithTitle from '@/components/ImageWithTitle';

const GridItem = styled(Link)`
display: block;
transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-0.25rem) scale(1.02);
  }
`;

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Searching by Weapon System
        </Typography>
        <Typography variant="body1" component="p">
          Choose a weapon system to explore its supply chain.
        </Typography>
        <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
          Search by “location” if you want to learn what sub-components are made
          in your neighborhood.
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 6 }}>
        <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
          {weapons.map((weapon) => (
            <Grid key={weapon.id} size={{ xs: 4, sm: 2, md: 4, lg: 3 }}>
              <GridItem href={`/weapon-system/${weapon.id}`}>
                <ImageWithTitle weapon={weapon} />
              </GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

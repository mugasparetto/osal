'use client';
import * as React from 'react';
import Image from 'next/image';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import { weapons } from '@/data';

const GridItem = styled(Box)`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-0.25rem) scale(1.02);
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 0.64) 100%
    );
  }

  h6 {
    position: absolute;
    z-index: 5;
    bottom: 1rem;
    left: 1rem;
    max-width: calc(100% - 2rem);
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
        <Grid container spacing={3}>
          {weapons.map((weapon) => (
            <Grid size={3}>
              <GridItem key={weapon.id}>
                <Image
                  src={weapon.image}
                  alt={weapon.title}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  s
                />
                <Typography variant="h6">{weapon.title}</Typography>
              </GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

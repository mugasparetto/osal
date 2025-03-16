'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setWeapons } from '@/lib/weapons-slice';
import Grid from '@mui/material/Grid2';
import GridItem from '@/components/weapons-grid-item';
import ImageWithTitle from '@/components/image-with-title';
import { Weapon } from '@/data';

interface WeaponsGridClientProps {
  fetchedWeapons: Weapon[];
}

export default function WeaponsGridClient({
  fetchedWeapons,
}: WeaponsGridClientProps) {
  const weapons = useAppSelector((state) => state.weaponsReducer.weapons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWeapons(fetchedWeapons));
  }, [dispatch, fetchedWeapons]);

  return (
    <Grid container columns={{ xs: 4, md: 12 }} spacing={3} sx={{ mb: 4 }}>
      {weapons.map((weapon) => (
        <Grid key={weapon.id} size={{ xs: 4, sm: 2, md: 4, lg: 3 }}>
          <GridItem href={`/weapon-system/${weapon.id}`}>
            <ImageWithTitle weapon={weapon} />
          </GridItem>
        </Grid>
      ))}
    </Grid>
  );
}

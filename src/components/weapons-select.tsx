'use client';
import { useCallback, useMemo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { red } from '@mui/material/colors';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setWeapons } from '@/lib/weapons-slice';
import { fetchWeapons } from '@/lib/services';
import ImageWithTitle from '@/components/image-with-title';

export default function WeaponsSelect({ weaponId }: { weaponId: string }) {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const weapons = useAppSelector((state) => state.weaponsReducer.weapons);
  const fetchStatus = useAppSelector(
    (state) => state.weaponsReducer.fetchStatus
  );

  useEffect(() => {
    if (fetchStatus === 'not-loaded') {
      fetchWeapons()
        .then((result) => {
          dispatch(setWeapons(result));
        })
        .catch((error) => {
          setHasError(true);
        });
    }
  }, [fetchStatus]);

  const weapon = useMemo(() => {
    return weapons.find((w) => w.id === weaponId);
  }, [weapons]);

  const options = useMemo(
    () =>
      weapons.map((weapon) => ({
        label: weapon.title,
        id: weapon.id,
      })),
    [weapons]
  );

  const handleChange = useCallback((event: SelectChangeEvent) => {
    router.push('/weapon-system/' + event.target.value);
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <Select
          value={weaponId}
          onChange={handleChange}
          displayEmpty={false}
          error={hasError}
        >
          {options.map((o) => (
            <MenuItem value={o.id} key={o.id}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {weapon && (
        <Card variant="outlined" sx={{ mt: 3 }}>
          <ImageWithTitle weapon={weapon!} />
          <CardContent>{weapon!.description}</CardContent>
        </Card>
      )}
      {hasError && (
        <Box sx={{ flexGrow: 1, mt: 3, color: red[800] }}>
          <Typography variant="body2" sx={{ mb: 0 }}>
            Could not load the weapon list.
          </Typography>
          <Typography variant="body2">
            Please try again or contact an admin.
          </Typography>
        </Box>
      )}
    </>
  );
}

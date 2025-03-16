'use client';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Weapon } from '@/data';
import ImageWithTitle from '@/components/image-with-title';

export default function WeaponsSelect({ weaponId }: { weaponId: string }) {
  const router = useRouter();
  const weapons = useAppSelector((state) => state.weaponsReducer.weapons);

  const weapon = useMemo(() => {
    return weapons.find((w) => w.id === weaponId);
  }, []);

  const options = useMemo(
    () =>
      weapons.map((weapon) => ({
        label: weapon.title,
        id: weapon.id,
      })),
    []
  );

  const handleChange = useCallback((event: SelectChangeEvent) => {
    router.push('/weapon-system/' + event.target.value);
  }, []);

  return (
    <>
      <FormControl fullWidth>
        <Select value={weaponId} onChange={handleChange} displayEmpty={false}>
          {options.map((o) => (
            <MenuItem value={o.id} key={o.id}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Card variant="outlined" sx={{ mt: 3 }}>
        <ImageWithTitle weapon={weapon!} />
        <CardContent>{weapon!.description}</CardContent>
      </Card>
    </>
  );
}

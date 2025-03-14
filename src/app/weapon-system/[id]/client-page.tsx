'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

import {
  DataGrid,
  GridColDef,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

import { Weapon, weapons } from '@/data';
import { archivoNarrow } from '@/theme';
import ImageWithTitle from '@/components/ImageWithTitle';

interface ClientPageProps {
  initialWeapon: Weapon;
}

const options = weapons.map((weapon) => ({
  label: weapon.title,
  id: weapon.id,
}));

function Toolbar() {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <GridToolbarFilterButton />
      <GridToolbarQuickFilter sx={{ ml: 2 }} />
    </div>
  );
}

export default function ClientPage({ initialWeapon }: ClientPageProps) {
  const router = useRouter();
  const [selectedWeaponId, setSelectedWeaponId] = React.useState(
    initialWeapon.id
  );

  const selectedWeaponObject = React.useMemo(
    () => weapons.find((weapon) => weapon.id === selectedWeaponId),
    [selectedWeaponId]
  );

  const columns: GridColDef<typeof rows[number]>[] = React.useMemo(
    () => [
      {
        field: 'component',
        headerName: 'Component',
        disableColumnMenu: true,
        flex: 1,
      },
      {
        field: 'country',
        headerName: 'Country',
        disableColumnMenu: true,
        flex: 1,
      },
      {
        field: 'companies',
        headerName: 'Companies',
        disableColumnMenu: true,
        flex: 1,
      },
      {
        field: 'location',
        headerName: 'Location',
        disableColumnMenu: true,
        flex: 1,
      },
    ],
    []
  );

  const rows = React.useMemo(
    () =>
      selectedWeaponObject!.components.map((c) => ({
        id: c.id,
        component: c.title,
        country: c.country,
        companies: c.company,
        location: c.location,
      })),
    [selectedWeaponObject]
  );

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    setSelectedWeaponId(event.target.value as string);

    // Update the URL with the new parameter without refreshing the page
    router.push('/weapon-system/' + event.target.value);
  }, []);

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
            <FormControl fullWidth>
              <Select
                value={selectedWeaponId}
                onChange={handleChange}
                displayEmpty={false}
              >
                {options.map((o) => (
                  <MenuItem value={o.id} key={o.id}>
                    {o.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Card variant="outlined" sx={{ mt: 3 }}>
              <ImageWithTitle weapon={selectedWeaponObject!} />
              <CardContent>{selectedWeaponObject?.description}</CardContent>
            </Card>
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
            <DataGrid
              rows={rows}
              columns={columns}
              autoPageSize
              slots={{
                toolbar: Toolbar,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

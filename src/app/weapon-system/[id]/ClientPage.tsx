"use client";
import * as React from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Weapon, weapons } from "@/data"
import ImageWithTitle from '@/components/ImageWithTitle';

interface ClientPageProps {
    initialWeapon: Weapon
}

const options = weapons.map((weapon) => ({ label: weapon.title, id: weapon.id }))

export default function ClientPage({ initialWeapon }: ClientPageProps) {
    const router = useRouter();
    const [selectedWeaponId, setSelectedWeaponId] = React.useState(initialWeapon.id)

    const selectedWeaponObject = React.useMemo(() => weapons.find((weapon) => weapon.id === selectedWeaponId), [selectedWeaponId])

    const columns: GridColDef<(typeof rows)[number]>[] = React.useMemo(() => [
        { field: 'component', headerName: 'Component' },
        {
            field: 'country',
            headerName: 'Country',
        },
        {
            field: 'companies',
            headerName: 'Companies',
        },
        {
            field: 'location',
            headerName: 'Location',
        },
    ], []);

    const rows = React.useMemo(() => selectedWeaponObject!.components.map((c) => ({ id: c.id, component: c.title, country: c.country, companies: c.company, location: c.location })), [selectedWeaponObject])

    const handleChange = React.useCallback((event: SelectChangeEvent) => {
        setSelectedWeaponId(event.target.value as string);

        // Update the URL with the new parameter without refreshing the page
        router.push('/weapon-system/' + event.target.value);
    }, []);

    return (
        <Container maxWidth={false} sx={{ mt: 4 }} component="main">
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                <Grid size={4} padding={2} paddingLeft={0} paddingTop={0} component="aside">
                    <FormControl fullWidth>
                        <Select
                            value={selectedWeaponId}
                            onChange={handleChange}
                            displayEmpty={false}
                        >
                            {options.map((o) => (<MenuItem value={o.id} key={o.id}>{o.label}</MenuItem>))}
                        </Select>

                        <Card variant='outlined' sx={{ mt: 3 }}>
                            <ImageWithTitle weapon={selectedWeaponObject!} />
                            <CardContent>{selectedWeaponObject?.description}</CardContent>
                        </Card>
                    </FormControl>
                </Grid>
                <Grid size={8}>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant='h6'>Searching by Weapon System</Typography>
                        <Typography variant="body2" component="p" sx={{ my: 1 }}>
                            Choose a weapon system to explore its supply chain.
                        </Typography>
                        <Typography variant="body2" component="p">
                            Search by “location” if you want to learn what sub-components are made
                            in your neighborhood.
                        </Typography>
                    </Box>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        autoPageSize
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
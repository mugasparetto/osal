"use client";
import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import { Weapon, weapons } from "@/data"
import ImageWithTitle from '@/components/ImageWithTitle';

interface ClientPageProps {
    initialWeapon: Weapon
}

const options = weapons.map((weapon) => ({ label: weapon.title, id: weapon.id }))

export default function ClientPage({ initialWeapon }: ClientPageProps) {
    const [selectedWeaponId, setSelectedWeaponId] = React.useState(initialWeapon.id)

    const selectedWeaponObject = React.useMemo(() => weapons.find((weapon) => weapon.id === selectedWeaponId), [selectedWeaponId])

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedWeaponId(event.target.value as string);
    };

    return (
        <Container maxWidth={false} sx={{ mt: 4 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                <Grid size={4} padding={2} paddingLeft={0}>
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
                    <Box><span>Alo</span></Box>
                </Grid>
            </Grid>
        </Container>
    );
}
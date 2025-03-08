"use client";
import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

import { Weapon, weapons } from "@/data"

interface ClientPageProps {
    weapon: Weapon
}

const options = weapons.map((weapon) => ({ label: weapon.title, id: weapon.id, value: weapon.title.replace(/\s+/g, '-').toLowerCase() }))

export default function ClientPage({ weapon }: ClientPageProps) {
    const [selectedWeapon, setSelectedWeapon] = React.useState(weapon.title.replace(/\s+/g, '-').toLowerCase())

    console.log(selectedWeapon)

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedWeapon(event.target.value as string);
    };

    return (
        <Container maxWidth={false} sx={{ mt: 4 }}>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
                <Grid size={4}>
                    <FormControl fullWidth>
                        <Select
                            value={selectedWeapon}
                            onChange={handleChange}
                            displayEmpty={false}
                        >
                            {options.map((o) => (<MenuItem value={o.value} key={o.id}>{o.label}</MenuItem>))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={8}>
                    <Box><span>Alo</span></Box>
                </Grid>
            </Grid>
        </Container>
    );
}
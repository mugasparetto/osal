import { Suspense } from 'react';
import Link from 'next/link';
import { Archivo_Narrow } from 'next/font/google';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Container
      maxWidth={false}
      sx={{ mt: 4, flexGrow: 1, display: 'flex', boxSizing: 'border-box' }}
      component="main"
    >
      <Typography>Component: {id}</Typography>
    </Container>
  );
}

import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function WeaponsGridSkeleton() {
  return (
    <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
      {[...Array(8)].map((_, index) => (
        <Grid key={index} size={{ xs: 4, sm: 2, md: 4, lg: 3 }}>
          <Box sx={{ width: '100%' }}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              animation="wave"
            />
            <Skeleton variant="text" sx={{ mt: 1 }} animation="wave" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

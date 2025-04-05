import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

export default function ComponentSkeleton() {
  return (
    <Container
      maxWidth={false}
      sx={{
        mt: 4,
        flexGrow: 1,
        display: 'flex',
        boxSizing: 'border-box',
      }}
      component="main"
    >
      <Grid container columns={12} spacing={3} sx={{ flexGrow: 1 }}>
        <Grid size={4} sx={{ pr: 1 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={200}
            animation="wave"
          />
          <Skeleton variant="text" sx={{ mt: 2 }} animation="wave" />
          <Skeleton
            variant="text"
            sx={{ mt: 1, width: '60%' }}
            animation="wave"
          />
        </Grid>
        <Grid
          size={4}
          padding={2}
          paddingTop={0}
          paddingLeft={0}
          paddingRight={0}
        >
          <Skeleton variant="text" sx={{ width: '60%' }} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} animation="wave" />
          <Skeleton variant="text" sx={{ mt: 2 }} animation="wave" />
          <Skeleton variant="text" sx={{ width: '75%' }} animation="wave" />
        </Grid>
      </Grid>
    </Container>
  );
}

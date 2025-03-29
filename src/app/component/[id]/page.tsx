import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { default as MUILink } from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ComponentHeader from '@/components/component-header';
import Accordion from '@/components/accordion';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
        <Grid size={4} padding={2} paddingLeft={0} paddingTop={0}>
          <Box
            sx={{
              display: 'block',
              position: 'relative',
              width: '100%',
              height: '220px',
            }}
          >
            <Image
              src={
                'https://images.unsplash.com/photo-1741091475787-8cf779895451'
              }
              alt={'Placeholder'}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ color: 'text.secondary' }}>
            <Typography sx={{ mt: 2 }}>
              An advanced missile defense system developed by Israel to
              intercept short-range rockets and artillery shells. It has been
              credited with intercepting thousands of incoming projectiles.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Direct parent</strong>
            </Typography>
            <Typography>Hellfire Missile</Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Notes</strong>
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              semper maximus convallis. Sed accumsan maximus lectus et
              tincidunt. Etiam venenatis dolor.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Sources</strong>
            </Typography>
            <Typography
              component="ol"
              sx={{
                listStyle: 'none',
                counterReset: 'item',
                paddingInlineStart: 0,
                ['& li:before']: {
                  content: "'[' counter(item) ']'",
                  counterIncrement: 'item',
                  marginRight: '0.25rem',
                },
              }}
            >
              <li>
                <MUILink href="#">www.google.com/source</MUILink>
              </li>
              <li>
                <MUILink href="#">www.google.com/source</MUILink>
              </li>
              <li>
                <MUILink href="#">www.google.com/source</MUILink>
              </li>
              <li>
                <MUILink href="#">www.google.com/source</MUILink>
              </li>
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={4}
          padding={2}
          paddingTop={0}
          paddingLeft={0}
          paddingRight={0}
        >
          <ComponentHeader />
        </Grid>
        <Grid
          size={4}
          padding={2}
          paddingTop={0}
          paddingRight={0}
          paddingLeft={0}
          sx={{
            position: 'relative',
            ['::before']: {
              content: "''",
              display: 'block',
              width: '1px',
              height: 'calc(100% - 72px)',
              backgroundColor: 'divider',
              position: 'absolute',
              left: 0,
              bottom: 0,
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="contained"
              LinkComponent={Link}
              href="/advanced-search"
            >
              Advanced Search
            </Button>
          </Box>
          <Typography sx={{ fontSize: 20, color: 'text.secondary', ml: 3 }}>
            Missing Information
          </Typography>
          <Box>
            <Accordion />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from "@mui/material/Divider"
import Grid from '@mui/material/Grid2';
import { default as MUILink } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ComponentHeader from '@/components/component-header';
import Accordion from '@/components/accordion';
import { relative } from 'path';

const children = ["Spring", "Sensor", "Fin"];

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
        <Grid size={4} sx={{ p: 2, pt: 0, pl: 0, position: "relative" }}>
          <Stack gap={2} sx={{ color: "text.secondary", position: "absolute" }}>
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

            <Typography>
              An advanced missile defense system developed by Israel to
              intercept short-range rockets and artillery shells. It has been
              credited with intercepting thousands of incoming projectiles.
            </Typography>
            <Box>
              <Typography>
                <strong>Direct parent</strong>
              </Typography>
              <Typography>Hellfire Missile</Typography>
            </Box>
            <Box>
              <Typography>
                <strong>Notes</strong>
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                semper maximus convallis. Sed accumsan maximus lectus et
                tincidunt. Etiam venenatis dolor.
              </Typography>
            </Box>
            <Box>
              <Typography>
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
          </Stack>
        </Grid>
        <Grid
          size={4}
          padding={2}
          paddingTop={0}
          paddingLeft={0}
          paddingRight={0}
        >
          <ComponentHeader />
          <Stack sx={{ color: "text.secondary", mt: 3 }} gap={4}>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.primary" }}>Item Group</Typography>
              <Typography>
                <strong>Name:</strong> Warhead
              </Typography>
              <Typography>
                <strong>Country Usage:</strong> Israel, Ukraine
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.primary" }}>Price</Typography>
              <Typography>
                <strong>Price:</strong> $1.9B [1]
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.primary" }}>Usage</Typography>
              <Typography>
                <strong>Event:</strong> Massacre in refugee camp on June 25 2023, killing of four doctors in a hospital in northern Gaza. Massacre in school in September 7, 2024. [2]
              </Typography>
              <Typography>
                <strong>Source:</strong> guadian.com/link
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.primary" }}>Contract Company</Typography>
              <Typography>
                <strong>Country:</strong> United States
              </Typography>
              <Typography>
                <strong>Company:</strong> Lockeed Martin
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, color: "text.primary" }}>Fabrication and Assembly</Typography>
              <Typography><strong>Primary:</strong> Warhead Assembly</Typography>
              <Typography><strong>Country:</strong> United States</Typography>
              <Typography><strong>Company:</strong> Lockheed Martin Campus 4</Typography>
              <Typography><strong>Parent:</strong> None</Typography>
              <Typography><strong>Given Location:</strong> 2989 Street Town Road, Newark , NJ</Typography>
              <Typography><strong>Canonical Address:</strong> 2989 Street Town Road, Newark , NJ</Typography>
              <Typography><strong>Latitude and Longitude:</strong> 384789348274, 238482374</Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 4 }} />
          <Box>
            <Typography sx={{ fontSize: 20, color: "text.primary" }}>Children</Typography>
          </Box>
          <Stack sx={{ color: "text.secondary", mb: 3 }} gap={4}>
            {children.map(child => (<Box>
              <Typography><strong>Direct Child:</strong> {child}</Typography>
              <Typography><strong>Company:</strong> Lockheed Martin Campus 4</Typography>
              <Typography><strong>Given Location:</strong> 2989 Street Town Road, Newark , NJ</Typography>
              <Typography><strong>Canonical Address:</strong> 2989 Street Town Road, Newark , NJ</Typography>
              <Typography><strong>Latitude and Longitude:</strong> 384789348274, 238482374</Typography>
            </Box>))}
          </Stack>
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
          <Box sx={{ position: "sticky", top: 32 }}>
            <Typography sx={{ fontSize: 20, color: 'text.secondary', ml: 3 }}>
              Missing Information
            </Typography>
            <Box>
              <Accordion />
              <Accordion />
              <Accordion />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
}

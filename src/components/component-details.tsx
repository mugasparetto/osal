import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { default as MUILink } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ComponentHeader from '@/components/component-header';
import Accordion from '@/components/accordion';
import ComponentChild from '@/components/component-child';
import { Children } from '@/data';

import { fetchComponentDetails } from '@/lib/services';

interface ComponentDetailProps {
  id: string;
  variation: string;
}

const children = ['Spring', 'Sensor', 'Fin'];

export default async function ComponentDetail({
  id,
  variation,
}: ComponentDetailProps) {
  try {
    const details = await fetchComponentDetails();

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
          <Grid size={4} sx={{ p: 2, pt: 0, pl: 0, position: 'relative' }}>
            <Stack
              gap={2}
              sx={{ color: 'text.secondary', position: 'absolute' }}
            >
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

              <Typography>{details.description}</Typography>
              <Box>
                <Typography>
                  <strong>Direct parent</strong>
                </Typography>
                <Typography>{details.parent}</Typography>
              </Box>
              <Box>
                <Typography>
                  <strong>Notes</strong>
                </Typography>
                <Typography>{details.notes}</Typography>
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
                  {details.sources.map((s: string, index: number) => (
                    <li>
                      <MUILink key={index} href="#">
                        {s}
                      </MUILink>
                    </li>
                  ))}
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
            <ComponentHeader
              variation={variation}
              name={details.name}
              parent={details.parent}
            />
            <Stack sx={{ color: 'text.secondary', mt: 3 }} gap={4}>
              <Box>
                <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                  Item Group
                </Typography>
                <Typography>
                  <strong>Name:</strong> {details.name}
                </Typography>
                <Typography>
                  <strong>Country Usage:</strong> {details.country}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                  Price
                </Typography>
                <Typography>
                  <strong>Price:</strong> {details.price}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                  Usage
                </Typography>
                <Typography>
                  <strong>Event:</strong> {details.usage.event}
                </Typography>
                <Typography>
                  <strong>Source:</strong> {details.usage.source}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                  Contract Company
                </Typography>
                <Typography>
                  <strong>Country:</strong> {details.contract.country}
                </Typography>
                <Typography>
                  <strong>Company:</strong> {details.contract.company}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                  Fabrication and Assembly
                </Typography>
                <Typography>
                  <strong>Primary:</strong> {details.fabrication.primary}{' '}
                  Assembly
                </Typography>
                <Typography>
                  <strong>Country:</strong> {details.fabrication.country}
                </Typography>
                <Typography>
                  <strong>Company:</strong> {details.fabrication.company}
                </Typography>
                <Typography>
                  <strong>Parent:</strong> {details.fabrication.parent}
                </Typography>
                <Typography>
                  <strong>Given Location:</strong>{' '}
                  {details.fabrication.location}
                </Typography>
                <Typography>
                  <strong>Canonical Address:</strong>{' '}
                  {details.fabrication.address}
                </Typography>
                <Typography>
                  <strong>Latitude and Longitude:</strong>{' '}
                  {details.fabrication.lat_long}
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 4 }} />
            <Box>
              <Typography sx={{ fontSize: 20, color: 'text.primary' }}>
                Children
              </Typography>
            </Box>
            <Stack sx={{ color: 'text.secondary', mb: 3 }} gap={4}>
              {details.children.map((child: Children) => (
                <ComponentChild child={child} />
              ))}
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
            <Box sx={{ position: 'sticky', top: 32 }}>
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
      </Container>
    );
  } catch (error) {
    throw error;
  }
}

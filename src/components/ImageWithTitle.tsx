'use client';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Weapon } from '@/data';

const Container = styled(Box)`
  display: block;
  position: relative;
  width: 100%;
  height: 220px;
  text-decoration: none;
  transition: transform 0.3s ease-out;

  &:visited {
    color: inherit;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 0.64) 100%
    );
  }

  h6 {
    position: absolute;
    z-index: 5;
    bottom: 1rem;
    left: 1rem;
    max-width: calc(100% - 2rem);
    color: white;
  }
`;

interface ImageWithTitleProps {
  weapon: Weapon;
}

export default function ImageWithTitle({ weapon }: ImageWithTitleProps) {
  return (
    <Container>
      <Image
        src={weapon.image}
        alt={weapon.title}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <Typography variant="h6">{weapon.title}</Typography>
    </Container>
  );
}

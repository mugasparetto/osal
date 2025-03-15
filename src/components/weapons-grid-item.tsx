'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const WeaponsGridItem = styled(Link)`
  display: block;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-0.25rem) scale(1.02);
  }
`;

export default WeaponsGridItem;

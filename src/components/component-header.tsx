'use client';
import { useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ComponentHeaderProps {
  variation: string;
  name: string;
  parent: string;
}

const options = ['Variation 1', 'Variation 2', 'Variation 3'];

export default function ComponentHeader({
  variation,
  name,
  parent,
}: ComponentHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(parseInt(variation) - 1);
  const open = Boolean(anchorEl);
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick = useCallback(
    (event: React.MouseEvent<HTMLElement>, index: number) => {
      setSelectedIndex(index);
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set('variation', `${index + 1}`);

      router.push(`?${current.toString()}`);
      setAnchorEl(null);
    },
    []
  );

  return (
    <Stack>
      <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>
        {parent}
      </Typography>
      <Stack direction="row" sx={{ alignItems: 'start' }}>
        <SubdirectoryArrowRightIcon sx={{ fontSize: 30 }} />
        <Typography variant="h4">
          {name} variation {variation}
        </Typography>
        <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClick}>
          <MoreVertIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          elevation={0}
          sx={{
            ['& .MuiPaper-root']: {
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'divider',
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Stack>
  );
}

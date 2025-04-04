'use client';
import { useState, useCallback } from 'react';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = ['Variation 1', 'Variation 2', 'Variation 3'];

export default function ComponentHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Stack>
      <Typography sx={{ fontSize: 20, color: 'text.secondary' }}>
        Hellfire Missile
      </Typography>
      <Stack direction="row">
        <SubdirectoryArrowRightIcon sx={{ fontSize: 30 }} />
        <Typography variant="h4">Warhead variation 1</Typography>
        <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClick}>
          <MoreVertIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
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
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === 'Variation 1'}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Stack>
  );
}

'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { Children } from '@/data';

interface ComponentChildProps {
  child: Children;
}

export default function ComponentChild({ child }: ComponentChildProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        sx={{ position: 'absolute', right: 0, top: 0 }}
        onClick={handleClick}
      >
        <CommentIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
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
        <Typography sx={{ p: 2, width: 440 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper
          maximus convallis. Sed accumsan maximus lectus et tincidunt. Etiam
          venenatis dolor.
        </Typography>
      </Popover>
      <Typography>
        <strong>Direct Child:</strong> {child.name}
      </Typography>
      <Typography>
        <strong>Company:</strong> {child.company}
      </Typography>
      <Typography>
        <strong>Given Location:</strong> {child.location}
      </Typography>
      <Typography>
        <strong>Canonical Address:</strong> {child.address}
      </Typography>
      <Typography>
        <strong>Latitude and Longitude:</strong> {child.lat_long}
      </Typography>
    </Box>
  );
}

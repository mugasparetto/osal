'use client';
import * as React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useColorScheme, styled } from '@mui/material/styles';

const Logo = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

export default function MainAppBar() {
  const { mode, setMode } = useColorScheme();

  const handleModeClick = React.useCallback(() => {
    if (mode === 'dark') setMode('light');
    if (mode === 'light') setMode('dark');
  }, [mode]);

  return (
    <Box>
      <AppBar
        position="static"
        component="nav"
        enableColorOnDark
        sx={{ boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Logo}
            href="/"
            sx={{ flexGrow: 1 }}
          >
            Open Source Arms Library
          </Typography>
          {mode != null && (
            <>
              <IconButton onClick={handleModeClick}>
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

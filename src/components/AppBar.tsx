'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Divider, { dividerClasses } from '@mui/material/Divider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorScheme } from '@mui/material/styles';

export default function MainAppBar() {
  const pathname = usePathname();
  const { mode, setMode } = useColorScheme();

  const handleModeClick = React.useCallback(() => {
    if (mode === 'dark') setMode('light');
    if (mode === 'light') setMode('dark');
  }, [mode]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        [`& .${dividerClasses.root}`]: {
          mx: 2,
        },
      }}
    >
      {/* TODO: fix app bar color for light theme - it hides the tabs */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Open Source Arms Library
          </Typography>
          <Tabs value={pathname} role="navigation">
            <Tab component={Link} href="/" label="weapon system" value="/" />
            <Tab
              component={Link}
              href="/advanced-search"
              label="Advanced Search"
              value="/advanced-search"
            />
          </Tabs>
          {mode != null && (
            <>
              <Divider orientation="vertical" flexItem />
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

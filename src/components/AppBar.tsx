'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

import {
  useColorScheme,
  createTheme,
  ThemeProvider,
  styled,
} from '@mui/material/styles';

// Create a dark theme specifically for this component
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  colorSchemes: { dark: true },
});

const drawerWidth = 240;

const Logo = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

export default function MainAppBar() {
  const pathname = usePathname();
  const { mode, setMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleModeClick = React.useCallback(() => {
    if (mode === 'dark') setMode('light');
    if (mode === 'light') setMode('dark');
  }, [mode]);

  const handleDrawerToggle = React.useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <Tabs value={pathname} role="navigation" orientation="vertical">
        <Tab component={Link} href="/" label="weapon system" value="/" />
        <Tab
          component={Link}
          href="/advanced-search"
          label="Advanced Search"
          value="/advanced-search"
        />
      </Tabs>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          flexGrow: 1,
          [`& .${dividerClasses.root}`]: {
            mx: 2,
          },
        }}
      >
        <AppBar position="static" component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component={Logo}
              href="/"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
            >
              Open Source Arms Library
            </Typography>
            <Typography
              variant="h6"
              component={Logo}
              href="/"
              sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}
            >
              OSAL
            </Typography>
            <Tabs
              value={pathname}
              role="navigation"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Tab component={Link} href="/" label="weapon system" value="/" />
              <Tab
                component={Link}
                href="/advanced-search"
                label="Advanced Search"
                value="/advanced-search"
              />
            </Tabs>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
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
        <nav>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";

import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme, ThemeProvider, styled } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

// カスタムした Paper コンポーネント
// https://mui.com/system/styled/
/*
  All the MUI components are styled with this utility.
  
  styled(Component, [options])(styles) => Component

  1. Component: The component that will be wrapped.
  2. options (object, optional)
  
*/
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: '60px',
}));

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <ElevationScroll>
        <ResponsiveAppBar />
      </ElevationScroll>

      <Box sx={{ mt: 8 }}>  {/* AppBar を考慮した Container */}

        <Box  // Paper の Wrapper
          sx={{
            p: 2,
          }}
        >
          <Box
            component='img'
            src="/img/2022-shibafes-ledcube.jpg"
            sx={{
              borderRadius: '30px',
              height: '400px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

      </Box>

    </ThemeProvider>
  )
}

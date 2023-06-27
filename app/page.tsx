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
import Grid from "@mui/material/Grid";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme, ThemeProvider, styled, Typography } from "@mui/material";

import HeroPaper from '@/components/HeroPaper';
import WorkSection from '@/components/WorkSection';

const darkTheme = createTheme({
  palette: {

    mode: 'dark', // デフォルトでダークモード

    text: {
      primary: '#CFCFCF', // 薄暗くしたほうが目に優しい
    }
  },
  typography: {
    h2: {
      fontWeight: '700',
    },
    h3: {
      fontWeight: '700',
    },
    h5: {
      fontWeight: '700',
    }
  }
});

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

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

        <Box  // ページ全体のラッパー
          sx={{
            p: 2,
          }}
        >
          <HeroPaper />

          <Typography variant='h3' component='h2' mx={2} my={4}>
            Works
          </Typography>
          
          <WorkSection />
          
          <Typography variant='h3' component='h2' mx={2} my={4}>
            Capability
          </Typography>

          <Box>
            
          </Box>

        </Box>  {/* ページ全体のラッパー */}

      </Box>

    </ThemeProvider>
  )
}

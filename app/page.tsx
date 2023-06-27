'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";

import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider, Typography } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

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
          
          <Container maxWidth='lg'>
            
            {/* About 書きたいーー */}

            <Typography variant='h3' component='h2' mx={2} my={4}>
              Works
            </Typography>
            
            <WorkSection />
            
            {/* Capability 欄を追加したいーー */}

          </Container>

          <Divider sx={{my: 10 }} />

          <Container maxWidth='lg' sx={{height: '60px', position: 'relative', textAlign: 'center'}}>

            <Box sx={{
              width: '200px', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
              <Typography> Contact: </Typography>
              <EmailIcon />
              <TwitterIcon />
              <GitHubIcon />
            </Box>
            <Typography pt={2} color='grey.800'>
              Copyright © 2023 Shogo0x2e All rights reserved.
            </Typography>
          </Container>


        </Box>  {/* ページ全体のラッパー */}

      </Box>

    </ThemeProvider>
  )
}

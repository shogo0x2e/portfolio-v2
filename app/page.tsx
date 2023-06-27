'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import React from "react";

import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { createTheme, ThemeProvider, styled, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: {

    mode: 'dark', // デフォルトでダークモード

    text: {
      primary: '#E3E3E3', // 薄暗くしたほうが目に優しい
    }
  },
  typography: {
    h2: {
      fontWeight: 'medium',
    },
    h3: {
      fontWeight: 'medium',
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

        <Box  // ページ全体のラッパー
          sx={{
            p: 2,
          }}
        >

          <Box  // Relative
            position='relative'
            width='100%'
            height='400px'
          >

            <Box
              component='img'
              src="/img/2022-shibafes-ledcube.jpg"
              sx={{
                position: 'relative',
                borderRadius: '30px',
                height: '400px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '30px',
                opacity: 0.5,
              }}
            />
            <Typography variant='h2' component='h1' 
              position='absolute'
              top="50%"
              left="50%"
              sx={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              Shogo0x2e
            </Typography>

          </Box>  {/* Relative */ }

          <Typography variant='h3' component='h2' mx={2} my={4}>
            Works
          </Typography>

        </Box>  {/* ページ全体のラッパー */}

      </Box>

    </ThemeProvider>
  )
}

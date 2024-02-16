'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import Link from '@mui/material/Link';

import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import { createTheme, ThemeProvider, Typography } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

import HeroPaper from '@/components/HeroPaper';
import WorkSection from '@/components/WorkSection';

const darkTheme = createTheme({
  palette: {

    mode: 'dark', // デフォルトでダークモード

    text: {
      primary: '#E0E0E0', // 薄暗くしたほうが目に優しい
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

const style = {
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => setOpenSnackbar(true);
  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* <ElevationScroll>
        <ResponsiveAppBar />
      </ElevationScroll> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: '30px',
        }}>
          <Typography variant="h6">
            メールアドレス
          </Typography>
          <Typography sx={{ mt: 2 }}>
            contact@shogo0x2e.com
          </Typography>
          <Box mt={2} sx={{display: "flex", justifyContent: "space-around"}}>
            <Button variant="contained" onClick={() => {
              navigator.clipboard.writeText("contact@shogo0x2e.com").then(
                () => {
                  // 成功時の処理
                  handleClickSnackbar();
                  handleClose();
                },
                () => {
                  // 失敗時の処理
                  alert("クリップボードへのコピーに失敗しました。");
                }
              )
            }}>
              クリップボードにコピーする
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="クリップボードにコピーしました！"
        action={action}
      />

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
              top: '-70%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
              <Typography mt={1}> Contact: </Typography>
              
                <IconButton onClick={handleOpen}>
                  <EmailIcon />
                </IconButton>

                <IconButton component={Link} href="https://twitter.com/shogo0x2e">
                  <TwitterIcon />
                </IconButton>

                <IconButton component={Link} href="https://github.com/shogo0x2e">
                  <GitHubIcon />
                </IconButton>
              
            </Box>
            <Typography pt={2} color='grey.800'>
              Copyright © 2023 shogo0x2e All rights reserved.
            </Typography>
          </Container>


        </Box>  {/* ページ全体のラッパー */}

      </Box>

    </ThemeProvider>
  )
}

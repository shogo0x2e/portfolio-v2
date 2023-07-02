
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WorkSection() {
  return (
    <Grid container spacing={2}>
      {[0, 1, 2].map(((value) => 
        <Grid item xs={6} key={value}>
          <Paper component='div' sx={{ borderRadius: '30px', height: '400px' }}>
            <Box  // 画像 (スライドショー)
              component='img'
              src='/img/2022-shibafes-ledcube.jpg'
              sx={{
                borderRadius: '30px',
                position: 'relative',
                height: '200px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <Box px={3} pb={3}>
              <Typography variant='h5' component='h3' my={1}>
                作品名
              </Typography>

              <Typography pb={2}>
                ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。
              </Typography>

              <Box display='flex' flexDirection='row' >
                {["Arduino", "電子工作", "C++"].map((value) =>
                  <Box
                    key={value}
                    py={0.2}
                    px={1.2}
                    mr={1}
                    bgcolor="primary.main"
                    color="secondary.contrastText"
                    sx={{borderRadius: '30px', fontWeight: '700'}}
                  >
                    {value}
                  </Box>
                )}

              </Box>

            </Box>
          </Paper>

        </Grid>
      ))}
      <Grid item xs={6}>
        <Paper 
          component='div'
          sx={{ 
            borderRadius: '30px', 
            height: '400px',
            position: 'relative',
          }}
        >
          <Box 
            display='flex' 
            flexDirection='column' 
            width={300} 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography variant='h4' textAlign='center'>
              Works を見る
            </Typography>  
            <Box textAlign='center'>
              <ArrowForwardIcon sx={{fontSize: '70px'}} />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
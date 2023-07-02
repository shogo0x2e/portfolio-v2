
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import JsonArticles from "../data/articles.json";

export default function WorkSection() {
  return (
    <Grid container spacing={2}>
      {JsonArticles.map(((value, index) => 
        <Grid item xs={6} key={index}>
          <Paper component='div' sx={{ borderRadius: '30px', height: '400px' }}>
            <Box  // 画像 (スライドショー)
              component='img'
              src={value.image}
              sx={{
                borderRadius: '30px',
                position: 'relative',
                height: '200px',
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <Box px={3} pb={3}>
              <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>

                <Typography variant='h5' component='h3' my={1}>
                  {value.title} 
                </Typography>
                <Typography mt={2.5} color="grey.700" fontSize={14}>
                  {value.date}
                </Typography>
              </Box>

              <Typography pb={2} height="5.5rem">
                {value.description}
              </Typography>

              <Box display='flex' flexDirection='row' >
                {value.technologies.map((techWord) =>
                  <Box
                    key={techWord}
                    py={0.2}
                    px={1.2}
                    mr={1}
                    bgcolor="primary.main"
                    color="secondary.contrastText"
                    sx={{borderRadius: '30px', fontWeight: '700'}}
                  >
                    {techWord}
                  </Box>
                )}

              </Box>

            </Box>
          </Paper>

        </Grid>
      ))}
      {/* <Grid item xs={6}>
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
      </Grid> */}
    </Grid>
  );
}
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroPaper() {

  return (

    <Box  // Relative
      position='relative'
      width='100%'
      height='400px'
    >
      
      <Box  // 画像 (スライドショー)
        component='img'
        src='/img/2022-shibafes-ledcube.jpg'
        sx={{
          borderRadius: '30px',
          position: 'relative',
          height: '400px',
          width: '100%',
          objectFit: 'cover',
        }}
      
      />

      <Box  // 画像の前景
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

    </Box>
  );
}
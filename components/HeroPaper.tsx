import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JsonHeroImages from "../data/hero_images.json";

export default function HeroPaper() {

  return (

    <Box  // Relative
      position='relative'
      width='100%'
      height='400px'
    >
      
      <Box  // 画像 (スライドショー)
        component='img'
        src={JsonHeroImages.internals.prefix + JsonHeroImages.internals.images[0]}
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
      <Box
        width='100%'
        position='absolute'
        top="50%"
        left="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      > 
        {/* ちょっと下にずらしたいので mt を 2 */}
        <Typography variant='h2' component='h1' textAlign='center' mt={4}>
          Shogo0x2e / きたぴー
        </Typography>
        
        <Typography mt={2} textAlign='center'>
          芝浦工業大学 システム理工学部 <br />
          電子情報システム学科 学部 2 年 <br />
        </Typography>

        <Typography mt={2} textAlign='center'>
          サークル ShibaLab 代表 <br />
          国際プログラム 所属 <br />
        </Typography>
      </Box>
    </Box>
  );
}
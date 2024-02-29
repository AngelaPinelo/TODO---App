import { Box, Container, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';



const BannerComponent = ({ title, subTitle }) => {
    return (
        <>
         <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : 'linear-gradient(#02294F, #090E10)',
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 5, sm: 10 },
            pb: { xs: 8, sm: 5 },
          }}
        >
            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography variant="h1" gutterBottom>
                {title}
            </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
            <Typography variant="h3" gutterBottom>
                {subTitle}
            </Typography>
            </Stack>
            </Container>
            </Box>
        </>
    )
}

export default BannerComponent
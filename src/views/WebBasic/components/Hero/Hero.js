/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TopGif from '../../../../resources/top.gif'

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box
            height={1}
            width={1}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
                component={'img'}
                src={TopGif}
                width={1}
                height={1}
                sx={{
                  filter:
                      theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                City Cat
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              There are new cats in the city. There are 3,000 unique generated NFTs. And they are ready to take over the world !
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              onClick={() => alert('Please connect Stacks wallet')}
            >
              Mint
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              {/*<Button*/}
              {/*  component={'a'}*/}
              {/*  href={'/docs/introduction'}*/}
              {/*  variant="outlined"*/}
              {/*  color="primary"*/}
              {/*  size="large"*/}
              {/*  fullWidth={isMd ? false : true}*/}
              {/*>*/}
              {/*  View documentation*/}
              {/*</Button>*/}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;

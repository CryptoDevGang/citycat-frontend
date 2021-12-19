import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export const mock = [
  {
    logo: 'https://streetcat.house/resource/twitter.svg',
    name: 'Twitter',
    link: 'https://twitter.com'
  },
  {
    logo: 'https://streetcat.house/resource/medium.svg',
    name: 'Medium',
    link: 'https://medium.com'
  },
  {
    logo: 'https://streetcat.house/resource/discord.svg',
    name: 'Discord',
    link: 'https://twitter.com'
  }
];

const Partners = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Welcome to the City Cat
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
        Join our community !
      </Typography>
      <br/>
      <br/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: { xs: 5, md: 30 },
          marginRight: { xs: 5, md: 30 }
        }}
      >
        <Grid container spacing={{ xs:5, md:12 }}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={4}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Link underline="none" component="a" target={'_blank'} href={item.link}>
                  <Card>
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 3,
                      }}
                    >
                      <Box
                        component={LazyLoadImage}
                        width={{ xs: 30, md: 60 }}
                        height={{ xs: 30, md: 60 }}
                        src={item.logo}
                        alt={item.name}
                        effect="blur"
                      />
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Partners;

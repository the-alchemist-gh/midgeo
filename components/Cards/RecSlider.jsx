import React from 'react';
import { getArtwork } from '../../lib/imageLoader';
import Image from 'next/image';
import Link from 'next/link';

import { createStyles, Paper } from '@mantine/core';
function RecSlider({ movie }) {
  const useStyles = createStyles((theme) => ({
    card: {
      height: 350,
      width: 240,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: "relative",
    },

    title: {
      // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: 32,
      marginTop: theme.spacing.xs,
    },

    category: {
      color: theme.white,
      opacity: 0.9,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));
  const { classes } = useStyles();
  const imgUrl = getArtwork(movie?.ref).portrait;

  return (
    <>
      <Link href='/movies/[ref]' as={`/movies/${movie.ref}`}>
        <Paper
          shadow="lg"
          p="xl"
          radius="sm"
          // mx="lg"
          // sx={{ backgroundImage: `url(${imgUrl})` }}
          className={classes.card}
        >
          <Image 
            src={imgUrl}
            fill
            className='rounded object-cover'
          />
          
          {/* <Button variant=" outlined" color="dark">
              Read article
          </Button> */}
        </Paper>
      </Link>
    </>
  );
}

export default RecSlider;

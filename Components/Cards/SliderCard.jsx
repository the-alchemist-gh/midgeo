import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getArtwork } from '../../lib/imageLoader';
import { createStyles, Paper, Title } from '@mantine/core';
function SliderCard({ movie }) {
  const useStyles = createStyles((theme) => ({
    card: {
      height: 400,
      width: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    title: {
      // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 800,
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
          style={{
            position: "relative"
          }}
        >
          <Image 
            src={imgUrl}
            fill
            className='rounded-md object-cover'
          />
          {/* <Button variant=" outlined" color="dark">
              Read article
          </Button> */}
        </Paper>
        <div className="bg-black/50 p-4">
          {/* <Text className={classes.category} fz="sm">
            {movie?.type}
          </Text> */}
          <Title order={3} fz="xl" className={classes.title}>
            {movie?.title}
          </Title>
        </div>
      </Link>
    </>
  );
}

export default SliderCard;

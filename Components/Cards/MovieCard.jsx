import React from 'react';
import { getArtwork } from '../../../../middleware-geogating/midgeo/lib/imageLoader';
import Link from 'next/link'
import Image from 'next/image';


import { createStyles, Paper, Text, Title } from '@mantine/core';
function MovieCard({ movie }) {
  const useStyles = createStyles((theme) => ({
    card: {
      height: 550,
      width: 440,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      '@media (max-width: 700px)': {
        height: 200,
        width: 120,
      },
    },

    title: {
      // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: 32,
      marginTop: theme.spacing.xs,
    },

    text: {
      backgroundColor: "rgba(24, 23, 31, 0.56)",
      position: "absolute",
      bottom: 0,
      left: 0,
      color: theme.white,
      fontSize: 15,
      borderRadius: "0 8px 0 5px",
      padding: "0.5rem 1rem"
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
  const calculatedTime = new Date(null);
  calculatedTime.setSeconds( movie?.duration ); //setting value in seconds
  console.log(calculatedTime)
  console.log(calculatedTime.toISOString())
  console.log(calculatedTime.toISOString().substring(11, 19))
  const duration = calculatedTime.toISOString().substring(11, 19);
  return (
    <>
      <Link href='/movies/[ref]' as={`/movies/${movie.ref}`}>
          <Paper 
            shadow="lg"
            p="xl"
            radius="md"
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
                alt={movie?.title}
                className='rounded-md object-cover'
              />
            <Text className={classes.text}>{duration}</Text>
          </Paper>
          <div className="py-3 hidden md:block ">
            <Title order={5} fz="md">
              {movie?.title}
            </Title>
          </div>
      </Link>
      
    </>
  );
}

export default MovieCard;

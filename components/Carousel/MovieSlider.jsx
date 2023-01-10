import { Carousel } from '@mantine/carousel';
import React from 'react';
import MovieCard from '../Cards/MovieCard';
import { useMediaQuery } from '@mantine/hooks';
import { Title } from '@mantine/core';

const movieRight = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" indicator w-6 h-6">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>

)

const movieLeft = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="indicator w-6 h-6">
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
  </svg>
)

function MovieSlider({ movies, genreTitle }) {
  const mobileScreen = useMediaQuery('(max-width: 700px')
  return (
    <div className="my-10">
      <div className="py-3 md:pl-12 pl-3">
        <Title order={3} size="h1">
          {genreTitle}
        </Title>
      </div>
      <Carousel
        withIndicators
        height={mobileScreen ? 210 : 600}
        slideSize="33.333333%"
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={1}
        breakpoints={[
          { maxWidth: 'md', slideSize: '30%' },
          { maxWidth: 'sm', slideSize: '10%', slideGap: "md", height: "250" },
        ]}
        nextControlIcon={movieRight}
        previousControlIcon={movieLeft}
        controlsOffset="100"
        controlSize={mobileScreen ? 20 : 40}
      >
        {movies?.map((movie, index) => (
          <div key={index}>
            <Carousel.Slide>
              <MovieCard  movie={movie} />
            </Carousel.Slide>
          </div>
        ))}
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}

export default MovieSlider;

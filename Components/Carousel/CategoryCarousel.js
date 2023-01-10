import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import CategoryBtn from './CategoryBtn';

const moveRight = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="indicator w-10 h-10">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
)

const moveLeft = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="indicator w-10 h-10">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
    </svg>

)

const categories = [
  "All",
  "New Releases",
  "Trending",
  "Family",
  "Short & Sweet",
  "Nollywood",
  "Ghallywood",
  "Hollywood",
  "Bollywood",
  "Category1",
  "Category2",
  "Category3",
  "Category4",
];

export default function CategoryCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = categories.map((item) => (
    
    <Carousel.Slide key={item}>
      <CategoryBtn item={item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
    //   breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slidesToScroll={mobile ? 1: 2}
      slideSize="1px"
      slideGap="md"
      breakpoints={[
        { maxWidth: 'md', slideSize: '30%' },
        { maxWidth: 'sm', slideSize: '20%', slideGap: 0 },
      ]}
      nextControlIcon={moveRight}
      previousControlIcon={moveLeft}
      align="start"
      controlsOffset="100"
      controlSize={40}
    >
      {slides}
    </Carousel>
  );
}
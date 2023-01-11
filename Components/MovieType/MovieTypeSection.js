import {React, useState} from 'react'
import MovieSlider from '../Carousel/MovieSlider';
// import ImageView from '../components/Carousel/ImageViewer'
import { dehydrate,useQuery,QueryClient } from '@tanstack/react-query'
import { getMovies } from '../../pages/api/getDetailedView';
import { useCountryDetails } from "../hooks/useCountryDetails"

export default function MovieTypeSection({genre}){
 const getCountry = useCountryDetails();
 console.log(getCountry);
    const { data, error,loading } = useQuery(["movies"], getMovies);
    if(loading === "loading"){
        return <div>Loading...</div>
    }

    if(error === "error"){
        return <div>Error...</div>
    }

    // const filterGenre = (genre) => {
    //      data?.filter((movie)=>{
    //         // const whatToSearch = ["genres"]
    //         return (
                
    //             // whatToSearch.some(item => movie[genres].toLowerCase().includes("Drama".toLowerCase()))
    //             movie.genres.includes(genre)
    
    //         ); 
            
    //     })
    // }

    function filterGenre(genre){
        return (
            data?.filter((movie)=>{
                // const whatToSearch = ["genres"]
                console.log(getCountry)
                return (
                    
                    // whatToSearch.some(item => movie[genres].toLowerCase().includes("Drama".toLowerCase()))
                    movie.genres.includes(genre)
        
                ); 
                
            })
        )
    }
    
        
    return(
            <section className='px-6 pb-0 md:pb-10 bg-black'>
                {
                    data?
                    (
                        <div>
                            <MovieSlider movies={filterGenre(genre)} genreTitle={genre} />
                        </div> 
                    ) : 
                    (
                        <div>
                            Data does not exist
                        </div>
                    )
                }
                
            </section>
        )

}

export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['characters'], getMovies)
    
    return { props: {
        dehydratedState: dehydrate(queryClient),
    } }
}

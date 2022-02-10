import React, { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( { category }) => {

    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
        <h3>{category}</h3>
        {/* AND  */}
        {loading && <p>Loading...</p> } 

        
            <div className='card-grid'>
                <br />

                {/* sin la lista  */}

                {
                    images.map( img =>(
                        <GifGridItem 
                            key= {img.id}
                            // img={ img }
                            { ...img } 
                        />
                    ))
                }

            {/* Con lista  */}
            {/* <ol>
                {
                    //    images.map( img =>(
                    //        <li key={img.id}> { img.title }</li>
                    //    ))

                    //desestructurando
                    images.map( ({id, title}) =>(
                        <li key={id}> { title }</li>
                    ))
                }
                </ol> */}

            </div>

        
        </>

    ) 

};

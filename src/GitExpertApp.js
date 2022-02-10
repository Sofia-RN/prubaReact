import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One piece']);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats, 'Pruebados']);
    //     // setCategories( [...categories, 'Prueba'] );
    //     // setCategories( ['Prueba', ...categories] ); //Asi se pone de primero Prueba
    // }

    return (
    <>
        <h2>GitExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />

        <ol>
            { 
                categories.map( category => 
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ) 
            }
        </ol>

    </>
    )
};

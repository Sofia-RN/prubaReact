import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //Para tomar los valores que tenga el input 
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Para que lo agregue solo si tiene dos letras o mas
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
            
        }
    }

  return (
    <>
        <form onSubmit={ handleSubmit }>
        <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>

    </>
  )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}

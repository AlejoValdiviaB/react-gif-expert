import { useState } from "react"
export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        // para que cuando presione tecla este caracter se añada
        //console.log(target);
        setinputValue( target.value );
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setinputValue('');       
    }
    return (
        <form onSubmit={ onSubmit /*  ( event ) => onSubmit( event ) */ } >
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}

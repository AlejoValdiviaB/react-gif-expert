import { useState } from "react"
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) =>{

        // Esto no se suele usar debido a que push MUTA el arreglo
        // categories.push('valorant'); 
        // setCategories([...Categories,'Valorant']);
        // setCategories( cat => [...cat, 'Valorant']);
        //setCategories(['Valorant',...Categories]); // agrega al inicio del arreglo
        if ( Categories.includes(newCategory)) return; // si ya existe NO lo incluyas
        setCategories([newCategory,...Categories])
    }

    return (
        <>
           
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={  (value) => onAddCategory(value) }
            />
    
            <button onClick = { onAddCategory }>Agregar</button>
            
            { 
                Categories.map( ( category  ) => (
                    <GifGrid 
                        key={ category } 
                        category = { category } 
                    />
                )) 
            }          
           
            
        </>
    )
}


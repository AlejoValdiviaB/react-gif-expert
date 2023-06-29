import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setimages(newImages);
        setIsLoading( false );
    }
    // dispara efecto cuando se produce algún cambio 
    // ahora quiero que una función se dispare solo una vez
    // no acepta promesas.
    useEffect( () => {
        getImages();      
    },[]) 
    // Segundo argumento es una lista de dependencias y si la dejo vacía es por que quiero
    // que solo se ejecute una sola vez

    return { 
            images,
            isLoading
    }
  
}

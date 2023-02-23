import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const GalleryContext = createContext();
export const GalleryProvider =({children})=>{
    const API_KEY = '6f6f671764a404a963fff60a370eae42'
    const API_SECRET = 'a27270f1e63c0554'
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchImages = async (query,category)=>{
        setLoading(true);
        setError(null);
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}per_page=20&format=json&nojsoncallback=1`
        if (category){
            url += `&tags=${category}`;
        }
        try {
            const response = await axios.get(url);
            setImages(response.data.photos.photo);
        } catch (error){
            setError(error.message);
        }
        setLoading(false);
    };
    useEffect(()=>{
        fetchImages('nature');
    },[]);
    return (
        <GalleryContext.Provider value={{ images, loading, error, fetchImages}}>
            {children}
        </GalleryContext.Provider>
    )
}
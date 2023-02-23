import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {GalleryContext} from "../context/GalleryContext";
import { response } from "express";
function Gallery(props){
    const [images, setImages] = useState([]);
    const {searchQuery} = useContext(GalleryContext);
    useEffect(()=>{
        let apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
        let apiKey = "6f6f671764a404a963fff60a370eae42";
        let category = props.category;
        if (category) {
            apiUrl += `&tags=${category}`;

        }
        if (searchQuery) {
            apiUrl += `&text=${searchQuery}`;
        }
        apiUrl += `&api_key=${apiKey}&per_page=20&format=json&nojsoncallback=1`;
        axios
        .get(apiUrl)
        .then((response)=>{
            setImages(response.data.photos.photo);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[searchQuery, props.category]);
    return (
        <div className="gallery">
            {images.map((image)=>(
                <img
                key={image.id}
                src={`https.//live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
                alt={image.title}
                />
            ))}

        </div>
    )
}
export default Gallery;
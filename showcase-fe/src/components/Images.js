import React from 'react'
import ImageCard from './ImageCard';
const Images = ({ images }) => {
  const imageList = images.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })

  return (
    imageList
  );
}

export default Images;

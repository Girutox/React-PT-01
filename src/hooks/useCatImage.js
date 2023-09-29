import { useState, useEffect } from "react";

const CAT_MEME_BASE_URL = 'https://cataas.com';
const CAT_MEME_URL = `${CAT_MEME_BASE_URL}/cat/says/`;

const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
  
    const firstThreeWords = fact.split(' ', 3).join(' ');
  
    fetch(`${CAT_MEME_URL}${firstThreeWords}?json=true`)
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.url);
      })
  }, [fact])

  return { imageUrl: `${CAT_MEME_BASE_URL}${imageUrl}` }
}

export default useCatImage;
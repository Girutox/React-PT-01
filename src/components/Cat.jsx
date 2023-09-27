import { useEffect, useState } from "react";
import { getRandomFact } from "../utils/utils";

const CAT_MEME_BASE_URL = 'https://cataas.com';
const CAT_MEME_URL = `${CAT_MEME_BASE_URL}/cat/says/`;

const useCatFact = () => {
  const [fact, setFact] = useState();

  useEffect(() => {
    getRandomFact().then(fact => setFact(fact));
  }, [])

  return { fact };
}

const Cat = () => {
  const { fact } = useCatFact();
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

  return <div>
    <h1>Prueba técnica 01</h1>
    <p>🐈 {fact}</p>
    <hr />
    {
      imageUrl && <img src={`${CAT_MEME_BASE_URL}${imageUrl}`} alt="Cat meme obtained through first three words" />
    }
  </div>
}

export default Cat;
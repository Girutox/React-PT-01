import useCatFact from "../hooks/useCatFact";
import useCatImage from "../hooks/useCatImage";

const Cat = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  const reloadFactHandler = () => {
    refreshFact();
  }  

  return <div>
    <h1>Prueba técnica 01</h1>
    <p>🐈 {fact}</p>
    <button onClick={reloadFactHandler}>Reload fact</button>
    <hr />
    {
      imageUrl && <img src={imageUrl} alt="Cat meme obtained through first three words" />
    }
  </div>
}

export default Cat;
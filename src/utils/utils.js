const CAT_FACT_URL = 'https://catfact.ninja/fact';

const getRandomFact = async () => {
  const response = await fetch(CAT_FACT_URL);
  const data = await response.json();
  return data.fact;
}

export { getRandomFact };
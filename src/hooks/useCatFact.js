import { useState, useEffect } from "react";
import { getRandomFact } from "../utils/utils";

const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact));
  }

  useEffect(() => {
    refreshFact();
  }, [])

  return { fact, refreshFact };
}

export default useCatFact;
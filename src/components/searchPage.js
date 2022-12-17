import { useState } from "react";
import { useEffect } from "react";

const searchPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      searchPage
      <div>{results}</div>
    </div>
  );
};

export default searchPage;

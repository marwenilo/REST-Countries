import React, { useEffect, useState } from "react";
import AllCountries from "./Api/GeCountriesApi";
import "./App.css";

function App() {
  const [myData, setData] = useState([]);
  const [isCancelled, setIsCancelled] = useState(true);
  useEffect(() => {
    isCancelled && AllCountries(myData, setData);
    console.log(myData);
    setIsCancelled(false);
  }, [myData, isCancelled]);
  return (
    <div>
      {myData &&
        myData.map((el, key) => (
          <div key={key}>
            <p>{el.name}</p>
            <p>{el.nativeName}</p>
            <p>{el.capital}</p>
            <p>{el.region}</p>
            <p>{el.subregion}</p>
            <p>{el.currencies}</p>
            <p>{el.timezones[0]}</p>
          </div>
        ))}
    </div>
  );
}

export default App;

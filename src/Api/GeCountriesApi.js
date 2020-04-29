import axios from "axios";
const AllCountries = async (myData, setData) => {
  const config = {
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "0db37c431bmsh516e1fab51e46a1p1193c4jsnf956fe99e375",
    },
  };

  try {
    const res = await axios.get(
      "https://restcountries-v1.p.rapidapi.com/all",
      config
    );

    const data = await res.data.map((el) => el.name);

    setData(data);

    console.log(myData);
  } catch (error) {
    console.log(error, "test");
  }
};
export default AllCountries;

import React, { useEffect, useState } from "react";
import AllCountries from "./Api/GeCountriesApi";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    margin: 10,
  },
  media: {
    marginLeft: 10,
    height: 64,
    width: 64,
  },
  myClass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
const flag = (e) => {
  e.toLowerCase();
  return `https://www.countryflags.io/${e}/flat/64.png`;
};
function App() {
  const [myData, setData] = useState([]);
  const [isCancelled, setIsCancelled] = useState(true);
  useEffect(() => {
    isCancelled && AllCountries(myData, setData);
    console.log(myData);
    setIsCancelled(false);
  }, [myData, isCancelled]);
  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <CssBaseline />
      {myData &&
        myData.map((el, key) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <CardContent className={classes.myClass}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {el.name}
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image={flag(el.alpha2Code)}
                    title={el.name}
                  />
                </CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  The nativeName of this country is {el.nativeName} and her
                  capital is {el.capital} located in {el.region} exactly at{" "}
                  {el.subregion}
                  and thier currencies is {el.currencies}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </Container>
  );
}

export default App;

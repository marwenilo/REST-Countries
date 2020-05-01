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
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
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
  search: {
    "& > *": {
      margin: theme.spacing(1),
      width: "79vw",
    },
  },
}));
const flag = (e) => {
  e.toLowerCase();
  return `https://www.countryflags.io/${e}/flat/64.png`;
};
function App() {
  const [myData, setData] = useState([]);
  const [isCancelled, setIsCancelled] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    isCancelled && AllCountries(myData, setData);
    console.log(myData);
    setIsCancelled(false);
  }, [myData, isCancelled]);
  const classes = useStyles();
  const filteredSearch = myData
    .sort((a, b) => b - a)
    .filter((item) => {
      return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  console.log(filteredSearch, "eee");
  return (
    <Container fixed>
      <form className={classes.search} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Container fixed className={classes.container}>
        <CssBaseline />
        {myData &&
          filteredSearch.map((el, key) => (
            <Card className={classes.root} key={key}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    The native name of this country is{" "}
                    <strong>{el.nativeName}</strong> and her capital is{" "}
                    <strong>{el.capital}</strong> located in {el.region} exactly
                    at
                    <strong> {el.subregion}</strong> and thier currencies is{" "}
                    <strong>{el.currencies}</strong>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Container>
    </Container>
  );
}

export default App;

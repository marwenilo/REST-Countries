import React, { useEffect, useState } from "react";
import AllCountries from "./Api/GeCountriesApi";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    margin:10
  },
  media: {
    marginLeft:10,
    height: 64,
    width:64  
  },
  myClass:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
  
});
const flag =(e)=>{
  e.toLowerCase()
  return `https://www.countryflags.io/${e}/flat/64.png`

}
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
   <>
     
    {myData && myData.map((el, key) => (

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
            the nativeName of this country is {el.nativeName} and her capital is {el.capital} located in {el.region} exactly at {el.subregion}
            and thier currencies is {el.currencies}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
    ))}
</>
  
  );
}

export default App;
 {/* {myData &&
        myData.map((el, key) => (
          <div key={key}>
            <p>{el.name}</p>
            <img src={flag(el.alpha2Code)} alt="flag"/>
            <p>{el.nativeName}</p>
            <p>{el.capital}</p>
            <p>{el.region}</p>
            <p>{el.subregion}</p>
            <p>{el.currencies}</p>
            <p>{el.timezones[0]}</p>
          </div>
        ))} */}
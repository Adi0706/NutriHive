import React from 'react';
import StoreBackground from '../Media/store.png';
import Logo from "../Media/Logo.png";
import {Link} from 'react-router-dom' ; 
import Footer from '../Components/Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Store() {


const StoreCardData = [
  {
    id:"1",
    CardName:"GYM SUPPLEMENT STORE",
    CardDesc:"",
    
  },
  {
    id:"2",
    CardName:"GENERAL HEALTH SUPPLEMENT STORE",
    CardDesc:"",
    
  },
  {
    id:"3",
    CardName:"AYURVEDIC SUPPLEMENT STORE",
    CardDesc:"",
    
  },
 
]


  return (
    <>
      <div className="relative">
      <img src={StoreBackground} alt="storebackground" className="w-full h-52 object-cover " />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Link to ='/'> <img
          src={Logo}
          alt="logo"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            cursor:"pointer"
          }}
        ></img> </Link>
         <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize:"10px"
          }}
        >
          WHERE NATURE MEETS NOURISHMENT.
        </p>
      </div>
      <div>
       
      </div>
      <section 
      
      >

        <div className="bg-zinc-50  h-96 flex items-center justify-around">

          {StoreCardData.map((item)=>{

          return(
        <Card sx={{ maxWidth: 345,maxHeight:350,borderRadius:8,boxShadow:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.CardName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">VISIT STORE </Button>
        
      </CardActions>
    </Card>
          )
    })}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Store;

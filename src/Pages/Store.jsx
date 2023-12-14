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
import wheyCard from '../Media/wheyCard.png';
import genSupStore from '../Media/genSupStore.png';
import ayurvedicSup from '../Media/ayurvedicSup.png';
function Store() {


const StoreCardData = [
  {
    id:"1",
    CardName:"GYM SUPPLEMENT STORE",
    CardImage:wheyCard,
    CardDesc:"Explore our Gym Supplement Store to discover premium products that can enhance your workout performance at the gym."
    
  },
  {
    id:"2",
    CardName:"GENERAL HEALTH SUPPLEMENT STORE",
    CardImage: genSupStore,
    CardDesc:"Fulfill your daily nutrition goals with our Health Supplement Store."
    
  },
  {
    id:"3",
    CardName:"AYURVEDIC SUPPLEMENT STORE",
    CardImage:ayurvedicSup,
    CardDesc:"Discover holistic well-being with our Ayurvedic Supplement Store – where ancient wisdom meets modern vitality."
    
  },
 
]


  return (
    <>
      <div className="relative">
      <img src={StoreBackground} alt="storebackground" className="w-full h-96 object-cover " />
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
            top: "43%",
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
        image={item.CardImage}
     
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <b>{item.CardName}</b> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
    {item.CardDesc}
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

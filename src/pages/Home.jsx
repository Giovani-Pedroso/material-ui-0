
import TourCard from "../components/TourCard.jsx";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json';
import { Typography } from '@mui/material';

export default function Home(){
    return(

        <Container sx={{marginY:6}}>
        {cities.map(city=>{

          return(
            <>
              <Typography
              variant='h4'
            component="h2"
            marginTop={5}
            marginBottom={3}
            >
              Top {city.name} Tours
            </Typography> 
             <Grid container spacing={6}>
                {city.tours.map((tour, index)=>{
                  return(
                    <TourCard key={index} tour={tour}/>
                  );
                })}
              </Grid>
            </>
          );

        })}
      
      </Container>
        
    );


}
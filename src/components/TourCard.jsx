import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {AccessTime} from "@mui/icons-material";
import {Link} from 'react-router-dom';

//to create our own styles
import {createTheme, ThemeProvider} from "@mui/material";

//outra biblioteca de icones
//npm install @mui/icons-material

const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        fontSize:11,
                    }
                },
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:9,
                    },
                },
            ]
        }
    }
    
});

export default function TourCard({tour}){

    return(
        <Grid item xs={3}>
          <Link to={`./${tour.name}`}>
          <ThemeProvider theme={theme}>
          <Paper elevation={6}>
            <img src={tour.image}
              className="img"
            />
            <Box paddingX={2}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                    display:"flex",
                    alignItems:"center"
                }}
              >
                <AccessTime sx={{width:12.5}}/>
                
                <Typography variant="body2" marginLeft={0.6} component="p">
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                    marginTop:4,
                    display:"flex",
                    alignItems:"center"
                }}
              >
                <Rating name="read-only" size="small" value={tour.rating} precision={0.5} readOnly />
                <Typography variant="body3" marginLeft={0.6} component="p">
                  {tour.rating}
                </Typography>
                <Typography variant="body3" marginLeft={0.6} component="p">
                  ({tour.numberOfReviews} reviews) 
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" marginLeft={0} component="h3">
                  From BR$ {tour.price}
                </Typography>
              </Box>
            </Box>
        </Paper>
        </ThemeProvider>
        </Link>
        </Grid>
    );

}

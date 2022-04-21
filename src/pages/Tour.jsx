import { Container, Typography, Box, BottomNavigation, Paper } from "@mui/material";
import Collage from '../components/ImageCollage';
import  Accordion  from "../components/Accortiun";

import {AccessTime,  RestoreIcon} from "@mui/icons-material";
export default function Tour (){

    return(
        <Container sx={{width:"80%"}}>
        <Typography variant="h3" component="h1" marginTop={4}>
             Welcome to the Land of luck
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img width={"80%"} src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/495000/495536-bellagio-casino.jpg"
            />
            <Collage/>
        </Box>
        <Box marginTop={3} marginBottom={10}>
            <Typography variant="h4" component="h2" marginTop={4}>
                 Perguntas Frequentes
            </Typography>
            <Accordion></Accordion>

        </Box> 
        </Container>
    )
}
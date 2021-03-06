import './App.css';
import Bar from './components/AppBar.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import  Tour from './pages/Tour';

function App() {
  return (
      <div className="App">
        <Bar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<Tour/>}/>
          </Routes>
          
        </Router>
    </div>     
  );
}

export default App;


{/*


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

*/}
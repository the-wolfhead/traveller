import React, {useState, useEffect } from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import {getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentposition(({ cords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude});
    })
  }, []);
  useEffect(() => {
    getPlacesData()
      .then((datat) => {
        console.log(data);
        setPlaces(data);
      })
  }, [coordinates, bounds]);
  return (
    <>
        <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%' }}>
        <Grid item xs={12} md = {4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
        </Grid>
      </>
  );
}

export default App;

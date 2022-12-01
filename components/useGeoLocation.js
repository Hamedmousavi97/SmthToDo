// Getting user geographical latitudes for the weather API

// Importing library
import { useState, useEffect } from "react";

// The main function
export default function useGeoLocation(lat, lon) {

  // Defining useState to save latitudes
  const [latLon, setLatLon] = useState(null);

  // Calling the function each time user launch the application 
  useEffect(() => {

    // Calling the function to collect user locatin 
    navigator.geolocation.getCurrentPosition(

      // Setting the latlon as an array with two attibutes for latitude and longitude coordination
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
      },

      // returning error 
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // returning the results
  return latLon;
}
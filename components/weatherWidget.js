//Weather widget rendering function 

//'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=be11f115fa95bc2e9b373241b0d4ebe8'
///weather?lat=${lat}&lon=${lon}&appid=be11f115fa95bc2e9b373241b0d4ebe8

///importing resources and styles for the code
import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../shared/globalStyle';
import useGeoLocation from './useGeoLocation'

// importing axios, a tool for calling for the APIs
import axios from "axios";
import UmbrellaAlarm from './umbrellaAlarm';

// fetch api with axios
const url = "https://api.openweathermap.org/data/2.5"

//setting the API call function
const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});

// the main fucntion
export default function UseWeather(lat, lon) {

  //useState for storing weather value
  const [weatherDetails, setWeatherDetails] = useState([]);

  //Getting location values from the predifined function
  const latLon = useGeoLocation();

  //every time there is a change in the location or application state fetch the API
  useEffect(() => {
    if (latLon) {
      fetchAPI(...latLon);
    }
  }, [latLon]);

  //Defining fetching process
  const fetchAPI = async (lat, lon) => {

    try {
    
      //API URL
      const endpoint =  `/weather?lat=${lat}&lon=${lon}&units=metric&appid=be11f115fa95bc2e9b373241b0d4ebe8`;
      
      //getting response
      const res = await callAPI.get(endpoint);
      
      //Storing data into the useState
      const weatherData = res.data
      setWeatherDetails(weatherData)

    //Catching errors    
    } catch (err) {

      console.log('ERR is'+err)
    }
  };

  //outputing the widget
  //Check if the location is set
  if (latLon) { 

    //check if the weather data is set
    if ( weatherDetails.length === 0 ) {

      // if there is not any values for the weather return waiting
      return( 
        <View>
          <View style={globalStyles.taskCards}>
            <Text style={globalStyles.textStyle} >
              Loading Data ....
            </Text>
          </View>
        </View>
      )

    } else {

      //the URL for the weader images
      const imageURL = `https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`
      console.log(imageURL)

      //returning the widget
      return(
        <View>

          {/* the carding style */}
          <View style={globalStyles.taskCards}>

            <View style={globalStyles.weatherFlex}>

              {/* Aligning style */}
              <View style={globalStyles.weatherAllign}>

                {/* city name */}
                <Text style={globalStyles.textStyle}>
                  {weatherDetails.name}
                </Text>

                {/* weather description */}
                <Text style={globalStyles.textStyle}>
                  {weatherDetails.weather[0].description}
                </Text>

                {/* the main temprature */}
                <Text style={globalStyles.textStyle}>
                  {Math.round(weatherDetails.main.temp)} ºC
                </Text>
              </View>

              {/* the image */}
              <Image style={globalStyles.weatherIcon} source={{uri:imageURL}}/>

            </View>  
          </View>

          {/* umbrella Alarm */}          
          <UmbrellaAlarm weatherCode={weatherDetails.weather[0].id} />
        </View>
      )
    }
    
  // returning error  
  } else {

    return (

      <View>
        <View style={globalStyles.taskCards}>
          <Text style={globalStyles.textStyle} >
            There was an error loading your location
          </Text>
        </View>
      </View>
    )
  }
}


                  // {/* the image */}
                  // <Image source={{uri:imageURL}}/>

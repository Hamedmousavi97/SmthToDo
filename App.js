// App.js is the main file for rendering the application 
// as the expo start it will call the App.js file and its function App()
//inside the App() function it will call the navigation bar function where the navigation 
// will call for other functions to render

//importing resources
import React, { useState } from 'react';
import TabBarBottom from './routes/tabbar';

//importing the font for the application 
import * as Font from 'expo-font'

//Apploading allow application to load resources before loading the first page 
import AppLoading from 'expo-app-loading'

//loading fonts
function getFonts() {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
}

// Showing error if there is a problem with the application 
const throwError = () => {
  return(
    <Text>
      There was an error loading the app
    </Text>
  )
}
// The main function
export default function App() {

  // The variable which check for the font being loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // if the font is loaded
  if (fontsLoaded) {

    // return the main application 
    return (
      <TabBarBottom />
    );

  // Else throw the error and try again to load the font  
  } else {
    return (
      <AppLoading 
        onError={throwError}
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}

//nuttom component for the use cross the application 

//importings 
import React from 'react'
import {Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../shared/globalStyle'

//the main function 
export default function FlatButton ({ text, onPress }) {

    return (

        //defining a touchable component
        <TouchableOpacity onPress={onPress}>

            {/* styles */}
            <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>

                    {/* returning the childern property */}
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

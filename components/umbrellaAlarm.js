//Umbrella alarm inform users as there is chance of rain or not to mind it

//importing requirements and styles
import React from 'react'
import { globalStyles } from '../shared/globalStyle'
import { View, Text } from 'native-base';

//The main function
export default function UmbrellaAlarm ({weatherCode}) {

    //the set of rainny weather codes from the JSON response of the API
    const rainCode = [
        200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 
        300, 301, 302, 310, 311, 312, 313, 314, 321, 
        500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 
        600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622 
    ]
    
    //check if the weather is rainny or not
    if (rainCode.includes(weatherCode) === true) {
        return (

            <View>
                {/* adding the card to the llist */}
                <View style={globalStyles.taskCards}>

                    {/* informing users */}
                    <Text style={globalStyles.textStyle}>
                        There is a chance of rain, don't forget your umbrella
                    </Text>
                </View>
            </View>    
        )

     } else {
        return (
            <View></View>
        )
    }
}
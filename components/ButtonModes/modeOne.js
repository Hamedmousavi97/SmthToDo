// Button renderer for task caards
//this is a set of five buttons

//importing libraries and assets
import React from 'react'
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Foundation, Entypo } from '@expo/vector-icons';
import {  } from '@expo/vector-icons';
import {View} from 'react-native'

// Global style 
import { globalStyles } from "../../shared/globalStyle";

// The main function
export default function ModeOne ({onPressDelete, onPressUpdateProgress, onPressUpdate, onPressFinish, onPressRestart}) {
    return (
        <View style={globalStyles.styleSet}>
            {/* rendering icons for buttons */}

            {/* delete button */}
            <MaterialIcons name='delete' size={22} style={globalStyles.icons} onPress={onPressDelete} />
            
            {/* Editing button */}
            <Foundation name="pencil" size={22} style={globalStyles.icons} onPress={onPressUpdate}  />

            {/* Marking as 50% done */}
            <Entypo name="progress-two" size={22} style={globalStyles.icons} onPress={onPressUpdateProgress} />
            {/* <MaterialCommunityIcons name="information" size={22} style={globalStyles.icons} onPress={onPressUpdateProgress}/> */}

            {/* Done button */}
            <Ionicons name="checkmark-circle" size={22} style={globalStyles.icons}  onPress={onPressFinish} />   

            {/* Restating button */}
            <MaterialCommunityIcons name="restart" size={22} style={globalStyles.icons}  onPress={onPressRestart} /> 
        </View>
    )
}
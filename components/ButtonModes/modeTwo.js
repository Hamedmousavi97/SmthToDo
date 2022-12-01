// Button renderer for hobby caards
//Four buttons 

//importing libraries and assets
import React from 'react'
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Foundation  } from '@expo/vector-icons';
import {View} from 'react-native'

// Global style 
import { globalStyles } from "../../shared/globalStyle";

// The main function
export default function ModeTwo ({onPressDelete, onPressUpdate, onPressFinish, onPressRestart}) {
    return (
        <View style={globalStyles.styleSet}>
            {/* rendering icons for buttons */}

            {/* delete button */}
            <MaterialIcons name='delete' size={22} style={globalStyles.icons} onPress={onPressDelete} />
            
            {/* Editing button */}
            <Foundation name="pencil" size={22} style={globalStyles.icons} onPress={onPressUpdate}  />

            {/* Done button */}
            <Ionicons name="checkmark-circle" size={22} style={globalStyles.icons}  onPress={onPressFinish} />   

            {/* Restating button */}
            <MaterialCommunityIcons name="restart" size={22} style={globalStyles.icons}  onPress={onPressRestart} /> 
        </View>
    )
}
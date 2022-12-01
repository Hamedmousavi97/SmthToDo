//main style for the card that output the hobbies on the screen with same style

//importing libraries and assets
import React from 'react';
import { Text, View, TextInput } from 'react-native';

//buttons
import ModeTwo from './ButtonModes/modeTwo';

//styles and icons
import { globalStyles } from '../shared/globalStyle';
import { FontAwesome } from '@expo/vector-icons'; 

// the main functions with the passed functions for rendering and handling buttons
export default function HobbyCard ({item, isEditing, updateHobby, handleEditChange,itemChecked,checked, saveEditedItem, onPressDelete, startUpdatingProcess, finishingHobby, onPressRestart }) {

    //for the progress bar there is a need to feel it based on the percent. 
    //times to 3.33 gives us a near value based on 30 day in month
    const hobbyProgress= '' + item.progress * 3.33 + '%'

    ///rendering on the screen
    return(
        <View>

            {/* the style is same with the task page */}
            <View style={globalStyles.taskCards}>

                {/* checking for editing. if the user is eddinting the card would be different */}
                <View> 

                    <View style={globalStyles.editingView}>

                        {/** if user is editing and hobby keys are same the output a textinput to collect new title */}
                        {isEditing && updateHobby.key === item.key ? (

                            // textinput
                            <TextInput
                                placeholder="Edit your Hobby title..."
                                style={globalStyles.editItemInput}
                                onChangeText={handleEditChange}
                                placeholderTextColor= '#FFFDED'
                                color = '#FFFDED'
                            />
                        ) : (

                            //else render the item title
                            <Text style={globalStyles.textStyle}
                                onPress={() => itemChecked(item.key, item.title)}
                                style={
                                    checked.length ? globalStyles.checkedItemText : globalStyles.textStyle
                                }>
                                    {item.title}
                            </Text>
                        )}

                        {/** checking if user is editing output a save icon */}
                        <View style={globalStyles.iconView}>
                            {isEditing && updateHobby.key === item.key ? (
                                <FontAwesome
                                    name="save"
                                    size={24}
                                    color="#FFB17A"
                                    onPress={() => saveEditedItem(item.key, item.title)}
                                />
                            ) : (
                                !checked.length && (
                                    <View>

                                    </View>
                                )
                            )}
                        </View>    
                    </View>
                    {/* progress bar */}
                    <View style={globalStyles.progressBar}>

                        {/* style for the progress bar */}
                        <View style={{width: hobbyProgress, backgroundColor:'#FCE762', height: '100%', alignItems:'center'}}>
                            <Text style={globalStyles.progressText}>
                                {item.progress} Days / 30 Days
                            </Text>
                        </View>
                    </View>
                </View>

                    {/** mode two is buttons for the hobbies with four buttons */}
                    <ModeTwo 
                        onPressDelete={() => onPressDelete(item.key)}
                        onPressUpdate={() => startUpdatingProcess(item)}
                        onPressFinish={() => finishingHobby(item)}
                        onPressRestart={() => onPressRestart(item)}
                    />
            </View>
        </View>
    )
}


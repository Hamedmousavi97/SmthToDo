//the component for styling the card that shows the tasks

//importing libraries and resources
import React from 'react';
import { Text, View, TextInput } from 'react-native';

//Style
import { globalStyles } from '../shared/globalStyle';
import { FontAwesome } from '@expo/vector-icons'; 

//the five buttons for managing and handling the tasks
import ModeOne from '../components/ButtonModes/modeOne';

//the main function with passing funcitons 
export default function TasksCards ({item, isEditing, updateTask, handleEditChange,itemChecked,checked, saveEditedItem, onPressDelete, startUpdatingProcess, finishingTask, onPressUpdateProgress, onPressRestart }) {

    //the progress bar has three mode 0%, 50%, 100%
    const taskProgress= '' + item.progress * 50 + '%'

    //rendering the card and style
    return(
        <View>

            {/* //style for the card */}
            <View style={globalStyles.taskCards}>

                <View> 

                    <View style={globalStyles.editingView}>
                        {/** if user is editing and task keys are same the output a textu=input to collect new title */}
                        {isEditing && updateTask.key === item.key ? (

                            // the text input for the editing process
                            <TextInput
                                placeholder="Edit your task here..."
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
                            {isEditing && updateTask.key === item.key ? (

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

                    {/* //progress bar styles and component */}
                    <View style={globalStyles.progressBar}>
                        
                        <View style={{width: taskProgress, backgroundColor:'#FCE762', height: '100%', alignItems:'center'}}>
                            <Text style={globalStyles.progressText}>
                                {taskProgress}
                            </Text>
                            
                        </View>
                    </View>
                </View>

                    {/** mode one is buttons for the tasks */}
                    <ModeOne 
                        onPressDelete={() => onPressDelete(item.key)}
                        onPressUpdate={() => startUpdatingProcess(item)}
                        onPressFinish={() => finishingTask(item)}
                        onPressUpdateProgress={() => onPressUpdateProgress(item)}
                        onPressRestart={() => onPressRestart(item)}
                    />
            </View>
        </View>
    )
}


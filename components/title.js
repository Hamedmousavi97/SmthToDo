//title componnet for both pages

//importing styles and resources
import React, {useState} from 'react'
import { View, Text, Modal } from 'react-native'

//Styles and icons
import { globalStyles } from '../shared/globalStyle'
import { MaterialIcons, Ionicons, MaterialCommunityIcons, Foundation, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

//the main function
export default function Title ({pageTitle}) {

    //modal visability state
    const [modalToggle, setModalToggle] = useState(false)

    //render the component
    return(

        // main style
        <View style={globalStyles.headerComponent}>

            {/* //getting header name from the main page */}
            <Text style={globalStyles.headerTitle}>
                {pageTitle}
            </Text>

            {/* // information button
            // as user touch this button there will be an overview of the page functionality and 
            // buttons usages */}
            <MaterialCommunityIcons name="information" size={22} style={globalStyles.infoButton} onPress={() => setModalToggle(true)} />

            {/* //the information for each page is deferent  */}
            { pageTitle == 'Home' ? 

                // showing the modal as user touch the button
                <Modal visible={modalToggle} animationType='slide'  transparent={true} >
                    <ScrollView style={globalStyles.infoModal}>
                        <View style={{alignItems:'flex-start'}}> 
                            {/* closing button */}
                            <MaterialIcons 
                                    name='close'
                                    size={38}
                                    style={globalStyles.infoModalCloseButton} 
                                    onPress={() => setModalToggle(false)} 
                            />

                            {/* introduction for the task page information modal */}
                            <Text style={globalStyles.textStyle}>
                                Welcome to SmthToDo. In this application you can manage your to do list and challenge yourself. {"\n"}
                                Use the add button to add items to your list.
                            </Text> 

                            {/* Editing button */}
                            <Foundation name="pencil" size={22} style={globalStyles.icons}  />
                            <Text style={globalStyles.textStyle}>
                                Use this button to edit an item on your list
                            </Text> 

                            {/* Marking as 50% done */}
                            <Entypo name="progress-two" size={22} style={globalStyles.icons} />
                            <Text style={globalStyles.textStyle}>
                                If you done half of work you can mark it with this button to remind you to do it later
                            </Text> 

                            {/* Done button */}
                            <Ionicons name="checkmark-circle" size={22} style={globalStyles.icons}   />   
                            <Text style={globalStyles.textStyle}>
                                Use this button to mark an item as fully done on your list
                            </Text> 

                            {/* Restating button */}
                            <MaterialCommunityIcons name="restart" size={22} style={globalStyles.icons} /> 
                            <Text style={globalStyles.textStyle}>
                                Use this button to reset an item on your list
                            </Text> 
                        </View>
                    </ScrollView>
                </Modal> 
            :

                // modal for the hobby page information 
                <Modal visible={modalToggle} animationType='slide' style={globalStyles.modal} transparent={true}>
                    
                    {/* modal style */}
                    <ScrollView style={globalStyles.infoModal}>
                        <View style={{alignItems:'flex-start'}}> 
                            {/* closing button */}
                            <MaterialIcons 
                                    name='close'
                                    size={38}
                                    style={globalStyles.infoModalCloseButton} 
                                    onPress={() => setModalToggle(false)} 
                            />

                            {/* introduction for the hobby page information modal */}
                            <Text style={globalStyles.textStyle}>
                                In this page you can challenge yourself to a thirty day challenge to add new skills
                                to your daily routines.
                            </Text> 

                            {/* Editing button */}
                            <Foundation name="pencil" size={22} style={globalStyles.icons}  />
                            <Text style={globalStyles.textStyle}>
                                Use this button to edit an item on your list
                            </Text> 

                            {/* Done button for each day, as user touch it it will add a day to their challenge */}
                            <Ionicons name="checkmark-circle" size={22} style={globalStyles.icons}   />   
                            <Text style={globalStyles.textStyle}>
                                Use this button to mark an item as done everyday for thirty day and you will see the magic at the end
                            </Text> 

                            {/* Restating button */}
                            <MaterialCommunityIcons name="restart" size={22} style={globalStyles.icons} /> 
                            <Text style={globalStyles.textStyle}>
                                Use this button to reset an item on your list
                            </Text> 
                        </View>
                    </ScrollView>    
                </Modal> 
            }
        </View>
    )
} 
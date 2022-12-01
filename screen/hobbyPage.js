// Challenge page

//importing related packages and materials
import React, { useState, useEffect} from 'react';

//used components
import { 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, FlatList, 
    SafeAreaView
} from 'react-native';
import Modal from "react-native-modal";

//Icons
import {MaterialIcons} from '@expo/vector-icons'

//Global style for all component
import {globalStyles} from '../shared/globalStyle'

//Internal component or external
//Card is for providing a style and component for each element on page
import HobbyCard from '../components/hobbyCard'

//Storage method for the application, AsyncStorage
import AsyncStorage from '@react-native-community/async-storage'

//Adding hobby function this is same function used in the task page
//becuse of similarity i kept it to reduce the app size
import AddTask from '../components/addTask';

//Page title: Vhallengee
import Title from '../components/title'

// The main function
export default function HobbyScreen () {
    
    //Saving current hobby in to an array with useState
    const [hobby, setHobby] = useState([
        {title:'This is your hobby', progress:0, isFinished:false, key:'1'},
    ])    
    
    //updating process useStates
    // Saving intial values of hobby to update it
    const [updateHobby, setUpdateHobby] = useState({key:null, title:null})
    
    //Managing status of editing process difualt value is false when the process start it changes to true
    const [isEditing, setisEditing] = useState(false)
    
    //checking items
    const [checkedItems, setCheckedItemChange] = useState([]);
    
    // Checking if needed to open the modal for adding hobbies. Difualt value is false
    //When it changes to true the modal must open        
    const [modalOpen, setModalOpen] = useState(false)
    
    //Defining the key for accessing the storage
    const STORAGE_KEY = '@save_Hobbies'

    //Saving data function 
    const saveData = async () => {
        try {

            //convert data to JSON format for saving in the storage
            const JSONHobby = JSON.stringify(hobby)

            //calling AsyncStorage to save data 
            await AsyncStorage.setItem(STORAGE_KEY, JSONHobby)

        } catch (e) {

            //Alerting users that they may have a problem with the storage process
            alert('Failed to save the data to the storage, You may reached your storage limit')

            //logging the error
            console.log("error saving hobby" +e)
        }    
    }    

    //Retrieve data from the storager
    const readData = async () => {
        try {

            // waiting to get all data from the storage
            const allHobbies = await AsyncStorage.getItem(STORAGE_KEY)

            //parse JSON format
            let parsedHobbies = JSON.parse(allHobbies)
      
            //checking null function error
            if (parsedHobbies !== null) {

                //updating the useState for tthe applicaiton process
                setHobby(parsedHobbies)
            }    
        } catch (e) {

            // Catching error in the process
            alert('Failed to fetch the data from storage')

            //logging the error
            console.log('Failed to fetch data'+e)
        }    
    }    

    //Calling functions as users load the application 
    useEffect(() => {
        readData()
    }, [])      
    
    //Saving data as a change made on it
    useEffect(() => {
        saveData()
    }, [hobby])      
    
    //Adding hobbies to the useState array 
    const addHobby = async (hobby) => {
        
        //Generating a random number for the key attribute
        hobby.key = Math.random().toString()
        hobby.isFinished = false
        hobby.progress = 0
        
        //adding the hobby to attributes
        setHobby((currentHobby) => {
            return[hobby, ...currentHobby]
        })    
        
        //Closing the modal
        setModalOpen(false)
    }    
    
    //Deleting hobby from the array
    const onPressDelete = (key) => {
        
        //Updating the useState
        setHobby((previousHobby) => {
            
            //retuurning the array without the hobby
            return previousHobby.filter(hobby => hobby.key != key)
        })    
    }    
    
    //Marking the finished hobby
    const finishingHobby = (item) => {
        
        //defining attributes
        item.key = item.key
        if (item.progress < 30) {
            item.progress = item.progress + 1 
            item.isFinished = false
        } else {
            item.progress = item.progress 
            item.isFinished = true
        }
        
        //deleting the item from the list
        onPressDelete(item.key)
        
        //adding the new item to the list
        setHobby((previousHobby) => {
            return [item, ...previousHobby]
        }) 
    }
    
    //function for restarting the hobby from 0
    const onPressRestart = (item) => {
        
        //Attributes
        item.key = item.key
        item.isFinished = false
        item.progress = 0
        
        //Deleting the previous one from the array
        onPressDelete(item.key)
        
        //adding the new item to the list
        setHobby((previousHobby) => {
            return [item, ...previousHobby]
        })        
    };
    
    //Starting update process
    const startUpdatingProcess = (item) => {
        
        //storing intial values
        setUpdateHobby({key:item.key, title:item.title})
        
        // Changing editing status to true
        return setisEditing(!isEditing)
    }    
    
    //here we got the intial value and saved and we changed the status the next step is to change 
    //the card to a mode for editing and passing edited variables to change
    
    // The editing process is same with the task page so some codes may be same
    
    //Handling data as user input them 
    const handleEditChange = title => {
        
        //updating intial values to the new ones
        setUpdateHobby({key: updateHobby.key, title});
    };    

    // Moving the changed value from the useState array to the original one
    const saveEditedItem = (key, title) => {

        //changing the value from the main aaray
        setHobby(previousHobby => {

            //returning the updated array
            return previousHobby.map(item =>
                item.key === updateHobby.key ? {key, title: updateHobby.title, isFinished: item.isFinished, progress:item.progress} : item,
            );     
        });    
        
        // Finishing the process and changing the state to false
        setisEditing(!isEditing);
    };    

    //chacking item
    const checked = checkedItems.filter(
        checkedItem => checkedItem.key === item.key,
    );        

    //checking items and removing the value from the useState
    const itemChecked = (key, title) => {
        const isChecked = checkedItems.filter(checkedItem => checkedItem.key === key);

        // if isChecked full
        isChecked.length
            ? 

            // delete item from checked items state (uncheck)
            setCheckedItemChange(previousItem => {
                return [...previousItem.filter(item => item.key !== key)];
            })    

            : // Add item to checked items state
            checkedItemChange(previousItem => {
                return [...previousItem.filter(item => item.key !== key), {key, title}];
            }    
        );    
    };    

    
    //rendering page
    return(

        // safe area for devices screen
        <SafeAreaView style={globalStyles.container}>

            {/* Page title */}
            <Title pageTitle='Challenge' />

            {/** modal is an over page on main page that provide a pop up screen to add a new hobby to the list */}
            <Modal visible={modalOpen} animationType='slide' style={globalStyles.modal} transparent={true}>

                {/* dismissing the Keyboard as user touch any point on the screen */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={globalStyles.modalContent}>

                        {/* close icon */}
                        <MaterialIcons 
                            name='close'
                            size={45}
                            style={globalStyles.modalClose} 
                            onPress={() => setModalOpen(false)} 
                        />

                        {/** Adding the hobby / Calling the function */}
                        <AddTask addTask={addHobby}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            {/* rendering hobbies in a list */}
            <View style={{maxHeight:"79%"}}>
        
                {/* flat list help to render each item on the hobby array with a specidic attributes */}
                <FlatList
                    data={hobby}
                    renderItem={({item}) => (
                        <HobbyCard 
                            item = {item}
                            isEditing = {isEditing}
                            updateHobby = {updateHobby}
                            handleEditChange = {handleEditChange}
                            itemChecked = {itemChecked}
                            checked = {checked}
                            saveEditedItem = {saveEditedItem}
                            onPressDelete = {onPressDelete}
                            finishingHobby = {finishingHobby}
                            onPressRestart = {onPressRestart}
                            startUpdatingProcess = {startUpdatingProcess}
                        />
                    )}>  
                </FlatList>
            </View>
            
            {/** adding hobby buttons */}
            <View style={globalStyles.addBottom}>
                <MaterialIcons 
                    name='add'
                    size={45}
                    onPress={() => setModalOpen(true)}  
                    style={globalStyles.modalToggle} 
                />
            </View>
        </SafeAreaView>
    )
}






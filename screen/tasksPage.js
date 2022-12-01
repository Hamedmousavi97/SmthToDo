//importing related packages and materials
import React, { useState, useEffect} from 'react';

//Components
import { 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, FlatList, 
    SafeAreaView
} from 'react-native';

import Modal from "react-native-modal";

//Internal component or external
//Task is for providing a style and component for each element on page
import TasksCards from '../components/taskCard';

//Icon
import {MaterialIcons} from '@expo/vector-icons'

//Global style for all component
import {globalStyles} from '../shared/globalStyle'

//Adding task function
import AddTask from '../components/addTask';

//Weather Api and component
import UseWeather from '../components/weatherWidget';

//Page title
import Title from '../components/title'

import AsyncStorage from '@react-native-community/async-storage'

export default function TasksScreen () {

    const STORAGE_KEY = '@save_tasks'

    //Saving current tasks in to an array
    const [task, setTask] = useState([
        {title:'This is your first To do', progress:0, isFinished:false, key:'1'},
    ])

    const saveData = async () => {
        try {
            const JSONtask = JSON.stringify(task)
            await AsyncStorage.setItem(STORAGE_KEY, JSONtask)
            console.log('data saved successfully' + JSONtask)
        } catch (e) {
            alert('Failed to save the data to the storage, You may reached your storage limit')
            console.log("error saving tasks" +e)
        }
      }

    const readData = async () => {
        try {
            const allTasks = await AsyncStorage.getItem(STORAGE_KEY)

            let parsedTasks = JSON.parse(allTasks)
      
            if (parsedTasks !== null) {
                setTask(parsedTasks)
          }
        } catch (e) {
            alert('Failed to fetch the data from storage')
            console.log(e)
        }
    }

    useEffect(() => {
        readData()
      }, [])  

      useEffect(() => {
        saveData()
       }, [task])     

    //Adding task to the task array 
    addTask = async (task) => {
        task.key = Math.random().toString()
        task.isFinished = false
        task.progress = 0
        setTask((currentTask) => {
            return[task, ...currentTask]

        })
        //saveData()
        setModalOpen(false)
        console.log('task is ' + JSON.stringify(task))

    }

    //Deleting tasks from task array
    const onPressDelete = (key) => {
        console.log('Key is   :   '+key)
        setTask((prevTask) => {
          return prevTask.filter(task => task.key != key)
        })
    }
    

    // Checking if needed to open the modal for adding tasks difualt value is false
    //When it changes to true the modal must open        
    const [modalOpen, setModalOpen] = useState(false)

    // Saving intial values of task to update it
    const [updateTask, setupdateTask] = useState({key:null, title:null})

    //Managing status of editing process difualt value is false when the process start it changes to true
    const [isEditing, setisEditing] = useState(false)

    //checking items
    const [checkedItems, setCheckedItemChange] = useState([]);

    //Starting update process
    const startUpdatingProcess = (item) => {
        console.log(`updating process started key is ${item.key} and title is ${item.title}`)

        //storing intial values
        setupdateTask({key:item.key, title:item.title})

        // Changing editing status to true
        return setisEditing(!isEditing)
    }
    //here we got the intial value and saved and we changed the status the next step is to change 
    //the card to a mode for editing and passing edited variables to cahnge

    //Handling data as user input them 
    const handleEditChange = title => {
        
        //updating intial values to the new ones
        setupdateTask({key: updateTask.key, title});
    };

    // Moving the changed value from the updateTask array to the original one
    const saveEditedItem = (key, title) => {

        //changing the value from the main aaray
        setTask(prevTask => {
            return prevTask.map(item =>
                item.key === updateTask.key ? {key, title: updateTask.title, isFinished: item.isFinished, progress:item.progress} : item,
            ); 
        });
        
        // Finishing the process and changing the state to false
        setisEditing(!isEditing);

        //saveData()
    };

    //chacking item
    const checked = checkedItems.filter(
        checkedItem => checkedItem.key === item.key,
    );    

    //checking items
    const itemChecked = (key, title) => {
        const isChecked = checkedItems.filter(checkedItem => checkedItem.key === key);

        // if isChecked full
        isChecked.length
            ? 
            // delete item from checked items state (uncheck)
            setCheckedItemChange(prevItems => {
                return [...prevItems.filter(item => item.key !== key)];
            })


            : // Add item to checked items state
            checkedItems(prevItems => {
                return [...prevItems.filter(item => item.key !== key), {key, title}];
            }
        );
    };

    const finishingTask = (item) => {
        item.key = item.key
        item.isFinished = true
        item.progress = 2
        onPressDelete(item.key)
        setTask((prevTask) => {
            return [item, ...prevTask]
        }) 

        //saveData()

        console.log('item is '+JSON.stringify(item))

    }


    const onPressUpdateProgress = (item) => {
        item.key = item.key
        item.isFinished = false
        item.progress = 1
        onPressDelete(item.key)
        setTask((prevTask) => {
            return [item, ...prevTask]
        })        
        // saveData()


        console.log('item is '+JSON.stringify(item))

    };

    const onPressRestart = (item) => {
        item.key = item.key
        item.isFinished = false
        item.progress = 0
        onPressDelete(item.key)
        setTask((prevTask) => {
            return [item, ...prevTask]
        })        
        // saveData()
    };

    
    //rendering page
    return(
        <SafeAreaView style={globalStyles.container}>
            {/* Title */}
            <Title pageTitle='Home' />

            {/** modal is an over page on main page that provide a pop up screen to add a new task to the list */}
            <Modal visible={modalOpen} animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={45}
                            style={globalStyles.modalClose} 
                            onPress={() => setModalOpen(false)} 
                        />
                        {/** Adding the task / Calling the function */}
                        <AddTask addTask={addTask}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <View style={{maxHeight:"79%"}}>
        
                {/** rendering the weather widget */}
                <UseWeather/>
                {/* <StockWidget/> */}

                {/* flat list help to render each item on the task array with a specidic attributes */}
                <FlatList
                    data={task}
                    renderItem={({item}) => (
                        <TasksCards 
                            item = {item}
                            isEditing = {isEditing}
                            updateTask = {updateTask}
                            handleEditChange = {handleEditChange}
                            itemChecked = {itemChecked}
                            checked = {checked}
                            saveEditedItem = {saveEditedItem}
                            onPressDelete = {onPressDelete}
                            startUpdatingProcess = {startUpdatingProcess}
                            finishingTask = {finishingTask}
                            onPressUpdateProgress = {onPressUpdateProgress}
                            onPressRestart = {onPressRestart}
                        />
                    )}>
                        
                </FlatList>
                
            </View>
            
            
            {/** adding task buttons */}
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






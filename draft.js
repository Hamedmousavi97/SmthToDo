

//updates
/*

import UpdateTask from '../components/updateTask';


    const updateTaskTitleTest = (key) => {
        console.log('edit 0 key is   ' + key)
        setTask((prevTask) => { 
            return prevTask.map((task , i) => {
                // return new task
                return task
            })
        })
    }  

    const updateTaskDetails = (key) => {
        console.log('edit 1 key is   ' + key)
        this.useState(updatingComponentID(key))
        // state key o ba key save kone 
        setUpdateModalOpen(true)
             setTask((prevTask) => { 
             return prevTask.map((task , i) => {
                 
                 return task
             })
         })
    }

    const updatingComponentID = () => {

    }

    const updateTask = (value) => {
        console.log('edit2 value is   ' + value)
        
    }

            <Modal visible={updateModalOpen} animationType='slide' style={globalStyles.modal} transparent={true}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={45}
                            style={{...globalStyles.modalToggle, ...globalStyles.modalClose}} 
                            onPress={() => setUpdateModalOpen(false)} 
                        />
                        <UpdateTask  updateTask={updateTask()} title={}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>



            import React from 'react';
import { Button, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { globalStyles} from '../shared/globalStyle'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/Button'

const taskSchema = yup.object({
    title: 
        yup.string()
        .required()
        .min(4),
        
})

export default function UpdateTask ({updateTask}) {
    return(

        <View  >
            <Formik 
                initialValues={{title:''}} 
                validationSchema={taskSchema}
                onSubmit={(values, action) => {
                    updateTask(values)
                    action.resetForm()
                }} 
            >
                {props => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Change your Task Title'
                            onChangeText={props.handleChange('title')} 
                            value={props.values.title}    
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
 */

 /**
  *               
  * fontawesome                                  name="pencil"
                                                size={20}
                                                color="blue"
                                                onPress={() => startUpdatingProcess(item.key, item.title)}
                                            />

  */
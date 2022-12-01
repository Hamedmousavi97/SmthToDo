// Module for handling inputs for adding tasks and hobbies

//importing libraries
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles} from '../shared/globalStyle'

// Formik is a module for rendering forms and text inputs
import { Formik } from 'formik'

// Form validation tool
import * as yup from 'yup'
import FlatButton from '../shared/Button'

// Defining rules for the adding title in yup. 
// The field required a string input with min of 4 and max length of 18
const taskValidationSchema = yup.object({
    title: 
        yup.string()
        .required()
        .min(4).max(18),      
})

// The main function which will get the adding function from the other file
export default function AddTask ({addTask}) {
    return(

        <View  >
            <Formik 

                // the initial value for the input
                initialValues={{title:''}} 

                // Validation scheme
                validationSchema={taskValidationSchema}

                // on submit function
                onSubmit={(values, action) => {
                    addTask(values)
                    action.resetForm()
                }} 
            >

                {/* outputign the text input */}
                {props => (

                    <View>
                        <TextInput 

                            // max lenght for disabling the input
                            maxLength={20}

                            //style
                            style={globalStyles.input}
                            placeholderTextColor='#FFFDED'

                            //Placeholder
                            placeholder='Please enter your Title'

                            //handling functions on change of the input
                            onChangeText={props.handleChange('title')} 

                            //storing value
                            value={props.values.title}    
                            onBlur={props.handleBlur('title')}
                        />

                        {/*handling error text */}
                        <Text style={globalStyles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        {/* submit button */}
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}
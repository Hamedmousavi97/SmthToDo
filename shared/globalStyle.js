//React Native stylesheet
// All styles for the application is provided here

//importing
import {StyleSheet} from 'react-native'

//Main used colours in the application
const colors = {
    originalPurple: '#201335',
    elementPurple: '#4F4789',
    elementYellow: '#FCE762',
    elementOrange: '#FFB17A',
    FontVanilla: '#FFFDED',
    borders: '#707070'
}

//Applicaiton StyleSheet components
export const globalStyles = StyleSheet.create({

    // MAin and background of the application
    container: {
        flex: 1,
        backgroundColor:colors.originalPurple,
    },

    //App bottom bar style navigation
    tabBar:{
        height:100,
        marginTop:50,
    },

    // Task cards style
    taskCards:{
        width: '97%',
        height:140,
        backgroundColor:colors.elementPurple,
        marginHorizontal: 15,
        marginVertical:10,
        borderWidth:1,
        borderColor:colors.borders,
        borderRadius:12,
        flexDirection: 'column', 
        alignSelf: 'center'
    },

    //Texts Main style
    textStyle:{
        fontFamily: 'nunito-regular',
        fontSize:26,
        color:colors.FontVanilla,
        marginTop:10,
        marginHorizontal:15
    },

    //Card Icons
    icons:{
        color:colors.elementOrange,
        marginTop:15,
        marginHorizontal:20,
        flex:1
    },

    //icons styleset and view component style
    styleSet:{
        flexDirection:'row'
    },

    // Modal Add button style
    modalToggle:{
        flex:1,
        marginBottom:10,
        borderRadius:35,
        borderWidth:1,
        borderColor:colors.borders,
        padding:10,
        alignSelf:'flex-end',
        color:colors.elementOrange,
        backgroundColor:colors.elementPurple,
        overflow: 'hidden',
        position: 'absolute',
        right: '5%',
        top: '90%',
    },

    // Modal close button 
    modalClose:{
        margin:50,
        marginBottom:10,
        borderRadius:35,
        borderWidth:1,
        borderColor:colors.borders,
        padding:10,
        alignSelf:'center',
        color:colors.elementOrange,
        backgroundColor:colors.elementPurple,
        overflow: 'hidden',
    },

    // inside modal content style 
    modalContent:{
        flex:1,   
        backgroundColor:colors.elementPurple,
        marginVertical:90,
        marginHorizontal:15,
        alignItems:'center',
        borderRadius:12,
        borderColor: colors.borders,
        borderWidth: 1
    },

    // modal submit button style
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:colors.elementOrange
    },

    // inside text for the modal submit button
    buttonText:{
        color:colors.FontVanilla,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    },

    // modal text input style
    input:{
        borderWidth:1,
        padding:10,
        fontSize:18,
        borderRadius:6,
        borderColor:'#ddd',
        width:300,
        color:colors.FontVanilla
    },

    // showing error in modal
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    },

    // weather icon image style
    weatherIcon:{
        margin:8,
        flex:1,
        marginTop:12
    },

    // aliging weather detail in the card
    weatherAllign:{
        flexDirection:'column'
    },

    // flexing the weather widget 
    weatherFlex:{
        flexDirection: 'row'
    },

    //Header style
    headerComponent:{
        marginHorizontal:5,
        marginTop:0,
        flexDirection: 'row'
    },

    // info button style
    infoButton:{
        marginLeft: 15,
        color: colors.elementOrange,
        marginTop: "5%",
    },

    //information modal style
    infoModal:{
        flex:1,   
        backgroundColor:colors.elementPurple,
        marginVertical:80,
        marginHorizontal:15,
        padding:5,
        borderRadius:12
    },

    //Close button for info modal
    infoModalCloseButton:{        
        margin:10,
        borderRadius:35,
        borderWidth:1,
        borderColor:colors.borders,
        padding:10,
        alignSelf:'center',
        color:colors.elementOrange,
        backgroundColor:colors.elementPurple,
        overflow: 'hidden',
    },

    //header title style
    headerTitle:{
        fontFamily:'nunito-bold',
        fontSize:44,
        left:5,
        color:colors.FontVanilla
    },

    //editing text input styles
    editItemInput: {
        padding: 0,
        fontSize: 26,
        margin: 8,    
    },

    // editing field style with flex direction for the save button
    editingView:{
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 5
    },

    // save icon button 
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 70,
        marginTop:8
    },

    // check item style
    checkedItemText: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        color: 'green',
        color: colors.FontVanilla
    },    

    // item list style
    listItemText: {
        fontSize: 18,
    },

    //progress bar style 
    progressBar: {
        alignSelf: 'center',
        marginVertical: 10,
        height: 20,
        width: '90%',
        backgroundColor: colors.originalPurple,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    },

    progressText: {
        color: colors.elementPurple,
        
    }
    
})

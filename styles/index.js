import React from 'react';
import { StyleSheet } from 'react-native';


const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        padding:20 
    },
    headerText:{
        alignSelf:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    textInput:{
        borderColor:'black',
        borderBottomWidth:2
    },
    btn:{
        padding:20,
        alignSelf:'center',
        backgroundColor:'black',
        marginTop:20,
        borderRadius:30
    },
    btnText:{
        color:'white',
        alignSelf:'center',
        textTransform:'uppercase',
    }
})



export default styles
import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from '../styles'
import auth from '@react-native-firebase/auth'
import { useState } from 'react'


const Home = () => {

    const [confirm,setConfirm]=useState(null)
    const [telephoneNumber,setTelephoneNumber]=useState('')


    const SignIn= async ()=>{

        if (telephoneNumber.length>0){
            try{
                const confirmation=await auth().signInWithPhoneNumber(telephoneNumber)
    
                setConfirm(confirmation)
    
    
            }
    
            catch(error){
                alert(error)
            }
        
        }
        else{
            alert("Enter a Telephone number")
        }
        
    }


   

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Input your phone Number
            </Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value)=>setTelephoneNumber(value)}
                />
            </View>

            <TouchableOpacity style={styles.btn} onPress={SignIn}>
                <Text style={styles.btnText}>Verify Phone Number</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home
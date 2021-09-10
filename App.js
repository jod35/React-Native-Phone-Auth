import  React from 'react'
import {
  Text,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import OTP from './screens/OTP'
import LoggedIn from './screens/LoggedIn'

const stack=createNativeStackNavigator()


const App=()=>{
  return(
    <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="OTP" component={OTP} />
          <stack.Screen name="LoggedIn" component={LoggedIn}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}



export default App
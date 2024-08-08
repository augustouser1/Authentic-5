import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { LoginNavigation } from './Login.navigation';

export default function Navigation(){
   return (
       <NavigationContainer>
        <LoginNavigation/>
       </NavigationContainer>
   );

}

import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, } from "react-native";
import { ComponentButtonInterface } from "../../Components/";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyle";
import { LoginTypes } from "../../navigations/Login.navigation";
import { TextInput } from "react-native-gesture-handler";

export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Login({ navigation }: LoginTypes) {
    const image = require('../../assets/Autscreen.png')
    const logo  = require('../../assets/image2.png')
     
    const[data, setData] = useState<IAuthenticate>();
    async function handleSignIn(){
        if(data?.email && data.password){
            console.log(data)
        }else{
         Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister (){
       navigation.navigate("Register")
    }
    function handleChange (item: IAuthenticate){
         setData({  ...data, ...item});

    }







    return (
       <View style={styles.Image}> 
       <ImageBackground source={image}>
         <KeyboardAvoidingView>
            <Text style={styles.title}>Login</Text>
            <View style={styles.row}>
                <TextInput
                     placeholderTextColor={'#000000'}
                     style={styles.input}
                     placeholder="Email"
                     keyboardType ="email-address"
                     autoCapitalize="none"
                     onChangeText={(i) => handleChange({email: i})}
                />
            </View>
            <View style={styles.row}>
               <TextInput
                 placeholderTextColor={'#000000'}
                 style={styles.input}
                 placeholder="Senha"
                 secureTextEntry={true}
                 autoCapitalize="none"
                 onChangeText={(i) => handleChange({password: i})}
               />
               </View>
             <ComponentButtonInterface title='Login' type='primary' onPressI={handleSignIn} />
             <ComponentButtonInterface title='Cadastre-se' type='secondary' onPressI={handleRegister} />
           </KeyboardAvoidingView>
           </ImageBackground>
            </View>





    );


}
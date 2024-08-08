import React, {useState} from "react";
import {KeyboardAvoidingView,ImageBackground, Text, TouchableOpacity, View, Image, Alert, TextInput} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import {colors} from "../../styles/globalstyle";
import { LoginTypes } from "../../navigations/Login.navigation";
import { styles } from "./styles";
import { ComponentButtonInterface } from "../../Components";
export interface IRegister{
   name?: string
   email?: string
   password?: string
}

export function Register({navigation}: LoginTypes) {
    const image = require('../../assets/Autscreen.png')
    const [data, setData] =useState<IRegister>();
    async function handleRegister(){
      if (data?.email && data.name && data.password){
        console.log(data)
      }else{
        Alert.alert("Preencha todos os campos");
      }
    }
    function handleGoBack(){
      navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
      setData({ ...data, ... item});
    }
 return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={styles.Text}>Cadastre-se</Text>
          <View style={styles.row}>
            <TextInput
            placeholderTextColor={colors.primary}
            style={styles.input}
            placeholder="Nome"
            onChangeText={(i) => handleChange ({ name:i })}
            />
          </View>
          <View style={styles.row}>
          <TextInput
            placeholderTextColor={colors.primary}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange ({ email:i })}
            />
          </View>
          <View style={styles.row}>
           <TextInput
             placeholderTextColor={colors.primary}
             style={styles.input}
             placeholder="Senha"
             secureTextEntry={true}
             autoCapitalize="none"
             onChangeText={(i) => handleChange ({ password:i })}
          />
          </View>
          <ComponentButtonInterface title='Salvar' type='secondary' onPressI={handleRegister}/>
          <ComponentButtonInterface title='Voltar' type='primary' onPressI={handleGoBack}/>







        </KeyboardAvoidingView>
      </View>
 
 )

}
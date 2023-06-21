import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import Logo from '../../assets/images/Logo.png'
import Celular from '../../assets/images/Celular.png'
import Google from '../../assets/images/Google.png'
import Facebook from '../../assets/images/Facebook.png'

import { styles } from './login'

export const Login = () => {
   return (
      <View style={styles.container}>
         <Image source={Logo} />
         <Text style={styles.title}>
            Milhares de músicas de Graça no Spotify
         </Text>
         <TouchableOpacity style={styles.btn_free} >
            <Text style={styles.text_btn_free}>Entre de graça</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
            <Image source={Celular} />
            <Text style={styles.textStyle}>Continue com celular</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
            <Image source={Google} />
            <Text style={styles.textStyle}>Continue com Google</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
            <Image source={Facebook} />
            <Text style={styles.textStyle}>Continue com Facebook</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.conta}>
            <Text style={styles.textStyle}>Criar conta</Text>
         </TouchableOpacity>
      </View>
   )
}

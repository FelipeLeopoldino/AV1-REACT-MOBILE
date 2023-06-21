import {
   TouchableOpacity,
   View,
   Image,
   Text,
   SafeAreaView,
   TextInput
} from 'react-native'
import Arrow from '../../assets/images/Arrow.png'
import Eye from '../../assets/images/Eye.png'
import { styles } from './login2'
export const Login2 = () => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity>
               <Image source={Arrow} style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.text_header}>Entrar</Text>
            <Text></Text>
         </View>

         <View style={styles.input}>
            <View style={styles.email}>
               <Text style={styles.text_input}>E-mail ou nome de usuário</Text>
               <TextInput style={styles.campo_input} />
            </View>
            <View style={styles.senha}>
               <Text style={styles.text_input}>Senha</Text>
               <TextInput style={styles.campo_input} secureTextEntry />
               <TouchableOpacity>
                  <Image source={Eye} style={styles.eye} />
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.btn}>
            <TouchableOpacity style={styles.btn_entrar}>
               <Text style={styles.btn_text}>Entrar</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.btn_semSenha}>
            <TouchableOpacity style={styles.btn_senha}>
               <Text style={styles.text_semSenha}>Entrar sem senha</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   )
}

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%'
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 20,
      marginHorizontal: 10
   },
   arrow: {
      transform: [{ rotate: '90deg' }]
   },
   text_header: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 50,
      marginRight: 40
   },
   input: {
      marginHorizontal: 10
   },
   email: {
      marginBottom: 10
   },

   text_input: {
      color: '#fff',
      fontSize: 20
   },
   campo_input: {
      backgroundColor: '#414141',
      width: '100%',
      height: 50,
      marginTop: 4,
      borderRadius: 3
   },
   senha: {
      marginBottom: 50
   },
   btn: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center'
   },
   btn_entrar: {
      alignItems: 'center',
      backgroundColor: '#414141',
      padding: 13,
      width: 100,
      borderRadius: 50,
      marginBottom: 20
   },
   btn_text: {
      color: '#000',
      fontWeight: 'bold'
   },
   btn_semSenha: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center'
   },
   btn_senha: {
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#414141',
      padding: 3,
      width: 150,
      borderRadius: 50
   },
   text_semSenha: {
      color: '#ddd'
   },
   eye: {
      width: 45,
      height: 45,
      position: 'absolute',
      bottom: 0,
      right: 4
   }
})

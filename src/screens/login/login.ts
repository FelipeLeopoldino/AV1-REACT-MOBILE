import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      alignItems: 'center'
   },
   title: {
      color: '#fff',
      fontSize: 32,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingLeft: 41,
      paddingRight: 30
   },
   btn_free: {
      backgroundColor: '#4caf50',
      borderRadius: 50,
      marginHorizontal: 15,
      marginTop: 27,
      height: 54,
      width: 384,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
   },
   text_btn_free: {
      fontSize: 20,
      fontWeight: 'bold'
   },
   btn: {
      borderRadius: 50,
      marginHorizontal: 15,
      marginTop: 27,
      height: 54,
      width: 384,
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      gap: 10,
      borderWidth: 1,
      borderColor: '#fff'
   },
   textStyle: {
      color: '#fff'
   },
   conta: {
      color: '#fff',
      fontSize: 18,
      marginTop: 18
   }
})

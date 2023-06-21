import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row'
   },
   title: {
      color: '#fff',
      fontSize: 32,
      marginRight: 36,
      marginLeft: 27
   },
   header: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 71
   },
   img: {
      marginRight: 12
   },
   playlist: {
      flexDirection: 'row'
   },
   disco1: {
      width: 151,
      marginLeft: 27,
      marginRight: 18,
      marginTop: 28
   },
   textDisc: {
      color: '#a8a8a8',
      marginTop: 18,
      fontSize: 14,
      textAlign: 'left'
   },
   disco2: {
      width: 151,
      marginLeft: 18,
      marginRight: 18,
      marginTop: 29
   },
   tendencias: {
      marginTop: 40
   },
   text_tendencias: {
      color: '#fff',
      fontSize: 32,
      marginLeft: 27
   },
   albuns: {
      flexDirection: 'row',
      marginTop: 5
   },
   album1: {
      width: 170,
      marginLeft: 27
   },
   album2: {
      width: 170,
      marginLeft: 14
   },
   text_top: {
      color: '#fff',
      marginTop: 50,
      fontSize: 32,
      marginBottom: 12,
      marginLeft: 27
   },
   artistas: {
      flexDirection: 'row'
   },
   footer: {
      position: 'absolute',
      bottom: 0,
      height: 90,
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(19, 19, 19, .6)'
   },
   text_footer: {
      color: '#b8b7b5',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 2
   }
})

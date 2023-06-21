import { Image, View } from 'react-native'
import { styles } from './styles'
import { Loading } from './src/screens/loading'
import { Login } from './src/screens/login'
import { Home } from './src/screens/home'
import { Login2 } from './src/screens/login2'
export default function App() {
   return (
      <View style={styles.container}>
         {/* <Loading /> */}
         {/* <Login /> */}
         {/* <Home /> */}
         <Login2 />
      </View>
   )
}

import {
   View,
   Text,
   TouchableOpacity,
   Image,
   SafeAreaView,
   ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Bell from '../../assets/images/Bell.png'
import History from '../../assets/images/History.png'
import Settings from '../../assets/images/Settings.png'
import { styles } from './home'
import Guns1 from '../../assets/images/Guns1.png'
import Guns2 from '../../assets/images/Guns2.png'
import Artita1 from '../../assets/images/Artista1.png'
import Artita2 from '../../assets/images/Artista2.png'
import Home_icon from '../../assets/images/Home_icon.png'
import Library from '../../assets/images/Library.png'
import Search from '../../assets/images/Search.png'
import Premium from '../../assets/images/Premium.png'

export const Home = () => {
   return (
      <View style={styles.container}>
         <LinearGradient
            style={{
               width: '100%',
               height: '100%'
            }}
            colors={['#424242', '#131313']}
         >
            <View style={styles.cabecalho}>
               <Text style={styles.title}>Feito para você</Text>
               <TouchableOpacity style={styles.img}>
                  <Image source={Bell} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.img}>
                  <Image source={History} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.img}>
                  <Image source={Settings} />
               </TouchableOpacity>
            </View>

            <ScrollView>
               <View style={styles.playlist}>
                  <View style={styles.disco1}>
                     <Image source={Guns1} />
                     <Text style={styles.textDisc}>
                        Guns N’ Roses, Bon Jovi, Faith no more e mais!
                     </Text>
                  </View>

                  <View style={styles.disco2}>
                     <Image source={Guns2} />
                     <Text style={styles.textDisc}>
                        Veja a última playlist feita para você...
                     </Text>
                  </View>
               </View>

               <View style={styles.tendencias}>
                  <Text style={styles.text_tendencias}>Tendências</Text>
                  <View style={styles.albuns}>
                     <View style={styles.album1}>
                        <Image source={Artita1} />
                        <Text style={styles.textDisc}>
                           Girls from rio Anitta
                        </Text>
                     </View>
                     <View style={styles.album2}>
                        <Image source={Artita2} />
                        <Text style={styles.textDisc}>Levitating Dua Lipa</Text>
                     </View>
                     <View style={styles.album2}>
                        <Image source={Artita2} />
                        <Text style={styles.textDisc}>
                           Girls from Levitating Dua Lipa
                        </Text>
                     </View>
                  </View>
               </View>

               <View>
                  <Text style={styles.text_top}>Top 10 artistas</Text>
                  <View style={styles.artistas}>
                     <View style={styles.album1}>
                        <Image source={Artita1} />
                     </View>
                     <View style={styles.album2}>
                        <Image source={Artita2} />
                     </View>
                     <View style={styles.album2}>
                        <Image source={Artita1} />
                     </View>
                  </View>
               </View>
            </ScrollView>
            <View style={styles.barra_botton}>
               <View>
                  <TouchableOpacity>
                     <Image source={Home_icon} />
                     <Text style={styles.text_botton}>Home</Text>
                  </TouchableOpacity>
               </View>
               <View>
                  <TouchableOpacity>
                     <Image source={Search} />
                     <Text style={styles.text_botton}>Busca</Text>
                  </TouchableOpacity>
               </View>
               <View>
                  <TouchableOpacity>
                     <Image source={Library} />
                     <Text style={styles.text_botton}>Playlists</Text>
                  </TouchableOpacity>
               </View>
               <View>
                  <TouchableOpacity>
                     <Image source={Premium} />
                     <Text style={styles.text_botton}>Premium</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </LinearGradient>
      </View>
   )
}

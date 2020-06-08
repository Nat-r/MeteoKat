import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Button, Picker, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomPicker } from 'react-native-custom-picker'
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
var color1 = ''
var color2 = ''
var icon = ''
var jours = ''
var heure = ''
var temp = ''
var temps = ''
var change = 'Soleil'

function Soleil({ navigation  }) {
    return (
      <LinearGradient
        colors={[color.JauneTop, color.JauneBot]}
        style={{flex: 1}}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textjours}>{donnessun.jours}</Text>
            <Text style={styles.textheure}>{donnessun.heure}</Text>
            <View style={styles.imgcont}>
              <Image style={styles.img} source={icones.sun}/>
            </View>
            <View style={styles.textcont}>
              <Text style={styles.texttemp}>{donnessun.temp}  | <Text style={styles.texttemps}>{donnessun.temps}</Text></Text> 
            </View>
            <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
          </View>
        </ScrollView>
      </LinearGradient>

    );
}

function Neige({ navigation  }) {
  return (
    <LinearGradient
      colors={[color.BleuTop, color.BleuBot]}
      style={{flex: 1}}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textjours}>{donnessnow.jours}</Text>
          <Text style={styles.textheure}>{donnessnow.heure}</Text>
          <View style={styles.imgcont}>
            <Image style={styles.img} source={icones.snow}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{donnessnow.temp}  | <Text style={styles.texttemps}>{donnessnow.temps}</Text></Text> 
          </View>
          <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
        </View>
      </ScrollView>
    </LinearGradient>

  );
}

function Pluie({ navigation  }) {
  return (
    <LinearGradient
      colors={[color.GrisTop, color.GrisBot]}
      style={{flex: 1}}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textjours}>{donnespluie.jours}</Text>
          <Text style={styles.textheure}>{donnespluie.heure}</Text>
          <View style={styles.imgcont}>
            <Image style={styles.img} source={icones.pluie}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{donnespluie.temp}  | <Text style={styles.texttemps}>{donnespluie.temps}</Text></Text> 
          </View>
          <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
        </View>
      </ScrollView>
    </LinearGradient>

  );
}

function Orage({ navigation  }) {
  return (
    <LinearGradient
      colors={[color.VioletTop, color.VioletBot]}
      style={{flex: 1}}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textjours}>{donnesorage.jours}</Text>
          <Text style={styles.textheure}>{donnesorage.heure}</Text>
          <View style={styles.imgcont}>
            <Image style={styles.img} source={icones.orage}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{donnesorage.temp}  | <Text style={styles.texttemps}>{donnesorage.temps}</Text></Text> 
          </View>
          <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
        </View>
      </ScrollView>
    </LinearGradient>

  );
}

function Nuage({ navigation  }) {
  return (
    <LinearGradient
      colors={[color.VertTop, color.VertBot]}
      style={{flex: 1}}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textjours}>{donnesnuage.jours}</Text>
          <Text style={styles.textheure}>{donnesnuage.heure}</Text>
          <View style={styles.imgcont}>
            <Image style={styles.img} source={icones.nuage}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{donnesnuage.temp}  | <Text style={styles.texttemps}>{donnesnuage.temps}</Text></Text> 
          </View>
          <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
        </View>
      </ScrollView>
    </LinearGradient>

  );
}

function Meteo({ navigation }){
    return (
      <LinearGradient 
        colors={[color1, color2]}
        style={{flex: 1}}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textjours}>{jours}</Text>
            <Text style={styles.textheure}>{heure}</Text>
            <View style={styles.imgcont}>
            <Image style={styles.img} source={icon}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{temp}  | <Text style={styles.texttemps}>{temps}</Text></Text> 
          </View>
            <Button style={styles.btn} title="Dev Mode" onPress={() => navigation.navigate('Dev Mode')} />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
function Dev({ navigation }) {
  return (
    <LinearGradient 
        colors={[color1, color2]}
        style={{flex: 1}}
      >
        <View style={styleHome.container}>
          <View style={styleHome.conth1}>
            <Text style={styleHome.h1}>Dev Mode</Text>
          </View> 
          <View>
            <Button title="Meteo" onPress={() => navigation.navigate('Home')} />
            <Text>&nbsp;</Text>
            <Button title="Style Soleil" onPress={() => navigation.navigate('Soleil')} />
            <Text>&nbsp;</Text>
            <Button title="Style Neige" onPress={() => navigation.navigate('Neige')} />
            <Text>&nbsp;</Text>
            <Button title="Style Pluie" onPress={() => navigation.navigate('Pluie')} />
            <Text>&nbsp;</Text>
            <Button title="Style Orage" onPress={() => navigation.navigate('Orage')} />
            <Text>&nbsp;</Text>
            <Button title="Style Nuage" onPress={() => navigation.navigate('Nuage')} />
          </View>
        </View>

    </LinearGradient>
  );
}

const Stack = createStackNavigator();
export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Meteo} />
        <Stack.Screen name="Dev Mode" component={Dev} />
        <Stack.Screen name="Soleil" component={Soleil} />
        <Stack.Screen name="Neige" component={Neige} />
        <Stack.Screen name="Pluie" component={Pluie} />
        <Stack.Screen name="Orage" component={Orage} />
        <Stack.Screen name="Nuage" component={Nuage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  textjours: {
    marginTop: 50,
    fontSize: 50,
    padding: 0,
    margin: 0,
    color: 'white',
  },
  textheure: {
    fontSize: 90,
    padding: 0,
    margin: 0,
    textTransform: "uppercase",
    color: 'white',
  },
  imgcont:{
    flex: 1,
    alignItems: 'center' 
  },
  img: {
    marginTop: 50,
    height: 300,
    width: 300,
  },
  texttemp: {
    fontSize: 55,
    marginTop: 70,
    padding: 0,
    margin: 0,
    color: 'white',
  },
  texttemps: {
    fontSize: 40,
    padding: 0,
    margin: 0,
    color: 'white',
  },
  textcont : {
    alignItems: 'center',
    paddingBottom : 200 
  },
  picker : {
    width: 150,
    color: 'white',
  },
  pickernone : {
    width: 150,
    display: "none",
  },
  btn : {
    
  }
});

const styleHome = StyleSheet.create({
  container : {
    paddingLeft: 40,
    paddingRight: 40,
  },
  conth1 : {
    paddingTop : 200,
    marginBottom : 70,
    alignItems: 'center'
  },
  h1 : {
    color : 'white',
    fontSize : 50,
  },
  btn : {
    flex: 1,
    justifyContent : 'space-between'
  },
});



const color = {
JauneTop : '#fcdc15',
JauneBot : '#faac40',
BleuTop : '#3fc4f4',
BleuBot : '#0096cf',
GrisTop : '#e4e9e5',
GrisBot : '#929397',
VioletTop : '#922790',
VioletBot : '#662d94',
VertTop : '#89c83b',
VertBot : '#089644'
}
const icones = {
  sun : require("./img/WeatherAvecCouleur/png/004-sun.png"),
  snow : require("./img/WeatherAvecCouleur/png/017-snowflake.png"),
  pluie : require("./img/WeatherAvecCouleur/png/016-hail.png"),
  orage: require("./img/WeatherAvecCouleur/png/006-thunderstorm.png"),
  nuage: require("./img/WeatherAvecCouleur/png/001-cloudy.png"),
}
const donnessun = {
  jours : 'Lundi',
  heure : '10:20',
  temp : '25°',
  temps : 'Soleil',
}
const donnessnow = {
  jours : 'Jeudi',
  heure : '16:19',
  temp : '1°',
  temps : 'Neige',
}
const donnespluie = {
  jours : 'Mardi',
  heure : '00:37',
  temp : '10°',
  temps : 'Pluie',
}
const donnesorage = {
  jours : 'Mercredi',
  heure : '19:16',
  temp : '9°',
  temps : 'Orage',
}
const donnesnuage = {
  jours : 'Samedi',
  heure : '15:03',
  temp : '22°',
  temps : 'Nuage',
}
var test = 'Pluie'
function changeTheme(event) {
  change = event;
  //alert(change)
  ChangeColor();
}
function ChangeColor(event) {
  
  if (change == 'Soleil') {
    color1 = color.JauneTop;
    color2 = color.JauneBot;
    icon = icones.sun;
    jours = donnessun.jours;
    heure = donnessun.heure;
    temp = donnessun.temp;
    temps = donnessun.temps;
  } else if (change == 'Neige') {
    color1 = color.BleuTop;
    color2 = color.BleuBot;
    icon = icones.snow;
    jours = donnessnow.jours;
    heure = donnessnow.heure;
    temp = donnessnow.temp;
    temps = donnessnow.temps;
  }else if (change == 'Pluie') {
    color1 = color.GrisTop;
    color2 = color.GrisBot;
    icon = icones.pluie;
    jours = donnespluie.jours;
    heure = donnespluie.heure;
    temp = donnespluie.temp;
    temps = donnespluie.temps;
  }else if (change == 'Orage') {
    color1 = color.VioletTop;
    color2 = color.VioletBot;
    icon = icones.orage;
    jours = donnesorage.jours;
    heure = donnesorage.heure;
    temp = donnesorage.temp;
    temps = donnesorage.temps;
  }else if (change == 'Nuage') {
    color1 = color.VertTop;
    color2 = color.VertBot;
    icon = icones.nuage;
    jours = donnesnuage.jours;
    heure = donnesnuage.heure;
    temp = donnesnuage.temp;
    temps = donnesnuage.temps;
  }
}
ChangeColor();
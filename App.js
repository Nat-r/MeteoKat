import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Picker, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import ReactLoading from 'react-loading';
var color1 = ''
var color2 = ''
var icon = ''
var jours = ''
var heure = ''
var temp = ''
var temps = ''
var change = 'Soleil'
var code = ''
var json = ''
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
class Meteo extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.coord = {}
    
  }

  componentDidMount(){
    this.bo();
    this.date();
    setInterval(() => {
      this.date();
    }, 1000);
  }

  bo = async() => {
    Location.requestPermissionsAsync();
    this.coord = await Location.getCurrentPositionAsync();
    fetch("https://api.opencagedata.com/geocode/v1/json?q="+this.coord.coords.latitude+"+"+this.coord.coords.longitude+"&key=d292c0359fa3464c98f1b7e09f7d8a7e")
      .then(res => res.json())
      .then((result) => {this.setState({"city" : result.results[0].components.city}); this.api();} , (error) => {this.setState({"error" : error})} );

  this.setState({"city" : "Lyon"});
  
}
  api(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+this.state.city+"&appid=d089edbc992c5c7e8694a927e9ad2179")
     .then(res => res.json())
     .then((result) => {if (result.cod == "200") {this.setState({"objet" : result});}} , (error) => {this.setState({"error" : error})} );
  }

  date(){
      var g = new Date();
      this.heur = g.getHours();
      this.minu = g.getMinutes();
      this.jour = g.getDay();
      this.setState({});
      this.day = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'] 
      if (this.minu < 10) {
        this.minu = "0" + this.minu
      }
  }

  style(){
    if (this.state.objet.list[0].weather[0].main == 'Rain') {
      color1 = color.GrisTop;
      color2 = color.GrisBot;
      icon = icones.pluie;
      temps = donnespluie.temps;
    }
    else if (this.state.objet.list[0].weather[0].main == 'Clouds') {
      color1 = color.VertTop;
      color2 = color.VertBot;
      icon = icones.nuage;
      temps = donnesnuage.temps;
    }
    else if (this.state.objet.list[0].weather[0].main == 'Clear') {
      color1 = color.JauneTop;
      color2 = color.JauneBot;
      icon = icones.sun;
      temps = donnessun.temps;
    }
    else if (this.state.objet.list[0].weather[0].main == 'Snow') {
      color1 = color.BleuTop;
      color2 = color.BleuBot;
      icon = icones.snow;
      temps = donnessnow.temps;
    }
    else if (this.state.objet.list[0].weather[0].main == 'Thunderstorm') {
      color1 = color.VioletTop;
      color2 = color.VioletBot;
      icon = icones.orage;
      temps = donnesorage.temps;
    }
  }
  temp(){
		return (this.state.objet.list[0].main.temp-273.15).toFixed(0);
  }
  render(){ 
   if (this.state.objet != undefined) {
      this.style();
    return (
      <LinearGradient 
        colors={[color1, color2]}
        style={{flex: 1}}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textjours}>{this.day[this.jour]}</Text>
            <Text style={styles.textheure}>{this.heur}:{this.minu}</Text>
            <View style={styles.imgcont}>
            <Image style={styles.img} source={icon}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{this.temp()}°C  | <Text style={styles.texttemps}>{temps}</Text></Text> 
          </View>
            <Button style={styles.btn} title="Dev Mode" onPress={() => this.props.navigation.navigate('Dev Mode')} />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }else{
    return (
      <LinearGradient 
        colors={[color.JauneTop, color.JauneBot]}
        style={{flex: 1}}
      >
      <Text style={styles.char}>Chargement</Text>
      </LinearGradient>
    );
  }
}
}
function Home({ navigation }) {
  return <Meteo navigation={navigation}></Meteo>
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
        <Stack.Screen name="Home" component={Home} />
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
  char : {
    fontSize : 50,
    alignItems: 'center',
    paddingTop : 380,
    paddingLeft : 50,
    color : "white",
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
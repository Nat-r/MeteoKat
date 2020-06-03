import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
var color1 = ''
var color2 = ''
var icon = ''
var jours = ''
var heure = ''
var temp = ''
var temps = ''
var change = 'Soleil'
export default class Meteo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: undefined,
      item: [
        { label: 'Soleil', value: 'Soleil' },
        { label: 'Neige', value: 'oui' },
        { label: 'Pluie', value: 'Pluie' },
        { label: 'Orage', value: 'Orage' },
        { label: 'Nuage', value: 'Nuage' },
    ]
    }
  }
  render() {
    return (
      <LinearGradient ref={this.Background}
        colors={[color1, color2]}
        style={{flex: 1}}
      >
        <View style={styles.container}>
          <Text style={styles.textjours}>{jours}</Text>
          <Text style={styles.textheure}>{heure}</Text>
          <View style={styles.imgcont}>
            <Image style={styles.img} source={icon}/>
          </View>
          <View style={styles.textcont}>
            <Text style={styles.texttemp}>{temp}  | <Text style={styles.texttemps}>{temps}</Text></Text> 
          </View>
        </View>
        <RNPickerSelect
        onValueChange={(value) => {
          this.setState({
              change: value,
          });
        }}
        items={this.state.item}
        value={this.state.change}
        />
      </LinearGradient>
    );
  }
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
    marginTop: 400,
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
    alignItems: 'center'
  },
  picker : {
    width: 150,
    color: 'white',
  },
  pickernone : {
    width: 150,
    display: "none",
  }
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

function ChangeTheme(event) {
 change = event;
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

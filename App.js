import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

var color1 = ''
var color2 = ''
export default class Meteo extends React.Component {
  render() {
    return (
      <LinearGradient ref={this.Background}
        colors={[color1, color2]}
        style={{flex: 1}}
      >
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
var temp = 'Neige'
function ChangeColor(event) {
  
  if (temp == 'Soleil') {
    color1 = color.JauneTop;
    color2 = color.JauneBot;
  } else if (temp == 'Neige') {
    color1 = color.BleuTop;
    color2 = color.BleuBot;
  }else if (temp == 'Pluie') {
    color1 = color.GrisTop;
    color2 = color.GrisBot;
  }else if (temp == 'Orrage') {
    color1 = color.VioletTop;
    color2 = color.VioletBot;
  }else if (temp == 'Nuage') {
    color1 = color.VertTop;
    color2 = color.VertBot;
  }
}
ChangeColor();

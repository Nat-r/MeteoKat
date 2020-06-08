import * as React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Button, Picker, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { render } from 'react-dom';

export default class Meteo extends React.Component {
    constructor(props){
        super(props);
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=villeurbanne&APPID=d089edbc992c5c7e8694a927e9ad2179")
     .then(res => res.json())
     .then((result) => {if (result.cod == "200") {this.setState({"objet" : result});}} , (error) => {this.setState({"error" : error})} );
     console.log(this.state.objet)
    }

    render(){
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
}
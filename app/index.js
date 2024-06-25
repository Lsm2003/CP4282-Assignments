import {StatusBar } from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import React, {useState, useContext} from 'react';
import Button from '../components/Button';
import Games from '../components/Games';
import {GameContext} from '../components/GameContext'

export default function App() {
    const [index, switchindex] = useState(0)

    return (
        <View style={styles.container}>
          <GameContext.Provider value={useContext(GameContext).gameinfo}>
           <Games gameindex={index}/>
          </GameContext.Provider>

           <View style={styles.buttonBar}>
           <Button label="1" onPress={()=> switchindex(0)} isActive={index === 0}/>
           <Button label="2" onPress={()=> switchindex(1)} isActive={index === 1}/>>
           <Button label="3" onPress={()=> switchindex(2)} isActive={index === 2}/>>
           </View>
           <StatusBar style="auto" />
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
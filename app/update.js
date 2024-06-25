import React, { useState, useContext } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { GameContext } from '../components/GameContext';

const GameEditor = () => {

let Games = useContext(GameContext)
const [index, switchindex] = useState(0)
const [name   , newname   ] = useState("")
const [year   , newyear   ] = useState("")
const [image  , newimage  ] = useState("")
const [dev    , newdev    ] = useState("")
const [rating , newrating ] = useState("")

  return (
    <View style={styles.container}>
      <h2>Game to replace</h2>
      <View style={styles.buttonBar}>
      <Button label={Games.gameinfo[0].name} onPress={()=> switchindex(0)} isActive={index === 0}/>
      <Button label={Games.gameinfo[1].name} onPress={()=> switchindex(1)} isActive={index === 1}/>
      <Button label={Games.gameinfo[2].name} onPress={()=> switchindex(2)} isActive={index === 2}/>
      </View>
      <h2>new info</h2>
      <TextInput
        style={styles.input}
        placeholder="New Image URL"
        onChangeText={image => newimage(image)}
        placeholderTextColor="gray"
      />
            <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={name => newname(name)}
        placeholderTextColor="gray"
      />
            <TextInput
        style={styles.input}
        placeholder="New Rating"
        onChangeText={rating => newrating(rating)}
        placeholderTextColor="gray"
      />
            <TextInput
        style={styles.input}
        placeholder="New Year"
        onChangeText={year => newyear(year)}
        placeholderTextColor="gray"
      />
        <TextInput
        style={styles.input}
        placeholder="New Developer"
        onChangeText={dev => newdev(dev)}
        placeholderTextColor="gray"
      />
      <Button label={"submit"} onPress={() => {
        console.log(Games.gameinfo.splice([index], 1, {
          "name": name,
          "year": year,
          "rating": rating,
          "developer": dev,
          "image":image }))
      }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    flex: 1,
  },
  input: {
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 20,
    width: '80%',
    backgroundColor: 'white',
  },
  text: {
    padding: 12,
    fontSize: 42,
    color: 'black',
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default GameEditor;
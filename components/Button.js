import { StyleSheet, View, Pressable, Text } from 'react-native';




export default function Button({ label , onPress, isActive}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[styles.button, isActive && styles.activeButton]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'black',
  },
});
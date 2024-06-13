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
    padding: 8,
    margin: 4,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
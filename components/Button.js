import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, isActive }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          isActive && styles.activeButton,
          pressed && styles.pressedButton,
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
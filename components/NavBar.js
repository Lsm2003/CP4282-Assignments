import { Link } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <Link href={"/update"} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Edit</Text>
                </Pressable>
            </Link>
            <Link href={"/"} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Home</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#470000",
        paddingVertical: 15,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
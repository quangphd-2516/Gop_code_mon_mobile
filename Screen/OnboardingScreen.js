import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Carrot } from 'lucide-react-native';
 
export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Hình ảnh nền */}
            <Image
                source={require("../assets/onboard.png")}
                style={styles.productImage}
            />

            {/* Nội dung chính */}
            <View style={styles.content}>
                <Carrot size={70} color="white" />
                <Text style={styles.textmain}>Welcome</Text>
                <Text style={styles.textmain}>to our store</Text>
                <Text style={styles.text}>Get our groceries as fast as one hour</Text>

                {/* Nút Get Started */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignInScreen")}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#53B175"
    },
    productImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 100,

    },
    textmain: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
    },
    text: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#53B175",
        paddingVertical: 15,
        paddingHorizontal: 120,
        borderRadius: 15,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold",
    },
});

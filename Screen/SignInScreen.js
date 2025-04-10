import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Carrot } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignInScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Phần hình ảnh chiếm 40% màn hình */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/MaskGroup.png")}
                    style={styles.productImage}
                />
            </View>

            {/* Phần nội dung chiếm 60% màn hình */}
            <View style={styles.contentContainer} >
                <Text style={styles.textmain}>Get your groceries with nectar</Text>
                <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("NumberScreen")} activeOpacity={1}>
                    <Image
                        source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJkBdNFGX~ZTTw2B72sQBYfIP1QTSQObzmqfy4reEgIdzhaeSY0pmSfkxyHv00QX1D2Ij2qAC4MpAX~jswfP2HUoUmoGSCjI8xEZVemrA3cXS4mSgmfulZrVEaei816qdNrjTab9U5-K8l9EfVLFLTwCAHwh14Cf4KMyPJ3qScoSpLKYHu25AWWV3oz-wdt~-a4jM2ZoWcdpwzPOux50awHO-roKUMQ7SQXAp0XN0dVqU74muBaE3jAnyUKsSA0aY0QE~dT7r1SEFgDaftXKa6HQyvAIyhUfLyGmk3x15GFj06FXovX~tg93uObczaqLKftQT5esn5Z8CvzSXctCDw__" }}
                        style={styles.flagIcon}
                    />
                    <TextInput style={styles.textInput} placeholder="+088" editable={false} />
                </TouchableOpacity>


                <Text style={styles.text}>Or connect with social media</Text>


                <View style={styles.socialContainer}>
                    <View style={styles.socialButton}>
                        <Icon name="google" size={30} color="white" marginRight="20" />
                        <Text style={{ color: "#FCFCFC", fontSize: 20 }} >Continue with Google</Text>
                    </View>
                    <View style={styles.socialButton1}>
                        <Icon name="facebook" size={30} color="white" marginRight="20" />
                        <Text style={{ color: "#FCFCFC", fontSize: 20 }}>Continue with Facebook</Text>
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    imageContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    contentContainer: {
        flex: 0.6,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
    },
    textmain: {
        color: "#333",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    text: {
        color: "#828282",
        fontSize: 16,
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginTop: 15,
        width: "100%",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    flagIcon: {
        width: 28,
        height: 28,
        marginRight: 10,
    },
    textInput: {
        fontSize: 18,
        color: "#333",
        flex: 1,
    },

    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
    socialContainer: {
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        width: "90%",
        borderRadius: 15,
        backgroundColor: "#5383EC",

    },
    socialButton1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        width: "90%",
        borderRadius: 15,
        backgroundColor: "#4A66AC",
        marginVertical: 20,
    },
    socialButtonText: {
        fontSize: 20,
        color: "#FCFCFC",
        fontWeight: "600",
        marginLeft: 10,
    },
});

import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity, Keyboard, TouchableWithoutFeedback,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function NumberScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isFocused, setIsFocused] = useState(false);


    const inputRef = useRef(null);


    useFocusEffect(
        React.useCallback(() => {
            requestAnimationFrame(() => {
                inputRef.current?.focus();
            });
        }, [])
    );


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1 }}>
            <View style={styles.innerContainer}>

                {/* Nút Back */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("SignInScreen")}>
                    <Ionicons name="chevron-back" size={40} color="black" />
                </TouchableOpacity>

                {/* Tiêu đề */}
                <Text style={styles.title}>Enter your mobile number</Text>
                <Text style={styles.label}>Mobile Number</Text>

                {/* Ô nhập số điện thoại */}
                <View style={styles.inputContainer}>
                    <Image
                        source={{ uri: "https://s3-alpha-sig.figma.com/img/41cc/144b/fb38ac5a94c5de8628b3bed5259fb5f1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJkBdNFGX~ZTTw2B72sQBYfIP1QTSQObzmqfy4reEgIdzhaeSY0pmSfkxyHv00QX1D2Ij2qAC4MpAX~jswfP2HUoUmoGSCjI8xEZVemrA3cXS4mSgmfulZrVEaei816qdNrjTab9U5-K8l9EfVLFLTwCAHwh14Cf4KMyPJ3qScoSpLKYHu25AWWV3oz-wdt~-a4jM2ZoWcdpwzPOux50awHO-roKUMQ7SQXAp0XN0dVqU74muBaE3jAnyUKsSA0aY0QE~dT7r1SEFgDaftXKa6HQyvAIyhUfLyGmk3x15GFj06FXovX~tg93uObczaqLKftQT5esn5Z8CvzSXctCDw__" }}
                        style={styles.flagIcon}
                    />
                    <Text style={styles.countryCode}>+880</Text>
                    <TextInput
                        ref={inputRef}
                        autoFocus={true}
                        style={styles.textInput}
                        keyboardType="numeric"
                        maxLength={10}
                        placeholder="Enter number"
                        placeholderTextColor="#999"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>

                {/* Nút chuyển tiếp */}
                {phoneNumber.length >= 10 && (
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => navigation.navigate("VerificationScreen")}
                    >
                        <Ionicons name="chevron-forward" size={40} color="white" />
                    </TouchableOpacity>
                )}

            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 0,
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 100,
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        color: "#666",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    flagIcon: {
        width: 24,
        height: 16,
        marginRight: 8,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        color: "#333",
    },
    nextButton: {
        position: "absolute",
        right: 20,
        bottom: 30,
        backgroundColor: "#28A745",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

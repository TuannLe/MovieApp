import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";


export default function PlayMovieScreen({ navigation }) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);

    return (
        <View style={tw`w-full h-full bg-black items-center justify-center`}>
            <Ionicons name="play" size={50} color="#fff" />
            <TouchableOpacity
                onPress={() => {
                    ScreenOrientation.lockAsync(
                        ScreenOrientation.OrientationLock.PORTRAIT
                    );
                    navigation.goBack();
                }}
                style={tw`absolute top-5 right-5`}
            >
                <AntDesign name="close" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}
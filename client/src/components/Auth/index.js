import { View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import tw from 'twrnc'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

export default function Auth() {
    const refRBSheet = useRef()
    const navigation = useNavigation();

    return (
        <ImageBackground
            style={tw`w-full h-full`}
            source={require('../../../assets/images/loginImage.jpg')}
        >
            <View style={[tw`w-full h-full`, { backgroundColor: 'rgba(0,0,0,0.4)' }]}></View>
            <View style={tw`absolute inset-x-0 inset-y-0 flex items-center justify-center`}>
                <View style={tw`flex w-10/12 bg-black px-5 py-10 rounded-xl`}>
                    <Text style={tw`text-white text-3xl font-bold mb-5`}>Sign In</Text>
                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor={'gray'}
                        style={tw`p-2 bg-[#222] text-white text-base rounded-lg mb-2`}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor={'gray'}
                        style={tw`p-2 bg-[#222] text-white text-base rounded-lg`}
                    />
                    <TouchableOpacity
                        style={tw`py-2 bg-red-500 rounded-lg mt-5`}
                        onPress={() => navigation.navigate('HomeStack')}
                    >
                        <Text style={tw`text-white text-lg font-medium text-center`}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row items-center justify-center`}>
                        <Text style={tw`text-gray-400`}>New to Netflix?</Text>
                        <TouchableOpacity
                            style={tw`p-3`}
                            onPress={() => refRBSheet.current.open()}
                        >
                            <Text style={tw`text-white font-medium`}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    height={420}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    closeOnPressBack={true}
                    openDuration={300}
                    customStyles={{
                        container: tw`flex rounded-t-xl px-5`
                    }}
                >
                    <Text style={tw`text-red-500 text-3xl font-bold mb-5`}>Create Account</Text>
                    <View style={tw`flex flex-row`}>
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] `}
                            placeholder='First name...'
                        />
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] ml-2`}
                            placeholder='Last name...'
                        />
                    </View >
                    <TextInput
                        style={tw`p-2 rounded-lg bg-[#F3F0F6] my-2`}
                        placeholder='Phone number...'
                    />
                    <TextInput
                        style={tw`p-2 rounded-lg bg-[#F3F0F6]`}
                        placeholder='Email...'
                    />
                    <TextInput
                        style={tw`p-2 rounded-lg bg-[#F3F0F6] my-2`}
                        placeholder='Password...'
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={tw`p-2 rounded-lg bg-[#F3F0F6]`}
                        placeholder='Confirm password...'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={tw`py-2 bg-red-500 rounded-lg mt-5`}
                    >
                        <Text style={tw`text-white text-lg font-medium text-center`}>Sign Up</Text>
                    </TouchableOpacity>
                </RBSheet>
            </View>
        </ImageBackground>
    )
}
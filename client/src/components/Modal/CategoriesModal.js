import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { BlurView } from 'expo-blur'
import { AntDesign } from '@expo/vector-icons';

const data = [
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
    "Hai kich",
]

export default function CategoriesModal({ handleVisible, isVisible }) {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            {/* <BlurView
                style={[tw`w-full h-full`, { backgroundColor: 'rgba(0,0,0,1)' }]}
                intensity={200}
            >
                <TouchableOpacity
                    style={tw`w-full h-full flex-1`}
                    onPress={handleVisible}
                />
                <Text style={tw`text-white`}>Hello cac ban</Text>
            </BlurView> */}
            <View style={[tw`flex items-center w-full h-full pt-10`, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={tw`py-3 w-full`}
                        >
                            <Text style={tw`text-gray-400 text-xl font-normal text-center`}>{item}</Text>

                        </TouchableOpacity>
                    }
                    vertical
                    showsVerticalScrollIndicator={false}
                    style={tw`w-full`}
                />
                <TouchableOpacity
                    onPress={handleVisible}
                    style={tw`p-4 rounded-full bg-white absolute bottom-5`}
                >
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';

const WriteComment = () => {
    return (
        <View style={tw`flex flex-row items-center`}>
            <TextInput
                style={tw`flex-1 p-3 text-base text-white`}
                placeholder='Write your comment...'
                placeholderTextColor='#ccc'
            />
            <TouchableOpacity
                style={tw`p-3`}
            >
                <Ionicons name="md-send" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default WriteComment
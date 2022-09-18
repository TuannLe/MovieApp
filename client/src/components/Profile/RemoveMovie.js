import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { WatchingStart } from '../../redux/actions/auth'

const RemoveMovie = ({ handleVisible, isVisible, movieIdSelected }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.currentUser)

    const handleRemoveMovie = () => {
        dispatch(WatchingStart({ token: currentUser.accessToken, movieId: movieIdSelected, userId: currentUser._id }))
        handleVisible()
    }

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={[tw`w-full h-full`, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                <TouchableOpacity
                    style={tw`w-full h-full flex-1`}
                    onPress={handleVisible}
                />
                <View style={tw`px-3 my-3 `}>
                    <View style={tw`bg-white rounded-lg my-2`}>
                        <TouchableOpacity
                            onPress={handleRemoveMovie}
                            style={tw` items-center justify-center py-3 `}
                        >
                            <Text style={tw`text-red-500 text-base`}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={tw`bg-white rounded-lg items-center justify-center py-3`}
                        onPress={handleVisible}
                    >
                        <Text style={tw`text-base`}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default RemoveMovie
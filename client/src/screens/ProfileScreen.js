import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useEffect, useRef } from 'react'
import tw from 'twrnc'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet'
import { useDispatch, useSelector } from 'react-redux'
import { TopNavigatorProfile } from '../navigators/TopNavigator'
import { GetMoviesFavoriteStart, GetMovieWatchingStart, logout } from '../redux/actions/auth'

export default function ProfileScreen() {
    const dispatch = useDispatch()
    const refRBSheet = useRef()
    const currentUser = useSelector((state) => state.auth.currentUser)

    useEffect(() => {
        dispatch(GetMoviesFavoriteStart({ token: currentUser.accessToken, userId: currentUser._id }))
        dispatch(GetMovieWatchingStart({ token: currentUser.accessToken, userId: currentUser._id }))
    }, [])
    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <SafeAreaView style={tw`w-full h-full bg-black`}>
            <View style={tw`flex flex-row justify-center`}>
                <Text style={tw`text-gray-200 text-xl font-medium mt-2`}>Profile</Text>
                <TouchableOpacity
                    style={tw`absolute top-0 right-0 z-1 p-2`}
                    onPress={() => refRBSheet.current.open()}
                >
                    <Feather name="menu" style={tw`text-2xl text-gray-300`} />
                </TouchableOpacity>
            </View>
            <View style={tw`flex items-center mt-5`}>
                <View style={tw`border border-red-500 rounded-full mb-3`}>
                    <Image
                        source={{ uri: 'https://afamilycdn.com/150157425591193600/2021/6/8/photo-1-16229736437071881672186-16231223886751522999177.jpg' }}
                        style={tw`w-25 h-25 rounded-full m-1`}
                    />
                </View>
                <Text style={tw`text-gray-200 text-lg`}>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
                <Text style={tw`text-gray-200 text-base`}>{currentUser.email}</Text>
            </View>
            <View style={tw`flex-1 w-full h-full`}>
                <TopNavigatorProfile />
            </View>
            <RBSheet
                ref={refRBSheet}
                height={420}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                openDuration={300}
                customStyles={{
                    container: tw`flex rounded-t-xl px-3 bg-gray-200`
                }}
            >
                <View>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                        onPress={handleLogout}
                    >
                        <Feather name="log-out" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base font-medium`}>Log out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                    >
                        <Ionicons name="md-lock-closed-outline" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base font-medium`}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex flex-row items-center py-2`}
                    >
                        <Ionicons name="md-help" style={tw`text-2xl w-10`} />
                        <Text style={tw`text-base font-medium`}>Help</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}
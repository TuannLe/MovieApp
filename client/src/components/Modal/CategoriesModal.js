import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { getMovieByCategoryStart } from '../../redux/actions/movie'

export default function CategoriesModal({ handleVisible, isVisible }) {
    const data = useSelector((state) => state.category.data)
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const dispatch = useDispatch()
    const [categoryId, setCategoryId] = useState('')

    useEffect(() => {
        data.push({
            _id: 1,
            categoryName: 'Tất cả'
        })
    }, [])
    useEffect(() => {
        dispatch(getMovieByCategoryStart({ token, categoryId }))
    }, [categoryId])

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
        >
            <View style={[tw`flex items-center w-full h-full pt-10`, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={tw`py-3 w-full`}
                            onPress={() => {
                                setCategoryId(item._id)
                                handleVisible()
                            }}
                        >
                            <Text style={tw`text-gray-400 text-xl font-normal text-center`}>{item.categoryName}</Text>
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
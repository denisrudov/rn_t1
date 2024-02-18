import { useRouter } from 'expo-router'
import { Pressable } from 'expo-router/build/views/Pressable'
import { ChevronLeft } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'

const BackBtn = () => {
    const { back } = useRouter()
    return (
        <View>
            <Pressable onPress={back}>
                <ChevronLeft color={'#fff'} />
            </Pressable>
        </View>
    )
}

export default BackBtn

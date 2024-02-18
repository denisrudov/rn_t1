import { ArrowRight } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0094FF',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const ArrowRightBtn = () => {
    return (
        <View
            style={ styles.wrapper }
        >
            <ArrowRight color="#fff"/>
        </View>
    )
}

export default ArrowRightBtn

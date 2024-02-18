import React, { FC } from 'react'
import { StyleSheet, Text, View, ViewProps } from 'react-native'

type DetailViewProps = {
    title: string
    value: string
} & ViewProps


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#1D2C3D',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
        flexBasis: '48%'
    },
    title: {
        color:'#A8ACB6',
        fontSize: 16,
        fontWeight:'bold',
        textTransform:'uppercase',
        marginBottom: 10
    },
    value: {
        color:'#fff',
        fontSize: 22,
        fontWeight:'bold'
    },
})

const DetailBlock: FC<DetailViewProps> = ({
                                              title,
                                              value,
                                              style,
                                              ...rest
                                          }) => {
    return (
        <View style={ [styles.container, style] } { ...rest }>
            <Text style={ styles.title }>{ title }</Text>
            <Text style={ styles.value }>{ value }</Text>
        </View>
    )
}

export default DetailBlock

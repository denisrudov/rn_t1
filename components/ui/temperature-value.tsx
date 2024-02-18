import React, { FC } from 'react'
import { StyleProp, Text, TextStyle, View } from 'react-native'

const temps = ['celsius', 'kelvin'] as const

export type TempType = typeof temps[number]

type Props = {
    value: number
    type?: TempType
    style?: StyleProp<TextStyle>
}

const TemperatureValue: FC<Props> = ({
                                         value,
                                         type = 'celsius',
                                         style,
                                     }) => {
    return (
        <View>
            <Text style={ [style] }>{ value }°</Text>
        </View>
    )
}

export default TemperatureValue

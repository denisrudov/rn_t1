import React, { FC } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Icon from '@/components/icon/icon'
import TemperatureValue from '@/components/ui/temperature-value'
import { ForecastResponse } from '@/hooks/types'

type CitySummaryProps = {
    data: ForecastResponse
}


const styles = StyleSheet.create({
    container: {

        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cityName: {
        color: '#eaeaea',
        fontSize: 44,
    },
    subTitle: {
        color: '#cecece',
        fontSize: 18,
    },
    cityTemp: {
        fontSize: 44,
        color: '#fff',
    },
})

const CitySummary: FC<CitySummaryProps> = ({ data }) => {
    const {
        height,
        width,
    } = useWindowDimensions()

    return (
        <View style={ [styles.container, { minHeight: height / 2 }] }>
            <View style={ { alignItems: 'center' } }>
                <Text style={ styles.cityName }>{ data?.city.name }</Text>
                {/* API should have this data */}
                <Text style={ styles.subTitle }>Chance of rain: { data?.list[0].main.temp }%</Text>
            </View>
            <View>
                <Icon name={ 'sunny' } width={ width * 0.3 } height={ width * 0.3 }/>
            </View>
            <TemperatureValue value={ data?.list[0].main.temp ?? 0 } style={ styles.cityTemp }/>
        </View>
    )
}

export default CitySummary

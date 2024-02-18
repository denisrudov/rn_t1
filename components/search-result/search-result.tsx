import React, { FC, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CitiesResponseTypeChild } from '@/hooks/types'
import useLocationForecast from '@/hooks/useLocationForecast'
import Icon from '@/components/icon/icon'

type SearchResultProps = CitiesResponseTypeChild


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#1D2C3D',
        borderRadius: 10,
        height: 80,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        columnGap: 10,
    },
    cityName: {
        color: '#cdced0',
        fontSize: 24,
    },
    currentTemp: {
        color: '#fff',
        fontSize: 25,
    },
    tempContainer: {
        flexDirection: 'row',
    },
})

const SearchResult: FC<SearchResultProps> = ({
                                                 name,
                                                 lat,
                                                 lon,
                                             }) => {
    const {
        data,
        isLoading,
    } = useLocationForecast(lat, lon)
    const currentTemp = useMemo(() => {
        return data?.list[0].main.temp ?? 0
    }, [data?.list])

    if (isLoading || !data) {
        return
    }

    const sunsetDate = new Date(data.city.sunset)

    return (
        <View
            style={ styles.container }
        >
            <Icon name="cloud"/>
            <View style={ { flex: 1 } }>
                <Text
                    style={ styles.cityName }
                >
                    { data.city.name }
                </Text>
                <Text style={ { color: '#848B99' } }>
                    { sunsetDate.getHours() }:{ sunsetDate.getMinutes() }
                </Text>
            </View>
            <View
                style={ styles.tempContainer }
            >
                <Text
                    style={ styles.currentTemp }
                >
                    { currentTemp }°
                </Text>
            </View>
        </View>
    )
}

export default SearchResult

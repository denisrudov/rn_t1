import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView } from 'react-native'
import { ForecastResponseCityCoord } from '@/hooks/types'
import useLocationForecast from '@/hooks/useLocationForecast'
import Screen from '@/components/screen'
import DetailsBlock from '@/components/details-block/details-block'
import CitySummary from '@/components/city-summary/city-summary'
import ScreenHeader from '@/components/screen/screen-header'

type Coords = Record<string, any> & ForecastResponseCityCoord

const Index = () => {
    const {
        lat,
        lon,
    } = useLocalSearchParams<Coords>()

    const {
        data,
        isLoading,
    } = useLocationForecast(lat, lon)

    if (isLoading || !data) {
        return <Screen/>
    }

    return (
        <Screen>
            <ScreenHeader title={ 'Air Conditions' }/>
            <ScrollView>
                <CitySummary data={ data }/>
                <DetailsBlock data={ data }/>
            </ScrollView>
        </Screen>
    )
}

export default Index

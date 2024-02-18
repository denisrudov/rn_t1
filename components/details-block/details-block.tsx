import React, { FC } from 'react'
import DetailBlock from '@/components/detail-block/detail-block'
import { StyleSheet, View } from 'react-native'
import { ForecastResponse } from '@/hooks/types'

type Props = {
    data: ForecastResponse
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 10,
        rowGap: 10,
        justifyContent: 'space-between',
    },
})


const DetailsBlock: FC<Props> = ({ data }) => {
    return (
        <View style={ styles.container }>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
            <DetailBlock title={ 'Temp' } value={ `${data?.list[0].main.temp ?? 0}°` }/>
        </View>
    )
}

export default DetailsBlock

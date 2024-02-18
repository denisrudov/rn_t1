import { router } from 'expo-router'
import { Pressable } from 'expo-router/build/views/Pressable'
import React, { FC, useCallback } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { CitiesResponseType, CitiesResponseTypeChild } from '@/hooks/types'
import SearchResult from '@/components/search-result/search-result'

type Props = {
    data: CitiesResponseType
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
})

const SearchResults: FC<Props> = ({ data = [] }) => {

    const onPressResult = useCallback(
        (result: CitiesResponseTypeChild) => () => {
            router.navigate({
                pathname: '/city',
                params: {
                    lat: result.lat,
                    lon: result.lon,
                },
            })
        },
        [],
    )
    return (
        <ScrollView
            style={ styles.container }
        >
            { data?.map((result, idx) => (
                <Pressable
                    onPress={ onPressResult(result) }
                    key={ `${ result.lon }_${ result.lat }_${ idx }` }
                >
                    <SearchResult { ...result } />
                </Pressable>
            )) }
        </ScrollView>
    )
}

export default SearchResults

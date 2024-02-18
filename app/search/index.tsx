import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import useCitiesSearch from '@/hooks/useCitiesSearch'
import SearchField from '@/components/search-field/search-field'
import SearchResults from '@/components/search-results/search-results'
import Screen from '@/components/screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
})

const Page = () => {
    const [search, setSearch] = useState('')
    const { data = [] } = useCitiesSearch(search)

    const oChangeHandler = useCallback((value: string) => {
        setSearch(value)
    }, [])

    return (
        <Screen>
            <View
                style={ styles.container }
            >
                <SearchField onChange={ oChangeHandler }/>
                <SearchResults data={ data }/>
            </View>
        </Screen>
    )
}

export default Page

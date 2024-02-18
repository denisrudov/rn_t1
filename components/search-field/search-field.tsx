import React, { FC } from 'react'
import { Keyboard, StyleSheet, TextInput } from 'react-native'
import { useDebouncedCallback } from 'use-debounce'

const styles = StyleSheet.create({
    field: {
        borderRadius: 10,
        backgroundColor: '#1D2C3D',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: '#ccc',
    },
})

type Props = {
    onChange?: (val: string) => void
}

const SearchField: FC<Props> = ({ onChange }) => {
    const debouncedCallback = useDebouncedCallback((value: string) => {
        if (onChange) {
            onChange(value)
        }
    }, 500)
    return (
        <TextInput
            style={styles.field}
            placeholder="Search Place"
            placeholderTextColor="#ccc"
            inputMode="search"
            autoCapitalize="none"
            onBlur={Keyboard.dismiss}
            onChangeText={(value) => debouncedCallback(value)}
        />
    )
}

export default SearchField

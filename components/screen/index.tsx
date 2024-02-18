import { Stack } from 'expo-router'
import React, { FC, ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
    children?: ReactNode
    styles?: StyleProp<ViewStyle>
}

const stylesDefinition = StyleSheet.create({
    container: {
        backgroundColor: '#09131F',
        flex: 1,
    },
})

const Screen: FC<Props> = ({
                               children,
                               styles,
                           }) => {
    const insets = useSafeAreaInsets()
    return (
        <>
            <Stack.Screen
                options={ {
                    headerShown: false,
                } }
            />
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                style={ [
                    {
                        paddingTop: insets.top,
                        paddingBottom: insets.top,
                    },
                    stylesDefinition.container,
                    styles,
                ] }
            >
                { children }
            </KeyboardAvoidingView>
        </>
    )
}

export default Screen

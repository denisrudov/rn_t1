import { Stack } from 'expo-router'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import client from '@/utils/client'

const _Layout = () => {
    return (
        <QueryClientProvider client={client}>
            <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="search/index"
                    options={{ animation: 'fade' }}
                />
                <Stack.Screen name="city/index" options={{animation:'fade'}} />
            </Stack>
        </QueryClientProvider>
    )
}

export default _Layout

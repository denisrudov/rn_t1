import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomePage from '@/components/home/HomePage'

const Page = () => {
    return (
        <SafeAreaProvider>
            <HomePage />
        </SafeAreaProvider>
    )
}

export default Page

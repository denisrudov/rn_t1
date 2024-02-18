import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Logo from '@/components/logo/logo'
import Screen from '@/components/screen'
import ArrowRightBtn from '@/components/buttons/arrow-right-btn'


const styles = StyleSheet.create({
    fl: {
        flex: 1,
    },
    alCenter: {
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    appName: {
        color: '#fff',
        fontSize: 65,
        fontWeight: 'bold',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        paddingBottom: 50,
    },
    title: {
        color: '#a9a9a9',
        fontSize: 30,
    },
})


const TITLE = 'Breeze'
const SUB_TITLE = 'Weather App'

const HomePage = () => {
    return (
        <Screen
            styles={ styles.fl }
        >
            <View style={ styles.fl }>
                <View
                    style={ styles.logoContainer }
                >
                    <View
                        style={ [styles.alCenter, styles.logo] }
                    >
                        <Logo scale={ 0.45 }/>
                    </View>
                    <View style={ styles.alCenter }>
                        <Text
                            style={ styles.appName }
                        >
                            { TITLE }
                        </Text>
                        <Text
                            style={ styles.title }
                        >
                            { SUB_TITLE }
                        </Text>
                    </View>
                </View>
            </View>
            <View
                style={ [styles.alCenter, styles.bottomContainer] }
            >
                <Link href="/search/" replace>
                    <ArrowRightBtn/>
                </Link>
            </View>
        </Screen>
    )
}

export default HomePage

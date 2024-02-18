import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BackBtn from '@/components/buttons/back-btn'


type ScreenHeaderProps = {
    title: string
}


const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    btnContainer: { flex: 1 },
    btnWrapper: { paddingLeft: 20 },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'nowrap',
    },
    titleWrapper: {
        color: '#c4c4c4',
        fontSize: 18,
    },
})
const ScreenHeader: FC<ScreenHeaderProps> = ({ title }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.btnContainer }>
                <View style={ styles.btnWrapper }>
                    <BackBtn/>
                </View>
            </View>
            <View
                style={ styles.titleContainer }
            >
                <Text style={ styles.titleWrapper }>
                    { title }
                </Text>
            </View>
            <View style={ styles.btnContainer }/>
        </View>
    )
}

export default ScreenHeader

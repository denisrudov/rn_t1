import React, { FC } from 'react'
import { useWindowDimensions } from 'react-native'
import Icon from "@/components/icon/icon";

type Props = {
    scale?: number
}

const Logo: FC<Props> = ({ scale = 0.5 }) => {
    const { width } = useWindowDimensions()
    return <Icon width={width * scale} height={width * scale} name="sunny" />
}

export default Logo

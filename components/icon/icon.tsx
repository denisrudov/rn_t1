import React, { FC, FunctionComponent } from 'react'
import { SvgProps } from 'react-native-svg'

import sunny from './01_sunny_color.svg'
import cloud from './03_cloud_color.svg'
import sun_cloudy from './04_sun_cloudy_color.svg'
import lightning from './07_lightning_color.svg'

const icons = ['sunny', 'cloud', 'sun_cloudy', 'lightning'] as const

type IconName = (typeof icons)[number]

const iconMap: Record<IconName, FunctionComponent<SvgProps>> = {
    sunny,
    cloud,
    sun_cloudy,
    lightning,
}

export type IconProps = {
    name: IconName
}

const Icon: FC<IconProps & SvgProps> = ({ name, ...rest }) => {
    const Component = iconMap[name]
    return <Component {...rest} />
}

export default Icon

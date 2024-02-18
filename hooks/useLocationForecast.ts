import { useQuery } from 'react-query'
import { ForecastResponse } from '@/hooks/types'
import { API_KEY } from '@/utils/contants'

const useLocationForecast = (lat?: number, lon?: number) => {
    return useQuery<undefined, Error, ForecastResponse>({
        queryFn: async () => {
            if (!lat || !lon) {
                return
            }
            const searchParams = new URLSearchParams({
                lat: `${ lat }`,
                lon: `${ lon }`,
                units: 'metric',
                appid: API_KEY,
            })
            const resp = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?${ searchParams }`,
            )
            if (!resp.ok) {
                return
            }
            return resp.json()
        },
        queryKey: ['useLocationForecast', lat, lon],
    })
}

export default useLocationForecast

import { useQuery } from 'react-query'
import { CitiesResponseType } from '@/hooks/types'
import { API_KEY } from '@/utils/contants'


const useCitiesSearch = (cityName: string, limit = 5) => {
    return useQuery<undefined, Error, CitiesResponseType>({
        queryFn: async () => {
            if (!cityName) {
                return
            }

            const searchParams = new URLSearchParams({
                q: cityName,
                limit: `${ limit }`,
                appid: API_KEY,
            })

            const resp = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?${ searchParams }`,
            )

            if (!resp.ok || resp.status !== 200) {
                return
            }

            return resp.json()
        },
        queryKey: ['useCitiesSearch', cityName],
    })
}

export default useCitiesSearch

export type CitiesResponseType = CitiesResponseTypeChild[]
export type CitiesResponseTypeChildLocal_names = {
    kv: string
    el: string
    cs: string
    be: string
    tg: string
    so: string
    no: string
    lb: string
    sv: string
    km: string
    fr: string
    cv: string
    hu: string
    ku: string
    am: string
    pl: string
    hy: string
    ht: string
    ru: string
    mi: string
    co: string
    wa: string
    nl: string
    gl: string
    za: string
    is: string
    yi: string
    sq: string
    zu: string
    he: string
    mn: string
    uz: string
    br: string
    cu: string
    es: string
    bg: string
    sk: string
    uk: string
    an: string
    ga: string
    de: string
    oc: string
    th: string
    ja: string
    sc: string
    ka: string
    mk: string
    eu: string
    sl: string
    ug: string
    ps: string
    ur: string
    ha: string
    gv: string
    yo: string
    ca: string
    kn: string
    bn: string
    tk: string
    my: string
    li: string
    lv: string
    fa: string
    gn: string
    or: string
    sr: string
    ta: string
    et: string
    hi: string
    eo: string
    la: string
    ln: string
    bs: string
    ba: string
    zh: string
    tt: string
    mr: string
    fi: string
    te: string
    ky: string
    gu: string
    lt: string
    pa: string
    ar: string
    hr: string
    fy: string
    wo: string
    ko: string
    kk: string
    tl: string
    ml: string
    af: string
    sh: string
    bo: string
    it: string
    vi: string
    ne: string
    os: string
}
export type CitiesResponseTypeChild = {
    name: string
    local_names: CitiesResponseTypeChildLocal_names
    lat: number
    lon: number
    country: string
    state: string
}

export type ForecastResponse = {
    cod: string
    message: number
    cnt: number
    list: ForecastResponseList[]
    city: ForecastResponseCity
}
export type ForecastResponseListMain = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}
export type ForecastResponseListWeather = {
    id: number
    main: string
    description: string
    icon: string
}
export type ForecastResponseListClouds = {
    all: number
}
export type ForecastResponseListWind = {
    speed: number
    deg: number
    gust: number
}
export type ForecastResponseListSys = {
    pod: string
}
export type ForecastResponseList = {
    dt: number
    main: ForecastResponseListMain
    weather: ForecastResponseListWeather[]
    clouds: ForecastResponseListClouds
    wind: ForecastResponseListWind
    visibility: number
    pop: number
    sys: ForecastResponseListSys
    dt_txt: string
}
export type ForecastResponseCityCoord = {
    lat: number
    lon: number
}
export type ForecastResponseCity = {
    id: number
    name: string
    coord: ForecastResponseCityCoord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

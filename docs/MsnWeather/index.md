![Icon](icon.png)

# MSN Weather (Preview)

v1.0.0

MSN Weather gets you the very latest weather forecast, including temperature, humidity, precipitation for your location.


# Actions



## Get current weather
Get the current weather for a location.

**Operation Id:** CurrentWeather

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Location |  string  |  | true |
| Units |  string  |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CurrentWeather](#currentweather) | object |  |
___


## Get forecast for today
Get the forecast for the current day in the specified location.

**Operation Id:** TodaysForecast

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Location |  string  |  | true |
| Units |  string  |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WeatherForecast](#weatherforecast) | object |  |
___


## Get the forecast for tomorrow
Get the forecast for tomorrow in the specified location.

**Operation Id:** TomorrowsForecast

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Location |  string  |  | true |
| Units |  string  |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WeatherForecast](#weatherforecast) | object |  |
___

# Triggers


## When the current weather changes
Triggers a new flow when the specified weather measure changes for a location.

**Operation Id:** OnCurrentWeatherChange

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Location |  string  |  | true |
| Measure |  string  |  | true |
| When the measure... |  string  |  | true |
| Target |  float  |  | true |
| Units |  string  |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CurrentWeather](#currentweather) | object |  |
___

## When the current conditions change
Triggers a new flow when the conditions change for a location.

**Operation Id:** OnCurrentConditionsChange

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Location |  string  |  | true |
| Units |  string  |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CurrentWeather](#currentweather) | object |  |
___

## Objects

### CurrentWeather


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Pressure | float | The atmospheric pressure. | responses.weather.current.baro |
| Conditions | string | A caption of weather conditions such as rainy, sunny, etc. | responses.weather.current.cap |
| Dewpoint | float | The temperature at which dew forms. | responses.weather.current.dewPt |
| Apparent Temperature | float | The apparent temperature, or feels-like temperature. | responses.weather.current.feels |
| Humidity | float | The relative humidity percentage. | responses.weather.current.rh |
| METAR weather conditions | string | The METAR code of weather conditions. | responses.weather.current.wx |
| METAR Sky Conditions | string | The METAR code of sky conditions. | responses.weather.current.sky |
| Temperature | float | The current temperature. | responses.weather.current.temp |
| UV Index | float | The numerical UV index. | responses.weather.current.uv |
| UV Index Description | string | A description of the meaning of the UV index. | responses.weather.current.uvDesc |
| Visibility Distance | float | The visibility distance. | responses.weather.current.vis |
| Wind Direction | int32 | The wind direction in degrees clockwise from north. | responses.weather.current.windDir |
| Wind Speed | float | The wind speed. | responses.weather.current.windSpd |
| Wind Gust Speed | float | The wind gust speed. | responses.weather.current.windGust |
| Last Updated | date-time | The datetime at which provider created the current condition. | responses.weather.current.created |
| Latitude | float | The latitude of the location. | responses.source.coordinates.lat |
| Longitude | float | The longitude of the location. | responses.source.coordinates.lon |
| Click-through Link | string | The URL to the full weather details. | responses.source.clickThrough |
| Location | string | The location for which provider created the current condition. | responses.source.location |
| Pressure Units | string | Units used for pressure measurements. | units.pressure |
| Temperature Units | string | Units used for temperature measurements. | units.temperature |
| Speed Units | string | Units used for speed measurements. | units.speed |
| Distance Units | string | Units used for distance measurements. | units.distance |

### WeatherForecast


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Conditions | string | The caption of weather conditions such as rainy, sunny, etc. | responses.daily.day.cap |
| Rain Chance | float | The chance of precipitation (%). | responses.daily.day.precip |
| METAR Weather Conditions | string | The METAR code of weather conditions. | responses.daily.day.wx |
| METAR Sky Conditions | string | The METAR code of sky conditions. | responses.daily.day.sky |
| Wind Direction | int32 | The wind direction in degrees clockwise from north. | responses.daily.day.windDir |
| Wind Speed | float | The wind speed. | responses.daily.day.windSpd |
| Summary | string |  | responses.daily.day.summary |
| Conditions | string | The caption of weather conditions such as rainy, sunny, etc. | responses.daily.night.cap |
| Rain Chance | float | The chance of precipitation (%). | responses.daily.night.precip |
| METAR Weather Conditions | string | The METAR code of weather conditions. | responses.daily.night.wx |
| METAR Sky Conditions | string | The METAR code of sky conditions. | responses.daily.night.sky |
| Wind Direction | int32 | The wind direction in degrees clockwise from north. | responses.daily.night.windDir |
| Wind Speed | float | The wind speed. | responses.daily.night.windSpd |
| Summary | string |  | responses.daily.night.summary |
| Conditions | string | The caption of weather conditions such as rainy, sunny, etc. | responses.daily.pvdrCap |
| Date | date-time | The datetime at which the forecast is valid. | responses.daily.valid |
| Rain Chance | float | The chance of precipitation (%). | responses.daily.precip |
| Max Wind Speed | float | The peak wind speed for the day. | responses.daily.windMax |
| Max Wind Direction | int32 | The direction of the peak wind for the day. | responses.daily.windMaxDir |
| Humidity High | float | The high relative humidity point for the day. | responses.daily.rhHi |
| Humidity Low | float | The low relative humidity point for the day. | responses.daily.rhLo |
| Temperature High | float | The high temperature. | responses.daily.tempHi |
| Temperature Low | float | The low temperature. | responses.daily.tempLo |
| UV Index | float | The numerical UV index. | responses.daily.uv |
| UV Index Description | string | A description of the meaning of the UV index. | responses.daily.uvDesc |
| Forecast Date | date-time | The datetime at which the daily forecast was dervied. | responses.daily.created |
| Sunrise Time | date-time | Time of sunrise on the day of this forecast. | responses.almanac.sunrise |
| Sunset Time | date-time | Time of sunset on the day of this forecast. | responses.almanac.sunset |
| Moonrise Time | date-time | Time of moonrise on the day of this forecast. | responses.almanac.moonrise |
| Moonset Time | date-time | Time of moonset on the day of this forecast. | responses.almanac.moonset |
| Moon Phase | string | The phase of the moon the day of this forecast. | responses.almanac.moonPhase |
| Moon Phase Code | string | The code representing the phase of the moon. | responses.almanac.moonPhaseCode |
| Latitude | float | The latitude of the location. | responses.source.coordinates.lat |
| Longitude | float | The longitude of the location. | responses.source.coordinates.lon |
| Click-through Link | string | The URL back to the full weather details. | responses.source.clickThrough |
| Location | string | The location for which provider created the forecast. | responses.source.location |
| Pressure Units | string | Units used for pressure measurements. | units.pressure |
| Temperature Units | string | Units used for temperature measurements. | units.temperature |
| Speed Units | string | Units used for speed measurements. | units.speed |
| Distance Units | string | Units used for distance measurements. | units.distance |

### MeasureUnits


| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | string |  | displayText |
|  | string |  | units |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 8 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


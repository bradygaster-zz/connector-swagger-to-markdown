![Icon](icon.png)

# MSN Weather

Preview

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


| Summary | Type | Description |
|---------|------|-------------|
|  | object |  |
|  | object |  |

### WeatherForecast


| Summary | Type | Description |
|---------|------|-------------|
|  | object |  |
|  | object |  |

### MeasureUnits


| Summary | Type | Description |
|---------|------|-------------|
|  | Array of  |  |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |
| Frequency of trigger polls | 1 |  seconds |


![Icon](icon.png)

# Bitly (Preview)

v1.0

Bitly is a link management tool. You can shorten links, reroute existing ones and associate them with campaigns across channels and devices.


# Actions

## Create a bitlink
Create a shortened Bitlink

**Operation Id:** CreateBitlink

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| URL | string | The URL to shorten | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Bitlink](#bitlink) | object | A Bitlink including both shortened and original URL |

___

# Triggers

## When a Bitlink is created
When a Bitlink is created

**Operation Id:** OnBitlinkCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BitlinkArray](#bitlinkarray) | array |  |

___


## Objects

### Bitlink
A Bitlink including both shortened and original URL

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Url | string | The shortened Url | url |
| Long Url | string | The original long Url | long_url |

### BitlinkArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Bitlink](#bitlink) |  |  |  |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


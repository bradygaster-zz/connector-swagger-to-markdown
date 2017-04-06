<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# YouTube (Preview)

YouTube allows billions of people to discover, watch and share originally-created videos. YouTube provides a forum for people to connect, inform, and inspire others across the globe and acts as a distribution platform for original content creators and advertisers large and small.


# Triggers

## When a video is uploaded by a channel
Triggers a flow when a video is uploaded by a channel

**Operation Id:** OnNewVideoInChannel

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel Id | string | Unique ID of the channel to watch for new videos | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VideoList](#videolist) | object | A YouTube videoListResponse object |

___

## When I upload a video
Triggers a flow when you upload a video to your channel

**Operation Id:** OnMyNewVideo

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VideoList](#videolist) | object | A YouTube videoListResponse object |

___

## When a new video matches a search
Triggers a flow when a new video matches a search

**Operation Id:** OnNewVideoMatchingSearch

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Query | string | The search query | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VideoList](#videolist) | object | A YouTube videoListResponse object |

___


## Objects

### SubscriptionList
A YouTube subscriptionListResponse object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Subscription](#subscription) | Subscriptions in the list | items |

### Subscription
A YouTube subscription object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Channel ID | string | The unique ID of the channel | channelId |
| Channel Title | string | The title of the channel | title |

### VideoList
A YouTube videoListResponse object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Video](#video) | Videos in the list | items |

### Video
A YouTube video object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Video ID | string | The identifier of the video | id |
| HTML Link | string | A link to the video | htmlLink |
| [VideoSnippet](#videosnippet) | object | Model of a concise summary of the video | snippet |

### VideoSnippet
Model of a concise summary of the video

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the video | title |
| Description | string | The description of the video | description |
| Channel Title | string | The title of the channel | channelTitle |
| Channel ID | string | The identifier of the channel | channelId |
| Published At | date-time | Videos in the list | publishedAt |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| Frequency of trigger polls | 1 | 900 seconds |


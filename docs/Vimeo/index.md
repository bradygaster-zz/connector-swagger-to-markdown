<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Vimeo (Preview)

v1.0.0

Vimeo is a powerful tool for video management, marketing, and analytics all in one place.


# Triggers

## When I upload a new video
Triggers a flow when the logged in user uploads a new video

**Operation Id:** OnVideoUpload

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Video](#video) |  |  |

___

## When a video is added to a channel
Triggers a new flow when a video is added to a channel

**Operation Id:** OnNewVideoInChannel

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel ID | string | Unique ID of the channel to watch for new videos | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [VideoWithChannelId](#videowithchannelid) |  |  |

___


## Objects

### Channel
A Vimeo Channel

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| idPlusName | string | id,name | idPlusName |
| Channel Name | string | Name of the channel | name |
| Channel ID | string | ID of the given channel | id |
| Channel Link | string | Link to the channel | link |
| Channel Description | string | Description of the channel | description |
| Channel URI | string | URI of given channel | uri |
| Created Time | date-time | The time the channel was initially uploaded | created_time |

### VideoWithChannelId
A Vimeo video

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Video Name | string | Name of the video | name |
| Video Link | string | Link to the video | link |
| Video Description | string | Description of the uploaded video | description |
| Created Time | date-time | The time the video was initially uploaded | created_time |
| Modified Time | date-time | The time the video was last modified | modified_time |
| Channel ID | string | ID of the channel this video was added to | channel_id |
| Channel Name | string | Name of the channel this video was added to | channel_name |
| Video Author | string | Name of the user who uploaded the video | user.name |
| Video Author Link | string | Link to the user who uploaded the video | user.link |

### Video
A Vimeo video

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Video Name | string | Name of the video | name |
| Video Link | string | Link to the video | link |
| Video Description | string | Description of the uploaded video | description |
| Created Time | date-time | The time the video was initially uploaded | created_time |
| Modified Time | date-time | The time the video was last modified | modified_time |
| Video Author | string | Name of the user who uploaded the video | user.name |
| Video Author Link | string | Link to the user who uploaded the video | user.link |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 25 | 90 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


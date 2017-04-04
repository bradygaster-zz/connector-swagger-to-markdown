<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Slack (Preview)

v1.0

Slack is a team communication tool, that brings together all of your team communications in one place, instantly searchable and available wherever you go.


# Actions

## Post Message
Post a Message to a specified channel.

**Operation Id:** PostMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel Name | string | Channel, private group, or IM channel to send message to. Can be a name(ex: #general) or an encoded ID. | true |
| Message Text | string | Text of the message to send. For formatting options, see https://api.slack.com/docs/formatting. | true |
| Bot Name | string | Name of the bot | false |
| Post As User | boolean | Pass true to post the message as the authenticated user, instead of as a bot | false |
| Parse Mode | string | Change how messages are treated. For details, see https://api.slack.com/docs/formatting. | false |
| Link Names | int32 | Find and link channel names and usernames. | false |
| Unfurl Links | boolean | Pass true to enable unfurling of primarily text-based content. | false |
| Unfurl Media | boolean | Pass false to disable unfurling of media content. | false |
| Icon Url | uri | URL to an image to use as an icon for this message | false |
| Icon Emoji | string | Emoji to use as an icon for this message | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PostOperationResponse](#postoperationresponse) | object | Represents response of post operation of Slack Connector for posting to Slack |

___


## Objects

### PostOperationResponse
Represents response of post operation of Slack Connector for posting to Slack

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ok | boolean | Indicates if the operation was successful | ok |
| channel | string | The channel which the message was posted to. | channel |
| ts | string | The time stamp for when the message is posted. | ts |
| [MessageItem](#messageitem) | object | A channel message. | message |
| error | string | Error messages (if any). | error |

### MessageItem
A channel message.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| text | string | Message content text | text |
| id | string | Message Id | id |
| user | string | Id of the user who posted the message | user |
| created | int64 | Unix timestamp for when the message is created | created |
| is_user-deleted | boolean | Whether or not the message has been deleted | is_user-deleted |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |



<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Disqus (Preview)

Disqus is a service for web comments and discussions. Disqus makes commenting easier and more interactive, helping publishers power online discussions.


# Actions

## Create a comment
Create a comment on a specified thread.

**Operation Id:** CreatePost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Discussion Id | string |  | true |
| Message | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatePostResponse](#createpostresponse) | object |  |

___

## Reply to a comment
Reply to a specified comment.

**Operation Id:** ReplyToPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Parent Comment Id | string |  | true |
| Message | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatePostResponse](#createpostresponse) | object |  |

___

## Remove a comment
Remove a comment.

**Operation Id:** RemovePost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Comment Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [OperationResultResponse](#operationresultresponse) | object |  |

___

## Get followed channels
Get a list of the channels the current user follows.

**Operation Id:** GetFollowedForums

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FollowedForums](#followedforums) | array |  |

___

## Follow a discussion
Follow a discussion.

**Operation Id:** SubscribeToThread

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Discussion Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [EmptyResponse](#emptyresponse) | object |  |

___

## Open a discussion
Opens a new discussion (for moderators of this forum only).

**Operation Id:** OpenThread

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Discussion Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [OperationResultResponse](#operationresultresponse) | object |  |

___

## Close a discussion
Closes a discussion (for moderators of this forum only).

**Operation Id:** CloseThread

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Discussion Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [OperationResultResponse](#operationresultresponse) | object |  |

___

## Recommend a discussion
Recommend a discussion.

**Operation Id:** RecommendThread

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Discussion Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RecommendThreadResponse](#recommendthreadresponse) | object |  |

___

## Get discussions in a channel
Returns a list of discussions in the specified channel.

**Operation Id:** GetForumThreads

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ThreadsList](#threadslist) | array |  |

___

# Triggers

## When a comment is created
Triggers a flow when a comment is created on a specified discussion.

**Operation Id:** OnPostCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel | string |  | true |
| Discussion | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PostsList](#postslist) | array |  |

___

## When a discussion is created
Triggers a flow when a discussion is created on a specified forum.

**Operation Id:** OnThreadCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Channel | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ThreadsList](#threadslist) | array |  |

___


## Objects

### Post


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Dislikes | int32 | Number of dislikes. | dislikes |
| Discussion Id | string | The id of the discussion. | thread |
| Likes | int32 | Number of likes. | likes |
| HTML Message | string | The message text in HTML. | message |
| Comment Id | string | The id of the comment. | id |
| [Author](#author) | object |  | author |
| Is Spam | boolean |  | isSpam |
| Created At | date-time | The date/time the comment was created at. | createdAt |
| Parent Comment Id | int32 | The id of the parent discussion. | parent |
| Is Approved | boolean | Set to true if the moderator has approved the comment. | isApproved |
| Is Flagged | boolean | Set to true if the comment has been flagged. | isFlagged |
| Message | string | The message text in raw format (not HTML). | raw_message |
| Is Featured | boolean | Set to true if the comment is featured. | isHighlighted |
| Channel Id | string | The id of the channel. | forum |
| Is Edited | boolean | Set to true if the comment is edited. | isEdited |

### Author


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Author Id | string | The id of the author. | id |
| Author Join Date | date-time | The date/time the author joined Disqus. | joinedAt |
| Is Verified Author | boolean | Set to true if the author is verified. | isVerified |
| Author Username | string | The username of the author. | username |
| About the Author | string | Details about the author. | about |
| Author Name | string | The name of the author. | name |
| Author Profile URL | string | The URL of the author profile. | profileUrl |
| Is Anonymous Author | boolean | Set to true if the author is anonymous. | isAnonymous |

### Thread


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| RSS Feed | string | The URL of the RSS feed. | feed |
| Dislikes | int32 | The number of dislikes on the discussion. | dislikes |
| Likes | int32 | The number of likes on the discussion. | likes |
| HTML Message | string | The message text in HTML. | message |
| Discussion Id | string | The id of the discussion. | id |
| Author Id | string | The id of the author. | author |
| Created At | date-time | The date/time the discussion was created at. | createdAt |
| Message | string | The message text in raw format (not HTML). | raw_message |
| Link | string | The link to the discussion. | link |
| Channel Id | string | The id of the channel. | forum |
| Number of comments | int32 | The number of comments on this discussion. | posts |
| Title | string | The title of the discussion. | title |

### Forum


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| HTML Description | string | The description of the channel in HTML. | description |
| Channel URL | string | The URL of the channel. | url |
| Description | string | The description of the channel in raw format (not HTML). | raw_description |
| Language | string | Language Code | language |
| Days Alive | int32 | The number of days the channel has been alive. | daysAlive |
| Channel Id | string | The id of the channel. | id |
| Created At | date-time | The date/time the channel was created at. | createdAt |
| Channel Name | string | The name of the channel. | name |

### FollowedForums


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Forum](#forum) | object |  |  |

### CreatePostResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Post](#post) | object |  | response |

### OperationResultResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| response | array of object |  | response |

### RecommendThreadResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Thread](#thread) | object |  | response.thread |
| Vote | int32 | Result after voting | response.vote |

### PostsList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Post](#post) | object |  |  |

### ThreadsList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Thread](#thread) | object |  |  |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


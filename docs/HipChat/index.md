<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# HipChat (Preview)

v1.0.0

HipChat is group chat, video chat and screen sharing tool for teams of all sizes. Built for business, HipChat is persistent, searchable and loaded with goodies your team will love.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Peronal Access Token https://aka.ms/v6fdie | Generate a personal access token with all scopes selected and paste it here. | securestring |


# Actions

## List users in a room
Gets all members of an existing room.

**Operation Id:** ListUsers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Room ID | string | Room | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserList](#userlist) | object |  |

___

## Get user by Id
Get a user&#x27;s details by user id.

**Operation Id:** GetUserByID

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object |  |

___

## Post message to a room
Post new message to an existing room.

**Operation Id:** PostMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Room ID | string | Room | true |
| Message | string | Text of the message. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewMessage](#newmessage) | object |  |

___

## Add a user to a room
Adds a member to a private room.

**Operation Id:** AddUserToRoom

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Room ID | string | Room | true |
| User Id or Email | string | The id, email or mention name of the user. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

# Triggers

## When a message is posted to a room
Triggers when a new message is posted to an existing room.

**Operation Id:** OnNewMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Room ID | string | Room | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [HistoryResponse](#historyresponse) | object |  |

___

## When a file is uploaded to a room
Triggers when a file is uploaded an existing room.

**Operation Id:** OnNewFile

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Room ID | string | Room | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [HistoryResponse](#historyresponse) | object |  |

___

## When a new room is added
Triggers when a room is created.

**Operation Id:** OnNewRoom

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RoomList](#roomlist) | object |  |

___


## Objects

### HistoryResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| items | array of object |  | items |
| Date Posted | date-time | Date the message was sent in ISO-8601 format. | items.date |
| File Name | string | Name of the file. | items.file.name |
| File URL | string | URL of the file. | items.file.url |
| User Id | int32 | Author&#x27;s user id. | items.from.id |
| Mention Name | string | Author&#x27;s mention name. | items.from.mention_name |
| User Name | string | Author&#x27;s display user name. | items.from.name |
| Message Id | string | Unique id of the message. | items.id |
| Message | string | Body of the message. | items.message |

### UserList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| items | array of object |  | items |
| User Id | int32 | Member&#x27;s user id. | items.id |
| Mention Name | string | Member&#x27;s mention name. | items.mention_name |
| User Name | string | Member&#x27;s display user name. | items.name |

### NewMessage


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Message Id | string | Unique id of the message. | id |
| Date Posted | string | Date the message was sent in ISO-8601 format. | timestamp |

### RoomList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| items | array of object |  | items |
| Room Id | int32 | Id of the room. | items.id |
| Archived | boolean | True if the room is archived. | items.is_archived |
| Room Name | string | Name of the room. | items.name |
| Private | string | True if the room is private. | items.privacy |

### UserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email | string | User&#x27;s email. | email |
| User Id | int32 | User&#x27;s id. | id |
| Mention Name | string | User&#x27;s @mention name. | mention_name |
| Name | string | User&#x27;s full name. | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


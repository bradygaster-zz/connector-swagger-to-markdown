<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Campfire (Preview)

Campfire is an instant messaging tool used for communication and file sharing within teams.


# Actions

## Create a message
Sends a message to the given room.

**Operation Id:** CreateMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account in Campfire | true |
| RoomId | string | A room associated with the account | true |
| Message text to be created | string | Message text to be created | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateMessageResponse](#createmessageresponse) | object | A message |

___

## Get user by ID
Retrieves information about a user by given ID

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account in Campfire | true |
| User ID | int32 | User ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object |  |

___

# Triggers

## When a room is created
Triggers when a new room is added to the authenticated user&#x27;s account. Not applicable to Basecamp.

**Operation Id:** OnNewRoom

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account in Campfire | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RoomsResponse](#roomsresponse) | object | Collection of Room Data |

___

## When a new message is received
Triggers when a new message is received in a given room.

**Operation Id:** OnNewMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account in Campfire | true |
| RoomId | string | A room associated with the account | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MessagesResponse](#messagesresponse) | object | A collection of message data in Campfire |

___

## When a file is uploaded
Triggers when a file is uploaded to a given room. Not applicable to Basecamp.

**Operation Id:** OnNewUpload

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account in Campfire | true |
| RoomId | string | A room associated with the account | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UploadResponse](#uploadresponse) | object | Data for uploaded files in Campfire |

___


## Objects

### AccountsResponse
Account data for an account in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Accounts | array of object | Collection Of Accounts | accounts |
| Account Id | int32 | Id of the account | accounts.id |
| Account Name | string | Name of the account | accounts.name |
| Account Link | string | Link to the account | accounts.app_href |
| Account url | string | Account Url | accounts.account_url |

### Account
Account in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Account Id | int32 | Id of the account | id |
| Account Name | string | Name of the account | name |
| Account Link | string | Link to the account | app_href |
| Account url | string | Account Url | account_url |

### RoomsResponse
Collection of Room Data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Rooms | array of object | Collection of Rooms | rooms |
| Room Name | string | Room name. | rooms.name |
| Room Id | string | Room Id. | rooms.id |
| Room Locked | boolean | Boolean value, True if a room is locked. | rooms.locked |
| Room Topic | string | Room topic or description. | rooms.topic |

### Room
Data associated with a room

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Room Name | string | Room name. | name |
| Room Id | int32 | Room Id. | id |
| Room Locked | boolean | Boolean value, True if a room is locked. | locked |
| Room Topic | string | Room topic or description. | topic |

### MessagesResponse
A collection of message data in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Messages | array of object | Collection Of messages | messages |
| Message Body | string | Message Body. | messages.body |
| Message Id | int32 | Message Id. | messages.id |
| Message Starred | boolean | Boolean value, True if a message is starred. | messages.starred |
| User ID | int32 | The unique ID of the user who created the message. | messages.user_id |

### Message
A Campfire message

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Message Body | string | Message Body. | body |
| Message Id | int32 | Message Id. | id |
| Message Starred | boolean | Boolean value, True if a message is starred. | starred |

### UploadResponse
Data for uploaded files in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Uploads | array of object | Collection of Uploads | uploads |
| File Url | string | File Url. | uploads.full_url |
| Room Id | int32 | Room Id. | uploads.room_id |
| File Id | int32 | File Id. | uploads.id |
| Content Type | string | Format of the uploaded file. | uploads.content_type |
| File Name | string | File name. | uploads.name |
| Created At | date-time | Timestamp of upload. | uploads.created_at |

### Upload
Data for an uploaded file in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| File Url | string | File Url. | full_url |
| Room Id | int32 | Room Id. | room_id |
| File Id | int32 | File Id. | id |
| Content Type | string | Format of the uploaded file. | content_type |
| File Name | string | File name. | name |
| Created At | date-time | Timestamp of upload. | created_at |

### CreateUploadResponse
Data for an uploaded file in Campfire

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Upload](#upload) | object | Data for an uploaded file in Campfire | upload |

### CreateMessageResponse
A message

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Message Body | string | Message Body. | message.body |
| Message Id | int32 | Message Id. | message.id |
| Message Starred | boolean | Boolean value, true if a message is starred. | message.starred |
| User ID | int32 | The unique ID of the user who created the message. | message.user_id |

### UserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Email | string |  | user.email_address |
| User Name | string |  | user.name |
| User ID | int32 |  | user.id |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| Frequency of trigger polls | 1 | 15 seconds |


<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Pinterest (Preview)

Pinterest allows you to create a bulletin of photos called a Board. You can follow boards, add pins to existing ones or collaborate with people to build shared boards.


# Actions

## List boards I follow
List boards I follow

**Operation Id:** ListFollowBoards

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BoardResponse](#boardresponse) | object | BoardResponse |

___

## List my boards
List my boards

**Operation Id:** ListMyBoards

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BoardResponse](#boardresponse) | object | BoardResponse |

___

## Create board
Create board

**Operation Id:** CreateBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | Name | true |
| Description | string | Description | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BoardResponseData](#boardresponsedata) | object | BoardResponseData |

___

## Edit board
Edit board

**Operation Id:** EditBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |
| Name | string | Name | false |
| Description | string | Description | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BoardResponse](#boardresponse) | object | BoardResponse |

___

## List all pins
List all pins

**Operation Id:** ListAllPins

#### Parameters
This operation does not require any input.

#### Returns
This operation does not return anything.

___

## List pins from a board
List pins from a board

**Operation Id:** ListPinsFromBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PinResponse](#pinresponse) | object | PinResponse |

___

## Create pin
Create pin

**Operation Id:** CreatePin

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |
| Note | string | The user-entered description of the pin | true |
| Image Url | string | The link to the image that you want to pin (source) | true |
| Link | string | The url the pin will link to when you click through | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PinResponseData](#pinresponsedata) | object | PinResponseData |

___

## Edit pin
Edit pin

**Operation Id:** EditPin

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |
| Pin | string | Pin | true |
| Note | string | The user-entered description of the pin | true |
| Link | string | The url the pin will link to when you click through | false |
| Board to move pin to | string | The board to move the pin to | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PinResponse](#pinresponse) | object | PinResponse |

___

## Get current user
Get current user

**Operation Id:** GetCurrentUser

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object | UserResponse |

___

## List my followers
List my followers

**Operation Id:** ListMyFollowers

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object | UserResponse |

___

## List my followings
List my followings

**Operation Id:** ListMyFollowings

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object | UserResponse |

___

# Triggers

## When pin is added to followed board
When pin is added to followed board

**Operation Id:** OnPinAddedToFollowedBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PinResponse](#pinresponse) | object | PinResponse |

___

## When pin is added to my board
When pin is added to my board

**Operation Id:** OnPinAddedToMyBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board | string | Board | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PinResponse](#pinresponse) | object | PinResponse |

___

## When someone follows me
When someone follows me

**Operation Id:** OnSomeoneFollowsMe

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object | UserResponse |

___


## Objects

### BoardResponse
BoardResponse

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board Data | Array of [BoardResponseData](#boardresponsedata) | Board Data | data |

### BoardResponseData
BoardResponseData

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Url | string | Url | url |
| Id | string | Id | id |
| Name | string | Name | name |

### PinResponse
PinResponse

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Pin Data | Array of [PinResponseData](#pinresponsedata) | Pin Data | data |

### PinResponseData
PinResponseData

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Url | string | Url | url |
| Note | string | Note | note |
| Link | string | Link | link |
| Id | string | Id | id |

### UserResponse
UserResponse

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Data | Array of [UserResponseData](#userresponsedata) | User Data | data |
| [UserResponsePage](#userresponsepage) | object | UserResponsePage | page |

### UserResponseData
UserResponseData

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Url | string | Url | url |
| First name | string | First name | first_name |
| Last Name | string | Last Name | last_name |
| Id | string | User Id | id |

### UserResponsePage
UserResponsePage

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Cursor | string | Cursor | cursor |
| Next | string | Next | next |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |



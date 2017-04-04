<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# LeanKit (Preview)

v1.0.0

Helping teams work together to deliver customer value, faster.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Username | The username for this api | string |
| Password | The password for this api | securestring |
| Site url | Root site url (Example: https://my.leankit.com ) | string |


# Actions

## Create a new board
This operation is used to create a new LeanKit board.

**Operation Id:** CreateBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string |  | true |
| Description | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateBoardResponse](#createboardresponse) | object |  |

___

## Create a new card
This operation is used to create a new card in LeanKit.

**Operation Id:** CreateCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Pick a board. | true |
| Type | string | Pick a card type. | true |
| Title | string |  | true |
| Description | string |  | false |
| Lane Id | string | Pick a card lane. | false |
| Priority | string | Pick a card priority. | false |
| Size | int32 |  | false |
| Tags | string | Comma seperated list of tags. | false |
| Planned Start Date | string | YYYY-MM-DD | false |
| Planned Finish Date | string | YYYY-MM-DD | false |
| Card Id | string |  | false |
| Is Blocked | boolean | True if the card is blocked. | false |
| Block Reason | string |  | false |
| External Link Label | string |  | false |
| External Link URL | string |  | false |
|  | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateCardResponse](#createcardresponse) | object |  |

___

## Get a card
This operation is used to retrieve all information about a card, given its id.

**Operation Id:** GetCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Card Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CardResponse](#cardresponse) | object |  |

___

## Update a card
This operation is used to update the details of an existing card given its id.

**Operation Id:** UpdateCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Card Id | string |  | true |
| Type | string | Pick the card type. | false |
| Title | string |  | false |
| Description | string |  | false |
| Lane Id | string | Pick a card lane. | false |
| Priority | string | Pick a card priority. | false |
| Size | int32 |  | false |
| Tags | string | Comma-seperated list of tags. | false |
| Planned Start Date-Time | string | YYYY-MM-DD | false |
| Planned Finish Date-Time | string | YYYY-MM-DD | false |
| Card Id | string |  | false |
| Is Blocked | boolean | True if the card is blocked. | false |
| Block Reason | string |  | false |
| External Link Label | string | The label of the external link. | false |
| External Link URL | string | The URL of the external link. | false |
|  | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CardResponse](#cardresponse) | object |  |

___

## Delete a card
This operation is used to delete an existing card in LeaKit.

**Operation Id:** DeleteCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Card Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CardResponse](#cardresponse) | object |  |

___

## Add comment to a card
This operation is used to add a comment to an existing card in LeanKit.

**Operation Id:** AddComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Card Id | string |  | true |
| Comment | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddCommentResponse](#addcommentresponse) | object |  |

___

# Triggers

## When a new card is added
Triggers when a new card is added to the given board and lane.

**Operation Id:** TrigNewCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Pick a board. | true |
| Lane Id | string | Pick a lane. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigCardsResponse](#trigcardsresponse) | array |  |

___

## When a card is updated
Triggers when the details of an existing card are updated.

**Operation Id:** TrigUpdateCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Pick a board. | true |
| Lane Id | string | Pick a lane. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigCardsResponse](#trigcardsresponse) | array |  |

___


## Objects

### CreateBoardRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string |  | title |
| Description | string |  | description |

### CreateCardRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board Id | string | Pick a board. | boardId |
| Type | string | Pick a card type. | typeId |
| Title | string |  | title |
| Description | string |  | description |
| Lane Id | string | Pick a card lane. | laneId |
| Priority | string | Pick a card priority. | priority |
| Size | int32 |  | size |
| Tags | string | Comma seperated list of tags. | tags |
| Planned Start Date | string | YYYY-MM-DD | plannedStart |
| Planned Finish Date | string | YYYY-MM-DD | plannedFinish |
| Card Id | string |  | customId |
| Is Blocked | boolean | True if the card is blocked. | isBlocked |
| Block Reason | string |  | blockReason |
| External Link Label | string |  | externalLink.label |
| External Link URL | string |  | externalLink.url |
| Assignees | array of string | Array of user Ids (numbers). | assignedUserIds |
|  | string |  | assignedUserIds |

### UpdateCardRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Type | string | Pick the card type. | typeId |
| Title | string |  | title |
| Description | string |  | description |
| Lane Id | string | Pick a card lane. | laneId |
| Priority | string | Pick a card priority. | priority |
| Size | int32 |  | size |
| Tags | string | Comma-seperated list of tags. | tags |
| Planned Start Date-Time | string | YYYY-MM-DD | plannedStart |
| Planned Finish Date-Time | string | YYYY-MM-DD | plannedFinish |
| Card Id | string |  | customId |
| Is Blocked | boolean | True if the card is blocked. | isBlocked |
| Block Reason | string |  | blockReason |
| External Link Label | string | The label of the external link. | externalLink.label |
| External Link URL | string | The URL of the external link. | externalLink.url |
| Assignees | array of string | Array of user Ids (numbers). | assignedUserIds |
|  | string |  | assignedUserIds |

### AddCommentRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comment | string |  | text |

### CreateBoardResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board Id | string | Unique identifier of the board. | id |

### CreateCardResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Card Id | int32 | Unique identifier of the card. | id |

### ListBoardsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Boards | array of object | Boards array. | boards |
| Id | string | Board id. | boards.id |
| Title | string | Board title. | boards.title |

### GetBoardResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Card Type | array of object | Type of card. | cardTypes |
| Type | string | Card type. | cardTypes.name |
| Lanes | array of object | Board lanes. | lanes |
| Id | string | Lane id. | lanes.id |
| Name | string | Lane name. | lanes.name |
| Priorities | array of object | Board priorities. | priorities |
| Name | string | Priority name. | priorities.name |

### AddCommentResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Comment id. | id |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | createdOn |
| Id | string | Comment author&#x27;s user id. | createdBy.id |
| Email | string | Email address of the comment author. | createdBy.emailAddress |
| Name | string | Full name of the comment author. | createdBy.fullName |
| Comment | string | Body of the comment. | text |

### TrigCardsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [CardResponse](#cardresponse) | object |  |  |

### ListCardsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| cards | Array of [CardResponse](#cardresponse) | cards | cards |

### CardResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Finish Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | actualFinish |
| Start Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | actualStart |
| Is Blocked | boolean | True if the card is blocked. | blockedStatus.isBlocked |
| Reason | string | Reason the card is blocked. | blockedStatus.reason |
| Blocked Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | blockedStatus.date |
| Id | string | Board id. | board.id |
| Title | string | Board title. | board.title |
| Version | int32 | Board version. | board.version |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | createdOn |
| Archived Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | archivedOn |
| Description | string | Card&#x27;s description. | description |
| Planned Finish Date | string | yyyy-MM-dd | plannedFinish |
| Value | string | Card&#x27;s custom id value. | customId.value |
| Card Id | string | Id of the Card. | id |
| Description | string | Lane description. | lane.description |
| Id | string | Lane id. | lane.id |
| Class Type | string | Lane&#x27;s class type. | lane.laneClassType |
| Type | string | Lane type. | lane.laneType |
| Title | string | Lane title. | lane.title |
| Updated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updatedOn |
| Moved Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | movedOn |
| Priority | string | Priority of task on card. | priority |
| Size | int32 | Card size. | size |
| Planned Start Date | string | yyyy-MM-dd | plannedStart |
| Title | string | Card title. | title |
| Version | string | Card version. | version |
| Type | string | Card type. | type.title |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


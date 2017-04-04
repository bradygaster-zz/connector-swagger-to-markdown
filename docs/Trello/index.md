<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Trello

v1.0

Trello gives you perspective over all your projects, at work and at home.  It is an easy, free, flexible, and visual way to manage your projects and organize anything.  Connect to Trello to manage your boards, lists and cards.


# Actions

## List the cards in a board
List the cards in a board

**Operation Id:** ListCards

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Id of the board to fetch all the cards | true |
| Actions | string | List the actions to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Attachments | boolean | Show attachments | false |
| Attachment fields | string | List the attachment fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Stickers | boolean | Show stickers | false |
| Members | boolean | Show members | false |
| Member fields | string | List the member fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Check card states | boolean | Return the card states | false |
| Checklists | string | Show checklists | false |
| Limit | int32 | The max number of results to return, between 1 and 1000 | false |
| Limit | date-time | Fetch all cards after this date | false |
| Before | date-time | Fetch all cards before this date | false |
| Filter | string | Filter the response | false |
| Fields | string | List the card fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Card](#card) |  |

___

## Get a card by Id
Get a card by Id

**Operation Id:** GetCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Id of the board to fetch cards in | true |
| Card Id | string | Id of the card to fetch | true |
| Actions | string | List the actions to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Actions entities | boolean | Return action entities | false |
| Actions display | boolean | Return action displays | false |
| Actions limit | int32 | Max number of actions to return | false |
| Action fields | string | List of action fields to return for each action. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Member creator action fields | string | List of action member creator fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Attachments | boolean | Return attachments | false |
| Attachments fields | string | List of attachment fields to return for each attachment. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Members | boolean | Return members | false |
| Member fields | string | List of member fields to return for each member. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Voted members | boolean | Return voted members | false |
| Voted member fields | string | List of voted member fields to return for each voted member. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Check item states | boolean | Return card states | false |
| Item state fields | string | List of state fields to return for each of the card item state. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Checklists | string | Return checklists | false |
| Checklist fields | string | List of checklist fields to return for each checklist. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Board | boolean | Return the board which the card belongs to | false |
| Board fields | string | List the board fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| List | boolean | Return the list which the card belongs to | false |
| List fields | string | List the list fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Stickers | boolean | Return stickers | false |
| Sticker fields | string | List the sticker fields to return for each sticker. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Fields | string | List the card fields to return | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Card](#card) | object | A Trello Card Object |

___

## Update a card
Update a card

**Operation Id:** UpdateCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board id | string | Id of the board to fetch cards from | true |
| Card id | string | Id of the card to update | true |
| Name | string | Updated name of the new card | true |
| Description | string | Updated description of the new card | false |
| Is closed | boolean | Specify whether the card is closed | false |
| Member Ids | string | Id of the members to add to the card | false |
| Cover attachment Ids | string | Id of the attachemnt to attach to the card | false |
| Board Id | string | Id of the board to attach the card to | false |
| List Id | string | Id of the list to attach the card to | false |
| Position | string | Updated position of the card on the page | false |
| Due date | string | Updated due date of the card | false |
| Subscribed to card | boolean | Specify whether to subscribe to the card | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Card](#card) | object | A Trello Card Object |

___

## Delete a card
Delete a card

**Operation Id:** DeleteCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Id of the board to fetch cards from | true |
| Card Id | string | Id of the card to delete | true |

#### Returns
This operation does not return anything.

___

## Create a card
Creates a card

**Operation Id:** CreateCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Id of the board to create the card in | true |
| Parent list Id | string | Id of the list that the card should be added to | true |
| Card name | string | The name of the new card | true |
| Card description | string | The description of the new card | false |
| Card position | string | The position of the card. Specify top, bottom, or a positive number | false |
| Member Id | string | A comma seperated list of member Ids to attach to the card | false |
| Label Id | string | A comma-separated list of labels Ids to attach to the card | false |
| Source url | string | Source url of the card. Has to be a URL starting with http:// or https:// or null | false |
| Source file | string | Source file of the card | false |
| Source card Id | string | The Id of the card to copy into a new card | false |
| Properties to keep from source card | string | Properties of the card to copy over from the source | false |
| Due date | string | The due date of the card | false |

#### Returns
This operation does not return anything.

___

## List boards
List boards

**Operation Id:** ListBoards

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Filter | string | List filters to apply to board results. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Fields | string | List the board fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Actions | string | List the action fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Action entities | boolean | Return action entities | false |
| Action limit | int32 | Max number of actions to return | false |
| Actions format | string | Specify the format of the actions to return | false |
| Actions since | date-time | Return actions after the specified date | false |
| Action fileds | string | List the fields of the action to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Memberships | string | Specify membership information to return | false |
| Organization | boolean | Specify to return organization information | false |
| Organization fields | string | List the organization fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Lists | string | Specify whether to return lists which belong to the board | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Board](#board) |  |

___

## Get a board by Id
Get a board by Id

**Operation Id:** GetBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to get | true |
| Actions | string | List the actions to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Action entities | boolean | Specify whether to return action entities | false |
| Actions display | boolean | Specify whether to return actions display | false |
| Actions format | string | Specify the format of the actions to return | false |
| Actions since | date-time | Only return the actions after this date | false |
| Actions limit | int32 | Max number of actions to return | false |
| Action field | string | List the fields to return with each field. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Action member | boolean | Specify whether to return action members | false |
| Action member fields | string | List the member fields to return with each action member. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Action member creator | boolean | Specify whether to return action member creator | false |
| Action member creator fields | string | List the action member creator fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Cards | string | Specify the cards to return | false |
| Card fields | string | List the fields to return for each card. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Card attachments | boolean | Specify whether to return attachments on cards | false |
| Card attachment fields | string | List the attachment fields to return for each attachment. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Card checklists | string | Specify the checklists to return for each card | false |
| Card stickers | boolean | Specify whether to return card stickers | false |
| Board stars | string | Specify the board stars to return | false |
| Labels | string | Specify the labels to return | false |
| Label fields | string | List the label fields to return for each label. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Label limits | int32 | Max number of labels to return | false |
| Lists | string | Specify the lists to return | false |
| List fields | string | List the list fields to return for each list. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Memberships | string | List the memberships to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Memberships member | boolean | Specify whether to return membership members | false |
| Memberships member fields | string | List the member fields to return for each membership member. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Members | string | List the members to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Member fields | string | List the member fields to return for each member. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Invited members | string | Specify the invited members to return | false |
| Invited member fields | string | List the fields to return for each. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Checklists | string | Specify the checklists to return | false |
| Checklist fields | string | List the checklist fields to return for each checklist. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Organization | boolean | Specify whether to return the organization information | false |
| Organization fields | string | List the organization fields to return for each organization. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Organization memberships | string | List the organization memberships to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| My perfs | boolean | Specify whether to return my perfs | false |
| Fields | string | List the fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Board](#board) | object | A Trello Board Object |

___

## Update a board
Update a board

**Operation Id:** UpdateBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The board to update | true |
| Board name | string | Name of the board | false |
| Create default lists | string | Create default lists | false |
| Board description | string | Description of the board | false |
| Team id | string | Id of the team | false |
| Permission level | string | Permission level of the board | false |
| Comment preferences | string | Comment preferences | false |
| Invitation preferences | string | Invitation preferences | false |
| Use card covers | string | Use card covers | false |
| Background color | string | Background color | false |
| Voting power-up preferences | string | Voting power-up preferences | false |
| Card aging power-up preferences | string | Card aging power-up preferences | false |
| Enable calendar power-up | string | Emable calendar power-up | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Board](#board) | object | A Trello Board Object |

___

## List the card lists in a board
List the card lists in a board

**Operation Id:** ListLists

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to fetch lists | true |
| Cards | string | Specify the cards to return | false |
| Card fields | string | List the card fields to return from. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Filter | string | Specify the filter property for lists | false |
| Fields | string | List the fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [List](#list) |  |

___

## Gets a list by Id
Gets a list by Id

**Operation Id:** GetList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to fetch the lists from | true |
| List Id | string | Unique Id of the list to fetch | true |
| Cards | string | Specify the cards to return | false |
| Card fields | string | List the card fields to return for each card. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| Board | boolean | Specify whether to return board information | false |
| Board fields | string | List the board fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |
| List fields | string | List the list fields to return. Specify &#x27;all&#x27; or a comma seperated list of valid values | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [List](#list) | object | A Trello List Object |

___

## Update a list
Update a list

**Operation Id:** UpdateList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The board the list is on | true |
| List Id | string | The list to update | true |
| List Name | string | New list name | false |
| Closed | string | Whether to close the list | false |
| Board to move to | string | The board to move the list to | false |
| List position | string | List position (top, bottom, or number) | false |
| Subscribed | string | Whether to subscribe to the list | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateList](#createlist) | object | A Trello List Object |

___

## List the teams you are a member of
List the teams you are a member of

**Operation Id:** ListTeams

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Team](#team) |  |

___

## List the members of a team
List the members of a team

**Operation Id:** ListTeamMembers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Team Id | string | The unique Id of the team | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Member](#member) |  |

___

## List the members of a board
List the members of a board

**Operation Id:** ListBoardMembers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The unique Id of the board | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Member](#member) |  |

___

## Get the team for a board
Get the team for a board

**Operation Id:** GetTeamForBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to fetch team | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Team](#team) | object | A Trello Team |

___

## List the members for a card
List the members for a card

**Operation Id:** ListCardMembers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The unique id of the board to look for cards on | true |
| Card Id | string | The unique id of the card | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Member](#member) |  |

___

## List the comments for a card
List the comments for a card

**Operation Id:** ListCardComments

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The unique id of the board to look for comments on | true |
| Card Id | string | The unique id of the card | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Comment](#comment) |  |

___

## Add a comment to a card
Add a comment to a card

**Operation Id:** AddCommentToCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The unique id of the board to add a comment to | true |
| Card Id | string | The unique id of the card | true |
| Comment Text | string | Text of the comment | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Comment](#comment) | object | The model for getting a comment |

___

## Add a member to a card
Add a member to a card

**Operation Id:** AddMemberToCard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Select board to lookup members | string | The board where the card is from | true |
| Card Id | string | The card to add a member to | true |
| Member Id or Username | string | The member to add | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Member](#member) |  |

___

## Create a board
Create a board

**Operation Id:** CreateBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board name | string | Name of the board | true |
| Create default lists | string | Create default lists | false |
| Board description | string | Description of the board | false |
| Team id | string | Id of the team | false |
| Permission level | string | Permission level of the board | false |
| Comment preferences | string | Comment preferences | false |
| Invitation preferences | string | Invitation preferences | false |
| Use card covers | string | Use card covers | false |
| Background color | string | Background color | false |
| Voting power-up preferences | string | Voting power-up preferences | false |
| Card aging power-up preferences | string | Card aging power-up preferences | false |
| Enable calendar power-up | string | Emable calendar power-up | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Board](#board) | object | A Trello Board Object |

___

## Create a list
Create a list

**Operation Id:** CreateList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List name | string | Name of the list | true |
| Board Id | string | Unique Id of the board to create the list in | true |
| List position | string | The position of the list. Specify top, bottom, or a positive number | false |
| List source | string | The id of the list to copy into the new list | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateListResponse](#createlistresponse) | object | A Trello List Object |

___

## Close a board
Close a board

**Operation Id:** CloseBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | The uninque id of the board to close | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Board](#board) | object | A Trello Board Object |

___

# Triggers

## When a new card is added to a board
Triggers a flow when a new card is added to a board

**Operation Id:** OnNewCardInBoard

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to fetch cards in | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Card](#card) |  |

___

## When a new card is added to a list
Triggers a flow when a new card is added to a list

**Operation Id:** OnNewCardInList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Board Id | string | Unique Id of the board to fetch cards in | true |
| List Id | string | Unique Id of the list to fetch cards in | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Card](#card) |  |

___


## Objects

### Card
A Trello Card Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Card Id | string | Unique Id of the card | id |
| Check item states | array of string | Check item states in the card | checkItemStates |
|  | string |  | checkItemStates |
| Card closed | boolean | Whether the card is closed | closed |
| Date of last activity | date-time | Date of last activity on the card | dateLastActivity |
| Card description | string | Description of the card | desc |
| Board Id | string | Unique Id of the board which the card belongs to | idBoard |
| List Id | string | Unique Id of the list which the card belongs to | idList |
| Voted member Ids | array of string | Unique Ids of the voting members | idMembersVoted |
|  | string |  | idMembersVoted |
| Card short Id | int32 | Short Id of the card | idShort |
| Attachment cover Id | string | Unique Id of the attachment cover | idAttachmentCover |
| Is manual cover attachment | boolean | Is manual cover attachment | manualCoverAttachment |
| Label Ids | array of string | List of label Ids on the card | idLabels |
|  | string |  | idLabels |
| Card name | string | Name of the card | name |
| Card position | int32 | Card position | pos |
| Card short link | string | Short link to the card | shortLink |
| [Badges](#badges) | object | A Trello Badges Object | badges |
| Card due date | date-time | Due date of the card | due |
| Creator email address | string | Email address associated with the creator of the card | email |
| Card short url | string | Short url link to the card | shortUrl |
| Subscribed to card | boolean | Is subscribed to card | subscribed |
| Card full url | string | Full url to the card | url |

### Badges
A Trello Badges Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Votes | int32 | Votes on the card badges | Votes |
| Viewing member voted | boolean | Whether viewing members voted on the badge | ViewingMemberVoted |
| Subsribed to badge | boolean | Whether you are subscribed to the card badges | Subscribed |
| Fogbugz | string | Fogbugz of the badges | Fogbugz |
| Check items | int32 | Check items in the badge | CheckItems |
| Checked check items | int32 | Checked check items in the badge | CheckItemsChecked |
| Comments | int32 | Comments on the badge | Comments |
| Attachments | int32 | Attachments on the badges | Attachments |
| Description | boolean | Badge description | Description |
| Due date | date-time | Due date of the badges | Due |

### UpdateCard
Model for updating a card in Trello.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Updated name of the new card | name |
| Description | string | Updated description of the new card | desc |
| Is closed | boolean | Specify whether the card is closed | closed |
| Member Ids | string | Id of the members to add to the card | idMembers |
| Cover attachment Ids | string | Id of the attachemnt to attach to the card | idAttachmentCover |
| Board Id | string | Id of the board to attach the card to | idBoard |
| List Id | string | Id of the list to attach the card to | idList |
| Position | string | Updated position of the card on the page | pos |
| Due date | string | Updated due date of the card | due |
| Subscribed to card | boolean | Specify whether to subscribe to the card | subscribed |

### CreateCard
Model for creating a new card in Trello.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Parent list Id | string | Id of the list that the card should be added to | idList |
| Card name | string | The name of the new card | name |
| Card description | string | The description of the new card | desc |
| Card position | string | The position of the card. Specify top, bottom, or a positive number | pos |
| Member Id | string | A comma seperated list of member Ids to attach to the card | idMembers |
| Label Id | string | A comma-separated list of labels Ids to attach to the card | idLabels |
| Source url | string | Source url of the card. Has to be a URL starting with http:// or https:// or null | urlSource |
| Source file | string | Source file of the card | fileSource |
| Source card Id | string | The Id of the card to copy into a new card | idCardSource |
| Properties to keep from source card | string | Properties of the card to copy over from the source | keepFromSource |
| Due date | string | The due date of the card | due |

### Board
A Trello Board Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board Id | string | Unique Id fo the board | id |
| Is closed | boolean | Is board closed | closed |
| Date last activity | date-time | Date of the last activity on the board | dateLastActivity |
| Date last viewed | date-time | Date of the last time the board is viewed | dateLastView |
| Board description | string | Description of the board | desc |
| Organization id | string | Id of the organization | idOrganization |
| Invitations | array of string | List of invitations on the board | invitations |
|  | string |  | invitations |
| Invited | boolean | Whether you are invited to the board | invited |
| [Label](#label) | object | A Trello Label Object | labelNames |
| Board memberships | Array of [Membership](#membership) | Board memberships | memberships |
| Board name | string | Name of the board | name |
| Is board pinned | boolean | Is board pinned | pinned |
| Powerups | array of string | Board power ups | powerUps |
|  | string |  | powerUps |
| [Perfs](#perfs) | object | A Trello Perfs Object | perfs |
| Board short link | string | Short link of the board | shortLink |
| Board short url | string | Short url to the board | shortUrl |
| Board starred | string | Whether the board is starred | starred |
| Subscribed to board | string | Whether you are subscribed to the board | subscribed |
| Board url | string | Full url of the board | url |

### Label
A Trello Label Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Green label | string | Green label | green |
| Yellow label | string | Yellow label | yellow |
| Orange label | string | Orange label | orange |
| Red label | string | Red label | red |
| Purple label | string | Purple label | purple |
| Blue label | string | Blue label | blue |
| Sky blue label | string | Sky blue label | sky |
| Lime green label | string | Lime green label | lime |
| Pink label | string | Pink label | pink |
| Black label | string | Black label | black |

### Membership
A Trello Membership Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Membership Id | string | Unique Id of the membership | id |
| Member Id | string | Unique Id of the member | idMember |
| Member type | string | Type of member | memberType |
| Unconfirmed membership | boolean | Is membership unconfirmeed | unconfirmed |

### Perfs
A Trello Perfs Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Permission level | string | Permission level | permissionLevel |
| Voting permission | string | Who can vote on the object | voting |
| Commenting permission | string | Who can comment on the object | comments |
| Invitation permission | string | Who can invite people to the object | invitations |
| Self join permission | boolean | Can self join object | selfJoin |
| Can access card covers | boolean | Have access to card covers | cardCovers |
| Is calendar feed enabled | boolean | Is calendar feed enabled | calendarFeedEnabled |
| Object background | string | Background of the object | background |
| Object background color | string | Background color of the object, in hex notation | backgroundColor |
| Object background image | string | Background image of the object | backgroundImage |
| Scaled backgorund image | string | Scaled version of the background image | backgroundImageScaled |
| Object background tile | boolean | Background tile of the object | backgroundTile |
| Background brightness | string | Brightness of the object background | backgroundBrightness |
| Can object be public | boolean | Can object be public | canBePublic |
| Can be part of organization | boolean | Can object be part of the organization | canBeOrg |
| Can object be private | boolean | Can object be private | canBePrivate |
| Can invite | boolean | Can invite | canInvite |

### UpdateBoard
A Trello Board Object used to create a board

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board name | string | Name of the board | name |
| Create default lists | string | Create default lists | defaultLists |
| Board description | string | Description of the board | desc |
| Team id | string | Id of the team | idOrganization |
| Permission level | string | Permission level of the board | prefs_permissionLevel |
| Comment preferences | string | Comment preferences | prefs_comments |
| Invitation preferences | string | Invitation preferences | prefs_invitations |
| Use card covers | string | Use card covers | prefs_cardCovers |
| Background color | string | Background color | prefs_background |
| Voting power-up preferences | string | Voting power-up preferences | prefs_voting |
| Card aging power-up preferences | string | Card aging power-up preferences | prefs_cardAging |
| Enable calendar power-up | string | Emable calendar power-up | enable_calendar |

### List
A Trello List Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List Id | string | Unique Id of the list | id |
| List name | string | Name of the list | name |
| List is closed | boolean | Whether the list is closed | closed |
| Board Id | string | Unique Id of the board which the list belongs to | idBoard |
| List position | double | The position of the board | pos |
| Subscribed to list | boolean | Whether you are subscribed to the list | subscribed |
| Cards in list | Array of [Card](#card) | List of cards inside the list | cards |
| [Board](#board) | object | A Trello Board Object | board |

### CreateList
A Trello List Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List name | string | Name of the list | name |
| Board Id | string | Unique Id of the board to create the list in | idBoard |
| List position | string | The position of the list. Specify top, bottom, or a positive number | pos |
| List source | string | The id of the list to copy into the new list | idListSource |

### Team
A Trello Team

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Team ID | string | Unique ID of the team | id |
| Team description | string | Description of the team | desc |
| Team display name | string | Display name of the team | displayName |
| Board IDs | array of string | The boards assigned to this team | idBoards |
|  | string |  | idBoards |
| Member Count | int32 | Number of members in this team | billableMemberCount |
| Memberships | Array of [Membership](#membership) | The memberships for this team | memberships |
| website | string | Team website | WebSite |
| [TeamPreferences](#teampreferences) | object | A Trello Team Preference Object | prefs |

### TeamPreferences
A Trello Team Preference Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Permission Level | string | Permission level | permissionLevel |

### Member
A Trello Member Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Member Id | string | Unique Id of the Member | id |
| Full name | string | Full name of the Member | fullName |
| Username | string | Username of the Member | username |
| Initials | string | The initials of the user | initials |

### Comment
The model for getting a comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Member](#member) | object | A Trello Member Object | memberCreator |
| Comment Text | string | Text of the comment | text |
| Date the comment was left | date-time | Date the comment was left | date |

### CommentPost
The model for posting a comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comment Text | string | Text of the comment | text |

### CreateBoard
A Trello Board Object used to create a board

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Board name | string | Name of the board | name |
| Create default lists | string | Create default lists | defaultLists |
| Board description | string | Description of the board | desc |
| Team id | string | Id of the team | idOrganization |
| Permission level | string | Permission level of the board | prefs_permissionLevel |
| Comment preferences | string | Comment preferences | prefs_comments |
| Invitation preferences | string | Invitation preferences | prefs_invitations |
| Use card covers | string | Use card covers | prefs_cardCovers |
| Background color | string | Background color | prefs_background |
| Voting power-up preferences | string | Voting power-up preferences | prefs_voting |
| Card aging power-up preferences | string | Card aging power-up preferences | prefs_cardAging |
| Enable calendar power-up | string | Emable calendar power-up | enable_calendar |

### CreateListResponse
A Trello List Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List Id | string | Unique Id of the list | id |
| List name | string | Name of the list | name |
| Board Id | string | Unique Id of the board the list belongs to | idBoard |
| List position | string | The position of the list | pos |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |
| Frequency of trigger polls | 1 | 15 seconds |


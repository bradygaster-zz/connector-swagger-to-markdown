<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Chatter (Preview)

Chatter is an enterprise social network for your company that allows employees to connect and collaborate in real time.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Login URI (Environment) | The Salesforce Login URI. For Production, leave blank or use https://login.salesforce.com | string |


# Actions

## Post to a group
Create a new post in an existing group.

**Operation Id:** CreatePostInGroup

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Group ID | string | Group | true |
| Post Body | string | Text content of the post. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatePostInGroupResponse](#createpostingroupresponse) | object |  |

___

## List users in a group
List group membership.

**Operation Id:** ListGroupMembers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Group ID | string | Group | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListGroupMembersResponse](#listgroupmembersresponse) | object |  |

___

## Add user to a group
Adds a member to an existing group.

**Operation Id:** AddUserToGroup

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Group ID | string | Group | true |
| Salesforce User ID | string | Unique id of the user. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GroupMemberResponse](#groupmemberresponse) | object |  |

___

## Get user by ID
Get a user&#x27;s details by id.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User ID | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserUserResponse](#useruserresponse) | object |  |

___

## Get post by ID
Get details of a post by post id.

**Operation Id:** GetPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Post ID | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetPostResponse](#getpostresponse) | object |  |

___

# Triggers

## When a post is added to a group
Triggers when a new post is added to an existing group.

**Operation Id:** TrigNewPostInGroup

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Group ID | string | Group | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListPostsByGroupResponse](#listpostsbygroupresponse) | object |  |

___


## Objects

### ActorUserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Company Name | string | Name of the company. | companyName |
| Display Name | string | User name of the author. | displayName |
| User ID | string | Unique identifier of the author. | id |
| Name | string | First and last name of the author. | name |
| (large) | string | Profile image of the author. | photo.largePhotoUrl |
| (medium) | string | Profile image of the author. | photo.mediumPhotoUrl |
| (small) | string | Profile image of the author. | photo.smallPhotoUrl |
| Title | string | Title of the author. | title |

### OwnerUserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Company Name | string | Name of the company. | companyName |
| Display Name | string | User name of the owner. | displayName |
| User ID | string | Unique identifier of the owner. | id |
| Name | string | First and last name of the owner. | name |
| (large) | string | Profile image of the owner. | photo.largePhotoUrl |
| (medium) | string | Profile image of the owner. | photo.mediumPhotoUrl |
| (small) | string | Profile image of the owner. | photo.smallPhotoUrl |
| Title | string | Title of the owner. | title |

### UserUserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Company Name | string | Name of the company. | companyName |
| Display Name | string | User&#x27;s display name. | displayName |
| ID | string | Unique identifier of the user. | id |
| Name | string | First and last name of the user. | name |
| (large) | string | Profile image of the user. | photo.largePhotoUrl |
| (medium) | string | Profile image of the user. | photo.mediumPhotoUrl |
| (small) | string | Profile image of the user. | photo.smallPhotoUrl |
| Title | string | User&#x27;s title. | title |

### GroupMemberResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Member ID | string | Unique identifier of the member. | id |
| Role | string | Member&#x27;s role in the group. | role |
| URL | string | Link to member&#x27;s user profile. | url |
| [UserUserResponse](#useruserresponse) | object |  | user |

### CreatePostInGroupResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [ActorUserResponse](#actoruserresponse) | object |  | actor |
| Is Rich Text | boolean | True if the message is in rich text format. | body.isRichText |
| Text | string | Display-ready text of the message. | body.text |
| Date Posted | date-time | Date-Time in ISO-8601 format. | createdDate |
| Is Rich Text | string | True if the header is in rich text format. | header.isRichText |
| Text | string | Title of the post. | header.text |
| ID | string | Unique id of the feed item. | id |
| Modified date | date-time | Date-Time in ISO-8601 format. | modifiedDate |
| Description | string | Description of the parent object. | parent.description |
| ID | string | Unique id of the parent object. | parent.id |
| Name | string | Name of the parent object. | parent.name |
| [OwnerUserResponse](#owneruserresponse) | object |  | parent.owner |
| Type | string | Type of the parent object. | parent.type |
| Visbility | string | Who can see the parent object. | parent.visibility |
| Type | string | Type of the post. | type |
| Visbility | string | Who can see the post. | visibility |

### ListPostsByGroupResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| elements | array of object |  | elements |
| [ActorUserResponse](#actoruserresponse) | object |  | elements.actor |
| Is Rich Text | boolean | True if the message is in rich text format. | elements.body.isRichText |
| Text | string | Display-ready text of the message. | elements.body.text |
| Date Posted | date-time | Date-Time in ISO-8601 format. | elements.createdDate |
| Is Rich Text | string | True if the header is in rich text format. | elements.header.isRichText |
| Text | string | Title of the post. | elements.header.text |
| ID | string | Unique id of the feed item. | elements.id |
| Modified Date | date-time | Date-Time in ISO-8601 format. | elements.modifiedDate |
| Description | string | Description of the parent object. | elements.parent.description |
| ID | string | Unique id of the parent object. | elements.parent.id |
| Name | string | Name of the parent object. | elements.parent.name |
| [OwnerUserResponse](#owneruserresponse) | object |  | elements.parent.owner |
| Type | string | Type of the parent object. | elements.parent.type |
| Visbility | string | Who can see the parent object. | elements.parent.visibility |
| Type | string | Type of the post. | elements.type |
| Visbility | string | Who can see the post. | elements.visibility |

### ListGroupsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| groups | array of object |  | groups |
| id | string |  | groups.id |
| name | string |  | groups.name |

### ListUsersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [UserUserResponse](#useruserresponse) |  | users |

### ListGroupMembersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [GroupMemberResponse](#groupmemberresponse) |  | members |
| Total member count | int32 | Number of members in the group. | totalMemberCount |

### GetPostResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [ActorUserResponse](#actoruserresponse) | object |  | actor |
| Is Rich Text | boolean | True if the message is in rich text format. | body.isRichText |
| Text | string | Display-ready text of the post. | body.text |
| Date Posted | date-time | Date-Time in ISO-8601 format. | createdDate |
| Is Rich Text | string | True if the header is in rich text format. | header.isRichText |
| Text | string | Title of the post. | header.text |
| ID | string | Unique id of the feed item. | id |
| Modified Date | date-time | Date-Time in ISO-8601 format. | modifiedDate |
| Description | string | Description of the parent object. | parent.description |
| ID | string | Unique id of the parent object. | parent.id |
| Name | string | Name of the parent object. | parent.name |
| [OwnerUserResponse](#owneruserresponse) | object |  | parent.owner |
| Type | string | Type of the parent object. | parent.type |
| Visbility | string | Who can see the parent object. | parent.visibility |
| Type | string | Type of the post. | type |
| Visbility | string | Who can see the post. | visibility |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


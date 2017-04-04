<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Intercom (Preview)

v1.0.0

Intercom makes messaging apps for businesses that help them understand and talk to consumers.


# Actions

## Create or update user
Creates a new user for your Intercom account. Users found via email will be updated.

**Operation Id:** CreateUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Email | string |  | true |
| Name | string |  | false |
| Phone | string |  | false |
| Company Id | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [User_Response](#userresponse) | object |  |

___

## List all leads
Returns a list of all leads within your Intercom account.

**Operation Id:** ListLeads

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListLeads_Response](#listleadsresponse) | array |  |

___

## Create new lead
Creates a new lead for your Intercom account.

**Operation Id:** CreateLead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Email | string |  | true |
| Name | string |  | false |
| Phone | string |  | false |
| Image URL | string |  | false |
| Company Id | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead_Response](#leadresponse) | object |  |

___

## Get user
Given the id for an existing user, this operation returns all information about the user.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [User_Response](#userresponse) | object |  |

___

## Get lead
Given the id for an existing lead, this operation returns all information about the  lead.

**Operation Id:** GetLead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Lead Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead_Response](#leadresponse) | object |  |

___

# Triggers

## When a lead is created
Triggers when a new lead is created.

**Operation Id:** TrigNewLead

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigListLeads_Response](#triglistleadsresponse) | array |  |

___

## When a user is created
Triggers when a new user is created.

**Operation Id:** TrigNewUser

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigListUsers_Response](#triglistusersresponse) | array |  |

___

## When a user is updated
Triggers when an existing user&#x27;s information is updated.

**Operation Id:** TrigUpdateUser

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigListUsers_Response](#triglistusersresponse) | array |  |

___

## When a new conversation starts
Triggers when a user starts a new conversation.

**Operation Id:** TrigNewConversation

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TrigListConversations_Response](#triglistconversationsresponse) | array |  |

___


## Objects

### ListCompanies_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| companies | array of object | companies | companies |
| company_id | string | company_id | companies.company_id |
| id | string | id | companies.id |
| name | string | name | companies.name |

### TrigListUsers_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [TrigUser_Response](#triguserresponse) | object |  |  |

### TrigListLeads_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [TrigLead_Response](#trigleadresponse) | object |  |  |

### TrigListConversations_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [TrigConversation_Response](#trigconversationresponse) | object |  |  |

### TrigUser_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Intercom defined id representing the user. | id |
| Created Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| User Id | string | Unique identifier you have defined for the user. | user_id |
| Email | string | User&#x27;s email. | email |
| Phone | string | User&#x27;s phone number. | phone |
| Name | string | User&#x27;s name. | name |
| Session Count | integer | Number of sessions the user has recorded. | session_count |
| Image URL | string | An avatar image URL, needs to be https. | avatar.image_url |
| Is Unsubscribed | boolean | True if the user is unsubscribed from emails. | unsubscribed_from_emails |
| City Name | string | Location of the user. | location_data.city_name |
| Country Name | string | Location of the user. | location_data.country_name |
| Latitude | number | Location of the user. | location_data.latitude |
| Longitude | number | Location of the user. | location_data.longitude |
| Postal Code | string | Location of the user. | location_data.postal_code |
| Region Name | string | Location of the user. | location_data.region_name |
| Time Zone | string | ISO 8601 time zone for the user&#x27;s location. | location_data.timezone |
| Pseudonym | string | The pseudonym used if this user was previously a lead. | pseudonym |
| companies | array of object | companies | companies.companies |
| Company Name. | string | Name of the company. | companies.companies.name |
| companies | array of object | tags | tags.companies |
| Tag Name | string | Name of the tag. | tags.companies.name |

### TrigLead_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Intercom defined id representing the lead. | id |
| Created Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| User Id | string | Unique identifier you have defined for the user. | user_id |
| Email | string | Lead&#x27;s email. | email |
| Phone | string | Lead&#x27;s phone number. | phone |
| Name | string | Lead&#x27;s name. | name |
| Image URL | string | An avatar image URL, needs to be https. | avatar.image_url |
| Is Unsubscribed | boolean | True if the lead is unsubscribed from emails. | unsubscribed_from_emails |
| City Name | string | Location of the lead. | location_data.city_name |
| Country Name | string | Location of the lead. | location_data.country_name |
| Latitude | number | Location of the lead. | location_data.latitude |
| Longitude | number | Location of the lead. | location_data.longitude |
| Postal Code | string | Location of the lead. | location_data.postal_code |
| Region Name | string | Location of the lead. | location_data.region_name |
| Time Zone | string | ISO 8601 time zone for the lead&#x27;s location. | location_data.timezone |
| companies | array of object | companies | companies.companies |
| Company Name | string | Name of the company. | companies.companies.name |
| companies | array of object | tags | tags.companies |
| Tag Name | string | Name of the tag. | tags.companies.name |

### TrigConversation_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Admin Id | string | User the conversation is currently assigned to. | assignee.id |
| Author Id | string | Conversation author&#x27;s id. | conversation_message.author.id |
| Author Type | string | Type of the author. | conversation_message.author.type |
| Text | string | Body of the message. | conversation_message.body |
| Subject | string | Conversation subject. | conversation_message.subject |
| Message URL | string | URL of the conversation message. | conversation_message.url |
| Created Date Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| Id | string | Conversation id. | id |
| Updated Date Time | int32 | yyyy-MM-ddTHH:mm:ss.fffZ | updated_at |
| User Id | string | Id of user the conversation concerns. | user.id |
| User Type | string | The user type. | user.type |

### ListUsers_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [User_Response](#userresponse) | object |  |  |

### ListLeads_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Lead_Response](#leadresponse) | object |  |  |

### User_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Intercom defined id representing the user. | id |
| Created Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| User Id | string | Unique identifier you have defined for the user. | user_id |
| Email | string | User&#x27;s email. | email |
| Phone | string | User&#x27;s phone number. | phone |
| Name | string | User&#x27;s name. | name |
| Session Count | integer | Number of sessions the user has recorded. | session_count |
| Image URL | string | An avatar image URL, needs to be https. | avatar.image_url |
| Is Unsubscribed | boolean | An avatar image URL, needs to be https. | unsubscribed_from_emails |
| City Name | string | Location of the user. | location_data.city_name |
| Country Name | string | Location of the user. | location_data.country_name |
| Latitude | number | Location of the user. | location_data.latitude |
| Longitude | number | Location of the user. | location_data.longitude |
| Postal Code | string | Location of the user. | location_data.postal_code |
| Region Name | string | Location of the user. | location_data.region_name |
| Time Zone | string | ISO 8601 time zone for the user&#x27;s location. | location_data.timezone |
| Pseudonym | string | The pseudonym used if this user was previously a lead. | pseudonym |

### Lead_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Intercom defined id representing the lead. | id |
| Created Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| Lead Id | string | Unique identifier you have defined for the lead. | user_id |
| Email | string | Lead&#x27;s email. | email |
| Phone | string | Lead&#x27;s phone number. | phone |
| Name | string | Lead&#x27;s name. | name |
| Image URL | string | An avatar image URL, needs to be https. | avatar.image_url |
| Is Unsubscribed | boolean | An avatar image URL, needs to be https. | unsubscribed_from_emails |
| City Name | string | Location of the lead. | location_data.city_name |
| Country Name | string | Location of the lead. | location_data.country_name |
| Latitude | number | Location of the lead. | location_data.latitude |
| Longitude | number | Location of the lead. | location_data.longitude |
| Postal Code | string | Location of the lead. | location_data.postal_code |
| Region Name | string | Location of the lead. | location_data.region_name |
| Time Zone | string | ISO 8601 time zone for the lead&#x27;s location. | location_data.timezone |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


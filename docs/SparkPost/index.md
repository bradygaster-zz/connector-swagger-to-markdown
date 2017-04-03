<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# SparkPost (Preview)

v1.0

SparkPost API allows you to manage email recipient lists and send emails.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| SparkPost API Key | SparkPost API Key | securestring |


# Actions

## Create recipient list
Create recipient list

**Operation Id:** CreateRecipientList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id of the recipient list | string | Id | false |
| Name of the recipient list | string | Name | false |
| Description | string | Description | false |
| Email address of first recipient | string | Email address | false |

#### Returns
This operation does not return anything.

___

## Add user to recipient list
Add user to recipient list

**Operation Id:** AddUserToRecipientList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Recipient | string | Select a SparkPost recipient list | true |
| Email address | string | Email Address | true |
| Name | string | Name | false |

#### Returns
This operation does not return anything.

___

## Delete user from recipient list
Delete user from recipient list

**Operation Id:** DeleteUserFromRecipientList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Recipient | string | Select a SparkPost recipient list | true |
| Email address | string | Email address | false |

#### Returns
This operation does not return anything.

___

## Send email to a recipient list
Send email to a recipient list

**Operation Id:** SendEmailToRecipientList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Recipient | string | Select a SparkPost recipient list | true |
| Template | string | Select a SparkPost stored template | true |
| Campaign Id | string | Campaign Id | false |

#### Returns
This operation does not return anything.

___

## Send email to a recipient
Send email to a recipient

**Operation Id:** SendEmailToRecipient

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Template | string | Select a SparkPost stored template | true |
| Email address | string | Email address | true |

#### Returns
This operation does not return anything.

___

# Triggers

## When a new recipient list is created
When a new recipient list is created

**Operation Id:** OnNewRecipientList

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListRecipientListsResponse](#listrecipientlistsresponse) | object | List of this users recipient lists |

___


## Objects

### RecipientList
Maintains a list of recipients to whom a message can be sent

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id of the recipient list | string | Id | id |
| Name of the recipient list | string | Name | name |
| Description | string | Description | description |
| Email address of first recipient | string | Email address | email |

### ListRecipientListsResponse
List of this users recipient lists

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Recipients | Array of [ListRecipientListsEntry](#listrecipientlistsentry) | List of recipient lists | results |

### ListRecipientListsEntry
A SparkPost RecipientListEntry Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List ID | string | Identifier of the list | id |
| List Name | string | Name of the List | name |
| List Description | string | Description of the List | description |

### AddUserToRecipientListRequest
Request template for adding a user to a recipient list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Recipient](#recipient) | object | Recipient can be sent emails through Spark Post | recipient |

### Recipient
Recipient can be sent emails through Spark Post

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Address](#address) | object | Holds the address for a recipient | address |

### Address
Holds the address for a recipient

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email address | string | Email Address | email |
| Name | string | Name | name |

### ListTemplatesResponse
List of users store templates.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Templates | Array of [ListTemplatesEntry](#listtemplatesentry) | List of templates | results |

### ListTemplatesEntry
A SparkPost ListTemplatesEntry Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template ID | string | Identifier of the template | id |
| Template Name | string | Name of the Template | name |
| Template Description | string | Description of the Template | description |
| Published | boolean | Indicates whether template published or not. | published |
| Last Update Time | string | Last update time of the Template | last_update_time |

### DeleteUserFromRecipientListRequest
Request template for removing a user to a recipient list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email address | string | Email address | email_address |

### EmailRecipientListRequest
Request object for email recipient list post.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [EmailRecipientList](#emailrecipientlist) | object | Recipient list to send email to | recipients |
| [EmailTemplateList](#emailtemplatelist) | object | List of email templates | content |
| Campaign Id | string | Campaign Id | campaign_id |

### EmailRecipientList
Recipient list to send email to

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Recipient | string | Select a SparkPost recipient list | list_id |

### EmailTemplateList
List of email templates

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template | string | Select a SparkPost stored template | template_id |

### EmailRecipientRequest
Request object for email recipient post.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [EmailTemplateList](#emailtemplatelist) | object | List of email templates | content |
| Recipients | Array of [EmailRecipient](#emailrecipient) | Recipients | recipients |

### EmailRecipient
Recipients to send email to

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email address | string | Email address | address |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


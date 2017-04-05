<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Freshdesk (Preview)

Freshdesk is a cloud-based customer support solution that will help you streamline your customer service and make sure your customers receive the support they deserve! The Freshdesk connector is intended for Freshdesk agents to manage tickets and contacts.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Account Url | Ex: https://company.freshdesk.com | string |
| Email or API Key (https://aka.ms/ii9u75) | Your email address | string |
| Password | Password (if using API key, any value can be specified) | securestring |


# Actions

## Create a ticket
Create a ticket.

**Operation Id:** CreateTicket

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subject | string | The subject for the ticket. | true |
| Description | string | The description for the ticket. | true |
| Email | string | The email of the requester. | true |
| Priority | string | The priority for the ticket. | true |
| Status | string | The status of the ticket. | true |
| Type | string | Helps categorize the ticket according to the different kinds of issues your support team deals with. | false |
| Due By | date-time | Timestamp that denotes when the ticket is due to be resolved (in format yyyy-MM-ddTHH:mm:ssZ). | false |
| First Response Due By | date-time | Timestamp that denotes when the first response is due (in format yyyy-MM-ddTHH:mm:ssZ). | false |
| Agent | int32 | The agent of the ticket. | false |
| Product | int32 | The product the ticket should be part of (for admin use only). | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateTicket200Response](#createticket200response) | object |  |

___

## Get ticket
Get a ticket by Id.

**Operation Id:** GetTicket

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Ticket Id | string | The ticket Id. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateTicket200Response](#createticket200response) | object |  |

___

## Update a ticket
Update a ticket (only specified values will be updated).

**Operation Id:** UpdateTicket

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Ticket Id | integer | The ticket Id to update. | true |
| Description | string | The ticket description. | false |
| Subject | string | The subject of the ticket. | false |
| Priority | string | The priority of the ticket. | false |
| Status | string | The status of the ticket. | false |
| Type | string | Helps categorize the ticket according to the different kinds of issues your support team deals with. | false |
| Due By | date-time | Timestamp that denotes when the ticket is due to be resolved (in format yyyy-MM-ddTHH:mm:ssZ). | false |
| Agent | int32 | The agent of the ticket. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateTicket200Response](#createticket200response) | object |  |

___

## Add a note to a ticket
Add a private or public note to a ticket.

**Operation Id:** AddNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Ticket Id | integer | The ticket Id to add a note to. | true |
| Content | string | The content of the note. | true |
| Private | boolean | Indicates if this is a private note (default is true). | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddNote200Response](#addnote200response) | object |  |

___

# Triggers

## When a ticket is created
When any ticket is created.

**Operation Id:** TriggerTicketCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTickets200Response](#gettickets200response) | array |  |

___

## When a ticket assigned to an agent is updated
When any ticket assigned to the selected agent is updated.

**Operation Id:** TriggerTicketAssignedToAgent

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Agent Id | integer | The agent id. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTickets200Response](#gettickets200response) | array |  |

___

## When a ticket is updated
When a ticket is updated.

**Operation Id:** TriggerTicketUpdated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Ticket Id | integer | The ticket Id. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTickets200Response](#gettickets200response) | array |  |

___

## When a ticket status changes
When the status of the ticket changes.

**Operation Id:** TriggerTicketStatusChanged

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Ticket Id | integer | The ticket Id. | true |
| New Status | string | The new status of the ticket. |  |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateTicket200Response](#createticket200response) | object |  |

___

## When an agent is added
When an agent is added (for admin use only).

**Operation Id:** TriggerAgentAdded

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetAgents200Response](#getagents200response) | array |  |

___

## When a contact is added
When a contact is added.

**Operation Id:** TriggerContactAdded

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetContacts200Response](#getcontacts200response) | array |  |

___


## Objects

### GetTickets200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [CreateTicket200Response](#createticket200response) | object |  |  |

### CreateTicket200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Spam | boolean | Set to true if the ticket has been marked as spam. | spam |
| Priority | string | Priority of the ticket. | priority |
| Requester Id | int32 | User Id of the requester. | requester_id |
| Agent Id | int32 | Id of the agent to whom the ticket has been assigned. | responder_id |
| Source | string | The channel through which the ticket was created. | source |
| Status | string | Status of the ticket. | status |
| Subject | string | Subject of the ticket. | subject |
| Ticket Id | int32 | The unique Id of the ticket. | id |
| Type | string | Helps categorize the ticket according to the different kinds of issues your support team deals with. | type |
| Due By | date-time | Timestamp that denotes when the ticket is due to be resolved (in format yyyy-MM-ddTHH:mm:ssZ). | due_by |
| Is Escalated | boolean | Set to true if the ticket has been escalated for any reason. | is_escalated |
| Description | string | HTML content of the ticket. | description |
| Description Text | string | Content of the ticket in plain text. | description_text |
| Created At | date-time | Ticket creation timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | created_at |
| Updated At | date-time | Ticket updated timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | updated_at |

### GetProducts200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | int32 | Id. | id |
| name | string | Name. | name |

### GetContacts200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Active | boolean | Set to true if the contact has been verified. | active |
| Address | string | Address of the contact. | address |
| Company Id | string | Id of the company to which this contact belongs. | company_id |
| Description | string | A short description of the contact. | description |
| Email | string | Primary email address of the contact. | email |
| Id | int32 | Id of the contact. | id |
| Job Title | string | Job title of the contact. | job_title |
| Language | string | Language of the contact. | language |
| Mobile | string | Mobile number of the contact. | mobile |
| Name | string | Name of the contact. | name |
| Phone | string | Telephone number of the contact. | phone |
| Time Zone | string | Time zone in which the contact resides. | time_zone |
| Twitter Id | string | Twitter handle of the contact. | twitter_id |
| Created At | date-time | Contact creation timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | created_at |
| Updated At | date-time | Contact updated timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | updated_at |

### AddNote200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Private | boolean | Set to true if the note is private. | private |
| Content | string | Content of the note in HTML. | body |
| Content Text | string | Content of the note in plain text. | body_text |
| Ticket Id | int32 | Id of the ticket to which this note is being added. | ticket_id |
| Created At | date-time | Note creation timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | created_at |
| Update At | date-time | Note updated timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | updated_at |

### GetAgents200Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | int32 | id | id |
| Ticket Scope | int32 | Ticket permission of the agent. | ticket_scope |
| Created At | date-time | Agent creation timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | created_at |
| Updated At | date-time | Agent updated timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | updated_at |
| Active | boolean | Set to true if the agent is verified. | contact.active |
| Email | string | Email address of the agent. | contact.email |
| Job Title | string | Job title of the agent. | contact.job_title |
| Language | string | Language of the agent. | contact.language |
| Last Login At | date-time | Timestamp of the agent&#x27;s last successful login (in format yyyy-MM-ddTHH:mm:ssZ). | contact.last_login_at |
| Mobile | string | Mobile number of the agent. | contact.mobile |
| Name | string | Name of the agent. | contact.name |
| Phone | string | Telephone number of the agent. | contact.phone |
| Time Zone | string | Time zone of the agent. | contact.time_zone |
| Created At | date-time | Agent Creation timestamp (in format yyyy-MM-ddTHH:mm:ssZ). | contact.created_at |
| Updated At | date-time | Timestamp of the last update to the agent (in format yyyy-MM-ddTHH:mm:ssZ). | contact.updated_at |

### CreateTicketBodySchema


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Subject | string | The subject for the ticket. | subject |
| Description | string | The description for the ticket. | description |
| Email | string | The email of the requester. | email |
| Priority | string | The priority for the ticket. | priority |
| Status | string | The status of the ticket. | status |
| Type | string | Helps categorize the ticket according to the different kinds of issues your support team deals with. | type |
| Due By | date-time | Timestamp that denotes when the ticket is due to be resolved (in format yyyy-MM-ddTHH:mm:ssZ). | due_by |
| First Response Due By | date-time | Timestamp that denotes when the first response is due (in format yyyy-MM-ddTHH:mm:ssZ). | fr_due_by |
| Agent | int32 | The agent of the ticket. | responder_id |
| Product | int32 | The product the ticket should be part of (for admin use only). | product_id |

### UpdateTicketBodySchema


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Description | string | The ticket description. | description |
| Subject | string | The subject of the ticket. | subject |
| Priority | string | The priority of the ticket. | priority |
| Status | string | The status of the ticket. | status |
| Type | string | Helps categorize the ticket according to the different kinds of issues your support team deals with. | type |
| Due By | date-time | Timestamp that denotes when the ticket is due to be resolved (in format yyyy-MM-ddTHH:mm:ssZ). | due_by |
| Agent | int32 | The agent of the ticket. | responder_id |

### AddNoteBodySchema


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Content | string | The content of the note. | body |
| Private | boolean | Indicates if this is a private note (default is true). | private |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


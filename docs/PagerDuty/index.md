<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# PagerDuty (Preview)

PagerDuty is an agile incident management platform that integrates with IT Ops and DevOps monitoring stacks to improve operational reliability and agility for organizations.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| PagerDuty API Key | PagerDuty API Key | securestring |


# Actions

## Get incident
Retrieves incident object by incident key.

**Operation Id:** GetIncidentByKey

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Incident key | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Get user by ID
Retrieves the user&#x27;s information for a given ID.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [User](#user) | object | A PagerDuty user |

___

## Add note to incident
Add note to a given incident.

**Operation Id:** AddNoteToIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| Added by | string | Select a user | true |
| Note | string | Text for the note | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddNoteResponse](#addnoteresponse) | object | Response to AddNoteToIncident endpoint |

___

## Acknowledge incident
Acknowledge a given incident.

**Operation Id:** AcknowledgeIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| Acknowledged by | string | Select a user | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Resolve incident
Mark a given incident as resolved.

**Operation Id:** ResolveIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| Resolved by | string | Select a user | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Reassign incident
Reassign a given incident.

**Operation Id:** ReassignIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| From user | string | Select a user | true |
| To user | string | Select a user | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Snooze incident
Snooze a given incident by a certain time.

**Operation Id:** SnoozeIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| Snoozed by | string | Select a user | true |
| Snooze | int32 | The amount of time, in seconds, to snooze the incident | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Escalate incident
Use a given escalation policy on an incident.

**Operation Id:** EscalateIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |
| Escalated by | string | Select a user | true |
| Escalation policy | string | Select a policy | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Incident](#incident) | object | An incident |

___

## Create incident
Creates a new incident for a given service identifiable by the integration key.

**Operation Id:** CreateIncident

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Service key | string | Service integration key from PagerDuty | true |
| Description | string | Description of the incident | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewIncident](#newincident) | object | A new incident |

___

# Triggers

## When a note is added
Triggers when a note is added to the given incident.

**Operation Id:** OnNewIncidentNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Incident | string | Select an incident | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NotesResponse](#notesresponse) | object | Response object for notes |

___

## When an incident is created
Triggers when a new incident is created.

**Operation Id:** OnNewIncidentCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IncidentsResponse](#incidentsresponse) | object | Response for a list of incidents |

___

## When an incident is assigned to a user
Triggers when an incident is assigned to the given user.

**Operation Id:** OnIncidentAssigned

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User | string | Select a user | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IncidentsResponse](#incidentsresponse) | object | Response for a list of incidents |

___

## When an incident is acknowledged
Triggers when an existing incident is acknowledged.

**Operation Id:** OnIncidentAcknowledged

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IncidentsResponse](#incidentsresponse) | object | Response for a list of incidents |

___

## When an incident is resolved
Triggers when an existing incident is resolved.

**Operation Id:** OnIncidentResolved

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IncidentsResponse](#incidentsresponse) | object | Response for a list of incidents |

___


## Objects

### IncidentsResponse
Response for a list of incidents

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List of incidents | Array of [Incident](#incident) | List of incidents | incidents |

### Incident
An incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Incident Id | string | Incident Id | id |
| Incident title | string | Incident title | summary |
| Incident detail url | string | Incident detail url | html_url |
| Create date | string | Create date | created_at |
| Current status | string | Current status | status |
| Incident Key | string | Incident Key | incident_key |
| Assigned User ID | string | The ID of the user assigned to this incident | assignedUserId |
| Last status change | string | Last status change | last_status_change_at |
| [EscalationPolicy](#escalationpolicy) | object | The policy in place for escalating an incident | escalation_policy |
| Current urgency | string | Current urgency | urgency |

### NewIncident
A new incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Key | string | Key | incident_key |

### PendingAction
An incident action that is pending

This object has no properties.

### Service
A service

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Service Id | string | Service Id | id |

### Assignment
Represents the assignment of an incident

This object has no properties.

### Acknowledgement
Acknowledgement of incident

This object has no properties.

### LastStatusChangeBy
Represents the user or service that last changed an incident

This object has no properties.

### FirstTriggerLogEntry
Log entry for when an incident is triggered

This object has no properties.

### EscalationPolicy
The policy in place for escalating an incident

This object has no properties.

### Team
A team

This object has no properties.

### Assignee
Represents to whom the incident is assigned

This object has no properties.

### Acknowledger
Represents the acknowledger of an incident

This object has no properties.

### EscalationPoliciesResponse
Escalation policies response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Escalation policies | Array of [EscalationPolicy](#escalationpolicy) | List of escalation policies | escalation_policies |

### Object


This object has no properties.

### UsersResponse
Users response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Users | Array of [User](#user) | List of users | users |

### User
A PagerDuty user

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Name | name |
| E-mail address | string | E-mail address | email |
| The preferred time zone name. If null, the account time zone will be used | string | The preferred time zone name. If null, the account time zone will be used | time_zone |
| User is billed | boolean | User is billed | billed |
| The user role | string | The user role | role |
| Contact methods for the user | Array of [ContactMethod](#contactmethod) | Contact methods for the user | contact_methods |
| Notification rules for the user | Array of [NotificationRule](#notificationrule) | Notification rules for the user | notification_rules |
| [Object](#object) | object |  | job_title |
| Teams to which the user belongs | Array of [Object](#object) | Teams to which the user belongs | teams |
| List of incidents for this user | Array of [Object](#object) | List of incidents for this user | coordinated_incidents |
| User Id | string | User Id | id |

### ContactMethod
The method for contact

This object has no properties.

### NotificationRule
Notification rule

This object has no properties.

### NotesResponse
Response object for notes

This object has no properties.

### Note
A note for an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Note content | string | Note content | content |

### AddNoteRequest
Request to add a note to an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Added by | string | Select a user | userId |
| Note | string | Text for the note | note |

### AddNoteResponse
Response to AddNoteToIncident endpoint

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [UserResponse](#userresponse) | object | User response | user |
| [NoteResponse](#noteresponse) | object | Note Response | note |

### UserResponse
User response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Id | string | User Id | id |

### NoteResponse
Note Response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Unique identifier of the user | string | Unique identifier of the user | id |
| [UserResponse](#userresponse) | object | User response | user |
| Note content | string | Note content | content |
| Date and time the note was created | string | Date and time the note was created | created_at |

### AcknowledgeRequest
Request to acknowledge an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Acknowledged by | string | Select a user | userId |

### ResolveRequest
Request to resolve an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Resolved by | string | Select a user | userId |

### ReassignRequest
Request object to reassign an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| From user | string | Select a user | userId |
| To user | string | Select a user | reassignUserId |

### SnoozeRequest
Request to snooze an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Snoozed by | string | Select a user | userId |
| Snooze | int32 | The amount of time, in seconds, to snooze the incident | duration |

### EscalateRequest
Request object to escalate an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Escalated by | string | Select a user | userId |
| Escalation policy | string | Select a policy | policyId |

### CreateRequest
Request to create an incident

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Service key | string | Service integration key from PagerDuty | service_key |
| Description | string | Description of the incident | description |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 30 seconds |


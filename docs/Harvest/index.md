<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Harvest (Preview)

v1.0.0

Harvest is a simple tool to help track the time spent by your team on each project and task.


# Actions

## List all contacts
Retrieves a list of all contacts for the authenticated user.

**Operation Id:** ListAllContacts

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListAllContacts_Response](#listallcontacts_response) | array |  |

___

## Add new contact
Create a new contact.

**Operation Id:** AddNewContact

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Client id | int32 | Unique identifier of the client. | true |
| First name | string | Contact&#x27;s first name. | true |
| Last name | string | Contact&#x27;s last name. | true |
| Email | string | Contact&#x27;s email. | false |
| Office phone | string | Contact&#x27;s office phone. | false |
| Mobile phone | string | Contact&#x27;s mobile phone. | false |
| Fax | string | Contact&#x27;s fax. | false |
| Title | string | Contact&#x27;s title. | false |

#### Returns
This operation does not return anything.

___

## List all clients
Retrieves a list of all clients for the authenticated account.

**Operation Id:** ListAllClients

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListAllClients_Response](#listallclients_response) | array |  |

___

## Add new client
Create a new client.

**Operation Id:** AddNewClient

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | Client&#x27;s name | true |
| Currency | string | The currency you&#x27;d like to use for the client. | false |
| Currency symbol | string | Symbol that correlates to the selected currency. | false |
| Details | string | Additional details, normally used for address information. | false |

#### Returns
This operation does not return anything.

___

## Add new user
Create a new user.

**Operation Id:** CreateUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Email | string |  | true |
| Is admin | boolean |  | false |
| First name | string |  | true |
| Last name | string |  | true |
| Is contractor | boolean |  | false |
| Phone | string |  | false |
| Hourly rate | float | Default hourly rate. | false |
| Department | string |  | false |
| Cost rate | float |  | false |

#### Returns
This operation does not return anything.

___

## Update time entry
Update an existing time entry.

**Operation Id:** UpdateTimeEntry

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Time Entry Id | string |  | true |
| Project Id | string | Project | true |
| Task Id | string | Task | true |
| Notes | string |  | false |
| Started date-time | string | YYYY-MM-DDThh:mm:ssZ (UTC format). | false |
| Ended date-time | string | YYYY-MM-DDThh:mm:ssZ (UTC format). | false |
| Date | string | YYYY-MM-DDThh:mm:ssZ (UTC format). | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UpdateTimeEntry_Response](#updatetimeentry_response) | object |  |

___

## Create time entry
Create a new time entry.

**Operation Id:** CreateTimeEntry

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| notes | string |  | false |
| hours | int32 |  | false |
| Project Id | string | Project | true |
| Task Id | string | Task | true |
| Date | string | Spent at | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UpdateTimeEntry_Response](#updatetimeentry_response) | object |  |

___

## List projects
Lists all projects for the current user.

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjects_Response](#listprojects_response) | array |  |

___

## Delete time entry
Delete an existing time entry.

**Operation Id:** DeleteTimeEntry

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Time Entry Id | string |  | true |

#### Returns
This operation does not return anything.

___

## Add user to a project
Add an existing user to a project.

**Operation Id:** AddUserToProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | string | Project Id | true |
| User Id | int32 | User | true |

#### Returns
This operation does not return anything.

___

## Get time entry by id
Get an existing time entry by id.

**Operation Id:** GetTimeEntry

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Time Entry Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UpdateTimeEntry_Response](#updatetimeentry_response) | object |  |

___

## List tasks
Retrieves a list of all tasks.

**Operation Id:** ListTasks

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasks_Response](#listtasks_response) | array |  |

___

## Get user info
Retrieve a user&#x27;s details by user id or email.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User id or email | string | User id or email | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetUserByID_Response](#getuserbyid_response) | object |  |

___

# Triggers

## When a user is added
Triggers when a new user is added.

**Operation Id:** TrigNewUser

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListAllUsers_Response](#listallusers_response) | array |  |

___

## When a client is added
Triggers when a new client is added.

**Operation Id:** TrigNewClient

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListAllClients_Response](#listallclients_response) | array |  |

___

## When a contact is added
Triggers when a new contact is added.

**Operation Id:** TrigNewContact

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListAllContacts_Response](#listallcontacts_response) | array |  |

___

## When a project is created
Triggers when a new project is created.

**Operation Id:** TrigNewProject

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjects_Response](#listprojects_response) | array |  |

___

## When a time entry is created for the current day
Triggers when a new time entry is created for the current day.

**Operation Id:** TrigNewTimeEntryToday

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Other User ID | string | The id of the user to check time entries for. Defaults to your id. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTimeEntriesForDay_Response](#gettimeentriesforday_response) | object |  |

___

## When a time entry is created for date
Triggers when a new time entry is created for a specific date.

**Operation Id:** TrigNewTimeEntry

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Date | string | YYYY-MM-DD or ISO format datetime | true |
| Other User ID | string | The id of the user to check time entries for. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTimeEntriesForDay_Response](#gettimeentriesforday_response) | object |  |

___


## Objects

### ListAllContacts_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Contact id | int32 | Unique identifier of the contact. | contact.id |
| Client id | int32 | Unique identifier of the client. | contact.client_id |
| First name | string | Contact&#x27;s first name. | contact.first_name |
| Last name | string | Contact&#x27;s last name. | contact.last_name |
| Email | string | Contact&#x27;s email. | contact.email |
| Office phone | string | Contact&#x27;s office phone. | contact.phone_office |
| Mobile phone | string | Contact&#x27;s mobile phone. | contact.phone_mobile |
| Fax | string | Contact&#x27;s fax. | contact.fax |
| Title | string | Contact&#x27;s title. | contact.title |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | contact.created_at |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | contact.updated_at |

### ListAllClients_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Client id | int32 | Unique identifier of the client. | client.id |
| Name | string | Client&#x27;s name. | client.name |
| Currency | string | Currency to use for client billing. | client.currency |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | client.updated_at |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | client.created_at |
| Address | string | Client&#x27;s address. | client.address |
| Currency symbol | string | Symbol that correlates to the selected currency. | client.currency_symbol |
| Details | string | Additional details, normally used for address information. | client.details |

### ListAllUsers_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [GetUserByID_Response](#getuserbyid_response) | object |  |  |

### UpdateTimeEntry_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time entry id | int32 | Unique identifier of the time entry. | id |
| User id | int32 | Unique identifier of the user who created the time entry. | user_id |
| Date | string | Date of time entry. | spent_at |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | created_at |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | updated_at |
| Project id | string | Id of the project time entry is associated with. | project_id |
| Task id | string | Id of the task time entry is associated with. | task_id |
| Project | string | Name of project the time entry is associated with. | project |
| Task | string | Name of task the time entry is associated with. | task |
| Client | string | Name of client the time entry is associated with. | client |
| Notes | string | Time entry notes. | notes |
| Hours without timer | float | Current amount of time tracked, if timer is not running. | hours_without_timer |
| Hours | float | Number of (decimal time) hours tracked in this time entry. | hours |

### ListProjects_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | int32 | Unique identifier of the project. | project.id |
| Client id | int32 | Id of client for the project. | project.client_id |
| Name | string | Project name. | project.name |
| Code | string | Project code. | project.code |
| Is active | boolean | True if the project is currently active. | project.active |
| Is billable | boolean | True if the project is billable. | project.billable |
| Bill by | string | Method by which the project is invoiced. | project.bill_by |
| Hourly rate | string | Billing rate by the hour. | project.hourly_rate |
| Budget | string | Budget value for the project. | project.budget |
| Budget by | string | Budgeting method for the project. | project.budget_by |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | project.created_at |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | project.updated_at |
| Start date | string | YYYY-MM-DD | project.starts_on |
| End date | string | YYYY-MM-DD | project.ends_on |
| Estimate | string | Project estimate. | project.estimate |
| Estimated by | string | Method of estimation for project. | project.estimate_by |
| Earliest record date | string | YYYY-MM-DD | project.hint_earliest_record_at |
| Latest record date | string | YYYY-MM-DD | project.hint_latest_record_at |
| Notes | string | Project notes. | project.notes |
| Cost budget | string | Budget value for Total Project Fees projects. | project.cost_budget |
| Cost budget includes expenses | boolean | Option for budget of Total Project Fees projects to include tracked expenses. | project.cost_budget_include_expenses |

### ListTasks_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task id | int32 | Unique identifier of the task. | task.id |
| Name | string | Task name. | task.name |
| internal | boolean |  | task.billable_by_default |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC). | task.created_at |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC). | task.updated_at |
| Default hourly rate | float | Default rate for the task. | task.default_hourly_rate |

### GetUserByID_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User id | int32 | Unique identifier of the user. | user.id |
| Email | string | User&#x27;s email. | user.email |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | user.created_at |
| Is admin | boolean | True if the user is an admin. | user.is_admin |
| First name | string | User&#x27;s first name. | user.first_name |
| Last name | string | User&#x27;s last name. | user.last_name |
| Is contractor | boolean | True if the user is a contractor. | user.is_contractor |
| Phone | string | User&#x27;s phone. | user.telephone |
| Is active | boolean | True if the user is currently active. | user.is_active |
| Hourly rate | float | User&#x27;s hourly rate | user.default_hourly_rate |
| Department | string | Department name the user works in. | user.department |
| Newsletter subscription | boolean | True if the user wants to subscribe to the newsletter. | user.wants_newsletter |
| Cost rate | float | User&#x27;s cost rate. | user.cost_rate |
| Weekly capacity | int32 | User&#x27;s weekly capacity. | user.weekly_capacity |

### GetTimeEntriesForDay_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| day_entries | array of object | day_entries | day_entries |
| Project id | string | Unique identifier of the porject. | day_entries.project_id |
| Project name | string | Name of the project. | day_entries.project |
| User id | int32 | Unique identifier of the user. | day_entries.user_id |
| Date | string | YYYY-MM-DD | day_entries.spent_at |
| Task id | string | Id of task the time entry is associated with. | day_entries.task_id |
| Task | string | Name of task the time entry is associated with. | day_entries.task |
| Client | string | Name of client the time entry is associated with. | day_entries.client |
| Time entry id | int32 | Unique identifier of the time entry. | day_entries.id |
| Notes | string | Time entry notes. | day_entries.notes |
| Started date-time | string | YYYY-MM-DDThh:mm:ssZ (UTC format). | day_entries.started_at |
| Ended date-time | string | YYYY-MM-DDThh:mm:ssZ (UTC format). | day_entries.ended_at |
| Created date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | day_entries.created_at |
| Updated date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format). | day_entries.updated_at |
| Hours without timer | float | Current amount of time tracked, if timer is not running. | day_entries.hours_without_timer |
| Hours | float | Number of (decimal time) hours tracked in this time entry. | day_entries.hours |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


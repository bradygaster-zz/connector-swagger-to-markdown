<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Insightly (Preview)

Insightly is the easiest customer relationship management solution (CRM) to use for managing deep customer relationships. Customers use Insightly&#x27;s tightly integrated CRM &amp; project management features to close new business, track post sale customer interactions &amp; drive repeat purchases.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Insightly API Key | Insightly API Key | securestring |


# Actions

## List tasks
List tasks

**Operation Id:** ListTasks

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object | A Insightly Tasks response object |

___

## Update task
Update task

**Operation Id:** UpdateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task Id | string | Unique ID of the task to update | true |
| Task Title | string | The title of the task | true |
| Due Date | string | Due Date of a task | false |
| Completed | boolean | Is task completed | true |
| Task Details | string | Task Details | false |
| Task Status | string | Task Status | true |
| Task Priority | int32 | Task Priority | false |
| Publicly Visible | boolean | Is task publicly visible | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | An Insightly Task Object |

___

## Add task
Add task

**Operation Id:** AddTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task Title | string | The title of the task | true |
| Due Date | string | Due Date of a task | false |
| Completed | boolean | Is task completed | true |
| Task Details | string | Task Details | false |
| Task Status | string | Task Status | true |
| Task Priority | int32 | Task Priority | false |
| Publicly Visible | boolean | Is task publicly visible | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | An Insightly Task Object |

___

## List projects
List projects

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object | A Insightly Project response object |

___

## Update project
Update project

**Operation Id:** UpdateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | string | Unique ID of the project to update | true |
| Project Name | string | Project Name | true |
| Project Details | string | Project Details | false |
| Project Status | string | Project Status | true |
| Image URL | string | Project Image URL | false |
| Project Visibility | string | Project Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Opportunity Id | int32 | Opportunity Id | false |
| Pipeline Id | int32 | Pipeline Id | false |
| Stage Id | int32 | Stage Id | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | An Insightly Project Object |

___

## Add project
Add project

**Operation Id:** AddProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Name | string | Project Name | true |
| Project Details | string | Project Details | false |
| Project Status | string | Project Status | true |
| Image URL | string | Project Image URL | false |
| Project Visibility | string | Project Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Opportunity Id | int32 | Opportunity Id | false |
| Pipeline Id | int32 | Pipeline Id | false |
| Stage Id | int32 | Stage Id | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | An Insightly Project Object |

___

## List leads
List leads

**Operation Id:** ListLeads

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListLeadsResponse](#listleadsresponse) | object | A Insightly Lead response object |

___

## Update lead
Update lead

**Operation Id:** UpdateLead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Lead Id | string | Unique ID of the lead to update | true |
| Title | string | Lead Title | false |
| First Name | string | First Name | false |
| Last Name | string | Last Name | true |
| Lead Description | string | Lead Description | false |
| Date Converted | string | Date Converted | false |
| Lead Visibility | string | Lead Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Organization Name | string | Organization Name | false |
| Phone Number | string | Phone Number | false |
| Mobile Phone Number | string | Mobile Phone Number | false |
| Email Address | string | Email Address | false |
| Converted | boolean | Converted | false |
| Website Url | string | Website Url | false |
| Lead Owner | int32 | Lead Owner | false |
| Lead Responsible | int32 | Lead Responsible | false |
| Lead Employee Count | int32 | Lead Employee Count | false |
| Lead Rating | int32 | Lead Rating | false |
| Industry | string | Industry | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead](#lead) | object | An Insightly Lead Object |

___

## Add lead
Add lead

**Operation Id:** AddLead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string | Lead Title | false |
| First Name | string | First Name | false |
| Last Name | string | Last Name | true |
| Lead Description | string | Lead Description | false |
| Date Converted | string | Date Converted | false |
| Lead Visibility | string | Lead Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Organization Name | string | Organization Name | false |
| Phone Number | string | Phone Number | false |
| Mobile Phone Number | string | Mobile Phone Number | false |
| Email Address | string | Email Address | false |
| Converted | boolean | Converted | false |
| Website Url | string | Website Url | false |
| Lead Owner | int32 | Lead Owner | false |
| Lead Responsible | int32 | Lead Responsible | false |
| Lead Employee Count | int32 | Lead Employee Count | false |
| Lead Rating | int32 | Lead Rating | false |
| Industry | string | Industry | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead](#lead) | object | An Insightly Lead Object |

___

## List contacts
List contacts

**Operation Id:** ListContacts

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListContactsResponse](#listcontactsresponse) | object | A Insightly contact response object |

___

## Update contact
Update contact

**Operation Id:** UpdateContact

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Contact Id | string | Unique ID of the contact to update | true |
| Salutation | string | Salutation | false |
| First Name | string | First Name | true |
| Last Name | string | Last Name | true |
| Background | string | Background | false |
| Contact Visibility | string | Contact Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Contact info Id | int32 | Contact info Id | false |
| Type | string | Contact Info Type | false |
| SubType | string | Contact Info Sub-Type | false |
| Label | string | Contact Info Label | false |
| Detail | string | Contact Info Detail | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Contact](#contact) | object | An Insightly Contact Object |

___

## Add contact
Add contact

**Operation Id:** AddContact

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Salutation | string | Salutation | false |
| First Name | string | First Name | true |
| Last Name | string | Last Name | true |
| Background | string | Background | false |
| Contact Visibility | string | Contact Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Contact info Id | int32 | Contact info Id | false |
| Type | string | Contact Info Type | false |
| SubType | string | Contact Info Sub-Type | false |
| Label | string | Contact Info Label | false |
| Detail | string | Contact Info Detail | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Contact](#contact) | object | An Insightly Contact Object |

___

## List users
List users

**Operation Id:** ListUsers

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListUsersResponse](#listusersresponse) | object | A Insightly User response object |

___

## Delete task
Delete task

**Operation Id:** DeleteTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task Id | int32 | Task Id | true |

#### Returns
This operation does not return anything.

___

## Follow a task
Follow a task

**Operation Id:** FollowTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task Id | int32 | Task Id | true |

#### Returns
This operation does not return anything.

___

## Delete project
Delete project

**Operation Id:** DeleteProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | int32 | Project Id | true |

#### Returns
This operation does not return anything.

___

## Delete lead
Delete lead

**Operation Id:** DeleteLead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Lead Id | int32 | Lead Id | true |

#### Returns
This operation does not return anything.

___

## Delete contact
Delete contact

**Operation Id:** DeleteContact

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Contact Id | int32 | Contact Id | true |

#### Returns
This operation does not return anything.

___

## Add organization
Add organization

**Operation Id:** AddOrganization

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Organization Name | string | Organization Name | true |
| Organization Background | string | Organization Background | false |
| Organization Visibility | string | Organization Visibility | false |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | false |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | false |
| Address Id | int32 | The Address Id | false |
| Address Type | string | The Address Type | false |
| Address Street | string | Street | false |
| Address City | string | City | false |
| Address State | string | State | false |
| Address Post Code | string | Post Code | false |
| Address Country | string | Country | false |
| Contact info Id | int32 | Contact info Id | false |
| Type | string | Contact Info Type | false |
| SubType | string | Contact Info Sub-Type | false |
| Label | string | Contact Info Label | false |
| Detail | string | Contact Info Detail | false |
| Name | string | Tag Name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Organization](#organization) | object | An Insightly Organization Object |

___

# Triggers

## When a task is assigned to me
Triggers a new flow when a task is assigned to me

**Operation Id:** OnTaskAssignedToMe

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object | A Insightly Tasks response object |

___

## When a task is created
Triggers a new flow when a new task is created

**Operation Id:** OnTaskCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object | A Insightly Tasks response object |

___

## When a task is updated
Triggers a new flow when a task is updated

**Operation Id:** OnTaskUpdated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object | A Insightly Tasks response object |

___

## When a project is created
Triggers a new flow when a new project is created

**Operation Id:** OnProjectCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object | A Insightly Project response object |

___

## When a project is updated
Triggers a new flow when a project is updated

**Operation Id:** OnProjectUpdated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object | A Insightly Project response object |

___

## When a lead is created
Triggers a new flow when a new lead is created

**Operation Id:** OnLeadCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead](#lead) | object | An Insightly Lead Object |

___

## When a lead is updated
Triggers a new flow when a lead is updated

**Operation Id:** OnLeadUpdated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Lead](#lead) | object | An Insightly Lead Object |

___

## When a contact is created
Triggers a new flow when a new contact is created

**Operation Id:** OnContactCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListContactsResponse](#listcontactsresponse) | object | A Insightly contact response object |

___

## When a contact is updated
Triggers a new flow when a contact is updated

**Operation Id:** OnContactUpdated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListContactsResponse](#listcontactsresponse) | object | A Insightly contact response object |

___

## When an event is created
Triggers a new flow when a new event is created

**Operation Id:** OnEventCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListEventsResponse](#listeventsresponse) | object | A Insightly Event response object |

___

## When an event is updated
Triggers a new flow when an event is updated

**Operation Id:** OnEventUpdated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListEventsResponse](#listeventsresponse) | object | A Insightly Event response object |

___


## Objects

### ListTasksResponse
A Insightly Tasks response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Tasks | Array of [Task](#task) | A collection of tasks | tasks |

### Task
An Insightly Task Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Id | int32 | The Task Id | TASK_ID |
| Task Title | string | The title of the task | TITLE |
| Due Date | string | Due Date of a task | DUE_DATE |
| Category Id | int32 | Category Id of a task | CATEGORY_ID |
| Completed Date | string | Completed Date of a task | COMPLETED_DATE_UTC |
| Completed | boolean | Is task completed | COMPLETED |
| Task Details | string | Task Details | DETAILS |
| Task Status | string | Task Status | STATUS |
| Task Priority | string | Task Priority | PRIORITY |
| Start Date | string | Start Date of a task | START_DATE |
| Project Id | int32 | Project Id | PROJECT_ID |
| Opportunity Id | int32 | Opportunity Id | OPPORTUNITY_ID |
| Milestone Id | int32 | Milestone Id | MILESTONE_ID |
| Pipeline Id | int32 | Pipeline Id | PIPELINE_ID |
| Stage Id | int32 | Stage Id | STAGE_ID |
| Percentage Complete | int32 | Percentage Complete | PERCENT_COMPLETE |
| Task Owner | int32 | Task Owner | OWNER_USER_ID |
| Assigned To | int32 | Assigned To | RESPONSIBLE_USER_ID |
| Task Visibility | boolean | Is task publicly visible | PUBLICLY_VISIBLE |
| Created Date | string | Created Date of a task | DATE_CREATED_UTC |
| Updated Date | string | Updated Date of a task | DATE_UPDATED_UTC |
| Assigned by user id | int32 | Assigned by user id | ASSIGNED_BY_USER_ID |
| Parent Task Id | int32 | Parent task id | PARENT_TASK_ID |
| Owner Visible | boolean | Owner visible | OWNER_VISIBLE |
| Assigned team id | int32 | Assigned team id | ASSIGNED_TEAM_ID |
| Assigned date | int32 | Assigned date | ASSIGNED_DATE_UTC |
| Reminder Date | int32 | Reminder date | REMINDER_DATE_UTC |
| Reminder Sent | boolean | Is reminder sent | REMINDER_SENT |
| Recurrence | string | Recurrence | RECURRENCE |
| Can Edit | boolean | Is reminder sent | CAN_EDIT |
| Can Delete | boolean | Can Delete | CAN_DELETE |

### TaskLink
An Insightly Task Link Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Link Id | int32 | Task Link Id | TASK_LINK_ID |
| Contact Id | int32 | The Contact Id | CONTACT_ID |
| Opportunity Id | int32 | Opportunity Id | OPPORTUNITY_ID |
| Organization Id | int32 | Organization Id | ORGANISATION_ID |
| Project Id | int32 | Project Id | PROJECT_ID |
| Lead Id | int32 | Lead Id | LEAD_ID |

### TaskRequest
An Insightly Task Request Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Title | string | The title of the task | TITLE |
| Due Date | string | Due Date of a task | DUE_DATE |
| Completed | boolean | Is task completed | COMPLETED |
| Task Details | string | Task Details | DETAILS |
| Task Status | string | Task Status | STATUS |
| Task Priority | int32 | Task Priority | PRIORITY |
| Publicly Visible | boolean | Is task publicly visible | PUBLICLY_VISIBLE |

### ListProjectsResponse
A Insightly Project response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [Project](#project) | A collection of projects | projects |

### Project
An Insightly Project Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | int32 | The Project Id | PROJECT_ID |
| Project Name | string | Project Name | PROJECT_NAME |
| Project Status | string | Project Status | STATUS |
| Project Details | string | Project Details | PROJECT_DETAILS |
| Image URL | string | Project Image URL | IMAGE_URL |
| Date Created | string | Date Created | DATE_CREATED_UTC |
| Project Visibility | string | Project Visibility | VISIBLE_TO |
| Date Updated | string | Date Updated | DATE_UPDATED_UTC |
| Date Started | string | Date Started | STARTED_DATE |
| Date Completed | string | Date Completed | COMPLETED_DATE |
| Project Owner | int32 | Project Owner | OWNER_USER_ID |
| Assigned To | int32 | Assigned To | RESPONSIBLE_USER_ID |
| Opportunity Id | int32 | Opportunity Id | OPPORTUNITY_ID |
| Pipeline Id | int32 | Pipeline Id | PIPELINE_ID |
| Stage Id | int32 | Stage Id | STAGE_ID |
| Category Id | int32 | Category Id of a task | CATEGORY_ID |
| Visible Team Id | int32 | Visible Team Id | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs | VISIBLE_USER_IDS |
| Can Edit | boolean | Can Edit | CAN_EDIT |
| Can Delete | boolean | Can Delete | CAN_DELETE |

### Tag
A Tag Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Tag Name | TAG_NAME |

### ProjectRequest
An Insightly Project Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Name | string | Project Name | PROJECT_NAME |
| Project Details | string | Project Details | PROJECT_DETAILS |
| Project Status | string | Project Status | STATUS |
| Image URL | string | Project Image URL | IMAGE_URL |
| Project Visibility | string | Project Visibility | VISIBLE_TO |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | VISIBLE_USER_IDS |
| Opportunity Id | int32 | Opportunity Id | OPPORTUNITY_ID |
| Pipeline Id | int32 | Pipeline Id | PIPELINE_ID |
| Stage Id | int32 | Stage Id | STAGE_ID |
| Tags | Array of [Tag](#tag) | Tags | TAGS |

### ListLeadsResponse
A Insightly Lead response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Leads | Array of [Lead](#lead) | A collection of leads | leads |

### Lead
An Insightly Lead Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Lead Id | int32 | The Lead Id | LEAD_ID |
| Salutation | string | Salutation | SALUTATION |
| Title | string | Lead Title | TITLE |
| First Name | string | First Name | FIRST_NAME |
| Last Name | string | Last Name | LAST_NAME |
| Lead Description | string | Lead Description | LEAD_DESCRIPTION |
| Date Created | string | Date Created | DATE_CREATED_UTC |
| Date Updated | string | Date Updated | DATE_UPDATED_UTC |
| Date Converted | string | Date Converted | CONVERTED_DATE_UTC |
| Lead Status Id | int32 | The Lead Status Id | LEAD_STATUS_ID |
| Lead Visibility | string | Lead Visibility | VISIBLE_TO |
| Organization Name | string | Organization Name | ORGANIZATION_NAME |
| Phone Number | string | Phone Number | PHONE_NUMBER |
| Mobile Phone Number | string | Mobile Phone Number | MOBILE_PHONE_NUMBER |
| Email Address | string | Email Address | EMAIL_ADDRESS |
| Converted | boolean | Converted | CONVERTED |
| Website Url | string | Website Url | WEBSITE_URL |
| Lead Owner | int32 | Lead Owner | OWNER_USER_ID |
| Lead Responsible | int32 | Lead Responsible | RESPONSIBLE_USER_ID |
| Lead Employee Count | int32 | Lead Employee Count | EMPLOYEE_COUNT |
| Lead Rating | int32 | Lead Rating | LEAD_RATING |
| Industry | string | Industry | INDUSTRY |
| Address Street | string | Address Street | ADDRESS_STREET |
| Address City | string | Address City | ADDRESS_CITY |
| Address State | string | Address State | ADDRESS_STATE |
| Address PostCode | string | Address PostCode | ADDRESS_POSTCODE |
| Address Country | string | Address Country | ADDRESS_COUNTRY |
| Fax number | string | Fax Number | FAX_NUMBER |
| Converted Contact Id | int32 | Converted contact Id | CONVERTED_CONTACT_ID |
| Converted Organization Id | int32 | Converted organization Id | CONVERTED_ORGANIZATION_ID |
| Converted Opportunity Id | int32 | Converted opportunity Id | CONVERTED_OPPORTUNITY_ID |
| Lead Source Id | int32 | The Lead Source Id | LEAD_SOURCE_ID |
| Visible Team Id | int32 | Visible Team Id | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs | VISIBLE_USER_IDS |
| Image URL | string | Lead Image URL | IMAGE_URL |
| Can Edit | boolean | Can Edit | CAN_EDIT |
| Can Delete | boolean | Can Delete | CAN_DELETE |

### LeadRequest
An Insightly LeadRequest Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Lead Title | TITLE |
| First Name | string | First Name | FIRST_NAME |
| Last Name | string | Last Name | LAST_NAME |
| Lead Description | string | Lead Description | LEAD_DESCRIPTION |
| Date Converted | string | Date Converted | CONVERTED_DATE_UTC |
| Lead Visibility | string | Lead Visibility | VISIBLE_TO |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | VISIBLE_USER_IDS |
| Organization Name | string | Organization Name | ORGANIZATION_NAME |
| Phone Number | string | Phone Number | PHONE_NUMBER |
| Mobile Phone Number | string | Mobile Phone Number | MOBILE_PHONE_NUMBER |
| Email Address | string | Email Address | EMAIL_ADDRESS |
| Converted | boolean | Converted | CONVERTED |
| Website Url | string | Website Url | WEBSITE_URL |
| Lead Owner | int32 | Lead Owner | OWNER_USER_ID |
| Lead Responsible | int32 | Lead Responsible | RESPONSIBLE_USER_ID |
| Lead Employee Count | int32 | Lead Employee Count | EMPLOYEE_COUNT |
| Lead Rating | int32 | Lead Rating | LEAD_RATING |
| Industry | string | Industry | INDUSTRY |
| Tag | Array of [Tag](#tag) | Tag | TAGS |

### ListContactsResponse
A Insightly contact response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Contacts | Array of [Contact](#contact) | A collection of contacts | contacts |

### Contact
An Insightly Contact Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Street | string | Street | ADDRESS_WORK.STREET |
| City | string | City | ADDRESS_WORK.CITY |
| State | string | State | ADDRESS_WORK.STATE |
| Post Code | string | Post Code | ADDRESS_WORK.POSTCODE |
| Country | string | Country | ADDRESS_WORK.COUNTRY |
| Street | string | Street | ADDRESS_HOME.STREET |
| City | string | City | ADDRESS_HOME.CITY |
| State | string | State | ADDRESS_HOME.STATE |
| Post Code | string | Post Code | ADDRESS_HOME.POSTCODE |
| Country | string | Country | ADDRESS_HOME.COUNTRY |
| Street | string | Street | ADDRESS_POSTAL.STREET |
| City | string | City | ADDRESS_POSTAL.CITY |
| State | string | State | ADDRESS_POSTAL.STATE |
| Post Code | string | Post Code | ADDRESS_POSTAL.POSTCODE |
| Country | string | Country | ADDRESS_POSTAL.COUNTRY |
| Street | string | Street | ADDRESS_PRIMARY.STREET |
| City | string | City | ADDRESS_PRIMARY.CITY |
| State | string | State | ADDRESS_PRIMARY.STATE |
| Post Code | string | Post Code | ADDRESS_PRIMARY.POSTCODE |
| Country | string | Country | ADDRESS_PRIMARY.COUNTRY |
| Street | string | Street | ADDRESS_OTHER.STREET |
| City | string | City | ADDRESS_OTHER.CITY |
| State | string | State | ADDRESS_OTHER.STATE |
| Post Code | string | Post Code | ADDRESS_OTHER.POSTCODE |
| Country | string | Country | ADDRESS_OTHER.COUNTRY |
| Email (Work) | string | The work email of the contact. | EMAIL_WORK |
| Email (Home) | string | The home email of the contact. | EMAIL_HOME |
| Email (Personal) | string | The personal email of the contact. | EMAIL_PERSONAL |
| Email (Other) | string | The other email of the contact. | EMAIL_OTHER |
| Phone (Work) | string | The work phone number of the contact. | PHONE_WORK |
| Phone (Home) | string | The home phone number of the contact. | PHONE_HOME |
| Phone (mobile) | string | The mobile phone number of the contact. | PHONE_MOBILE |
| Phone (Other) | string | The other phone number of the contact. | PHONE_OTHER |
| Contact Id | int32 | The Contact Id | CONTACT_ID |
| Salutation | string | Salutation | SALUTATION |
| First Name | string | First Name | FIRST_NAME |
| Last Name | string | Last Name | LAST_NAME |
| Image URL | string | Contact Image URL | IMAGE_URL |
| Date Created | string | Date Created | DATE_CREATED_UTC |
| Contact Visibility | string | Contact Visibility | VISIBLE_TO |
| Background | string | Background | BACKGROUND |
| Default Linked Organization | int32 | Default linked organization | DEFAULT_LINKED_ORGANISATION |
| Owner User Id | int32 | Owner User Id | OWNER_USER_ID |
| Date Updated | string | Date Updated | DATE_UPDATED_UTC |
| Visible Team Id | int32 | Visible Team Id | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs | VISIBLE_USER_IDS |
| Can Edit | boolean | Can Edit | CAN_EDIT |
| Can Delete | boolean | Can Delete | CAN_DELETE |
| Social LinkedIn | string | Social LinkedIn | SOCIAL_LINKEDIN |
| Social Facebook | string | Social Facebook | SOCIAL_FACEBOOK |
| Social Twitter | string | Social Twitter | SOCIAL_TWITTER |

### Address
An Insightly Contact Address Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Address Id | int32 | The Address Id | ADDRESS_ID |
| Address Type | string | The Address Type | ADDRESS_TYPE |
| Address Street | string | Street | STREET |
| Address City | string | City | CITY |
| Address State | string | State | STATE |
| Address Post Code | string | Post Code | POSTCODE |
| Address Country | string | Country | COUNTRY |

### ContactInfo
An Insightly Contact Information Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Contact info Id | int32 | Contact info Id | CONTACT_INFO_ID |
| Type | string | Contact Info Type | TYPE |
| SubType | string | Contact Info Sub-Type | SUBTYPE |
| Label | string | Contact Info Label | LABEL |
| Detail | string | Contact Info Detail | DETAIL |

### ContactRequest
An Insightly Contact Request Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Salutation | string | Salutation | SALUTATION |
| First Name | string | First Name | FIRST_NAME |
| Last Name | string | Last Name | LAST_NAME |
| Background | string | Background | BACKGROUND |
| Contact Visibility | string | Contact Visibility | VISIBLE_TO |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | VISIBLE_USER_IDS |
| Contact Information  | Array of [ContactInfo](#contactinfo) | Contact Information | CONTACTINFOS |
| Tag | Array of [Tag](#tag) | Tag | TAGS |

### ListUsersResponse
A Insightly User response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Users | Array of [User](#user) | A collection of users | users |

### User
An Insightly User Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Id | int32 | The User Id | USER_ID |
| Contact Id | int32 | The Contact Id | CONTACT_ID |
| First Name | string | First Name | FIRST_NAME |
| Last Name | string | Email Address | LAST_NAME |
| Email Address | string | Email Address | EMAIL_ADDRESS |
| Time zone Id | string | Time zone Id | TIMEZONE_ID |
| Email Dropbox Id | string | Email Dropbox Id | EMAIL_DROPBOX_IDENTIFIER |
| Email Dropbox Address | string | Email Dropbox Address | EMAIL_DROPBOX_ADDRESS |
| Administrator | boolean | Is administrator | ADMINISTRATOR |
| Account Owner | boolean | Is account owner | ACCOUNT_OWNER |
| Active | boolean | Is active | ACTIVE |
| Create Date | string | User create date | DATE_CREATED_UTC |
| Update Date | string | User update date | DATE_UPDATED_UTC |
| User Currency | string | User currency | USER_CURRENCY |
| Contact Display | string | Contact display | CONTACT_DISPLAY |
| Contact Order | string | Contact order | CONTACT_ORDER |
| Task Week Start | int32 | Task week start | TASK_WEEK_START |
| Instance Id | int32 | Instance Id | INSTANCE_ID |

### Object


This object has no properties.

### ListEventsResponse
A Insightly Event response object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Events | Array of [Event](#event) | A collection of events | events |

### Event
An Insightly Event Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Event Id | int32 | Event Id | EVENT_ID |
| Title | string | Event Title | TITLE |
| Start Date | string | Event Start Date | START_DATE_UTC |
| End Date | string | Event End Date | END_DATE_UTC |
| Create Date | string | Event Create Date | DATE_CREATED_UTC |
| Update Date | string | Event Update Date | DATE_UPDATED_UTC |
| Owner User Id | int32 | Event Owner User Id | OWNER_USER_ID |
| Is Reminder Sent | boolean | Reminder Sent | REMINDER_SENT |
| All Day Event | boolean | All Day Event | ALL_DAY |
| Event Visibility | boolean | Event Visibility | PUBLICLY_VISIBLE |
| Can Edit | boolean | Can Edit | CAN_EDIT |
| Can Delete | boolean | Can Delete | CAN_DELETE |

### OrganizationRequest
An Insightly Organization Request Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Organization Name | string | Organization Name | ORGANISATION_NAME |
| Organization Background | string | Organization Background | ORGANISATION_BACKGROUND |
| Organization Visibility | string | Organization Visibility | VISIBLE_TO |
| Visible Team ID | int32 | Visible Team ID (Required when team visibility state is selected) | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs (Required when indivdiuals visibility state is selected) | VISIBLE_USER_IDS |
| Organization Address | Array of [Address](#address) | Organization Addresses | ADDRESSES |
| Contact Information | Array of [ContactInfo](#contactinfo) | Contact Information | CONTACTINFOS |
| Tags | Array of [Tag](#tag) | Tags | TAGS |

### Organization
An Insightly Organization Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Organization Id | int32 | Organization Id | ORGANISATION_ID |
| Organization Background | string | Organization Background | ORGANISATION_BACKGROUND |
| Organization Name | string | Organization Name | ORGANISATION_NAME |
| Created Date | string | Created Date of Organization | DATE_CREATED_UTC |
| Updated Date | string | Updated Date of Organization | DATE_UPDATED_UTC |
| Organization Owner | int32 | Organization Owner | OWNER_USER_ID |
| Organization Visibility | string | Organization Visibility | VISIBLE_TO |
| Organization | Array of [Address](#address) | Organization Addresses | ADDRESSES |
| Contact Information | Array of [ContactInfo](#contactinfo) | Contact Information | CONTACTINFOS |
| Background | string | Organization Background | BACKGROUND |
| Image URL | string | Project Image URL | IMAGE_URL |
| Visible Team Id | int32 | Visible Team Id | VISIBLE_TEAM_ID |
| Visible User IDs | int32 | Visible User IDs | VISIBLE_USER_IDS |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 300 seconds |


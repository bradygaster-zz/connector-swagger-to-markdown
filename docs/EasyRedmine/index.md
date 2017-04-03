![Icon](icon.png)

# Easy Redmine (Preview)

v1.0.0

Easy Redmine is a web based tool for software project management.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |
| Site url | Root site url (Example: https://my.easyredmine.com ) | string |


# Actions

## Create a task
Create a task

**Operation Id:** CreateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project ID | string | Project ID | true |
| Priority ID | string | Priority ID | true |
| Subject | string | Subject | true |
| Description | string | Description | false |
| Start date | date-time | yyyy-MM-dd | false |
| Due date | date-time | yyyy-MM-dd | false |
| Estimated hours | float | Estimated hours | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetIssueResponse](#getissueresponse) | object |  |

___

## Get task by ID
Get task by ID

**Operation Id:** GetIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue | string | Issue | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetIssueResponse](#getissueresponse) | object |  |

___

## Update a task
Update a task

**Operation Id:** UpdateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue ID | string | Issue ID | true |
| Project ID | string | Project ID | false |
| Priority ID | string | Priority ID | false |
| Subject | string | Subject | false |
| Description | string | Description | false |
| Status | string | Status | false |
| Assign to ID | string | User to be assigned this task | false |
| Start date | date-time | yyyy-MM-dd | false |
| Due date | date-time | yyyy-MM-dd | false |
| Estimated hours | float | Estimated hours | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

## Create a project
Create a project

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | Name of project | true |
| Identifier | string | Unique friendly name that is different from id | false |
| Description | string | Description | false |
| Homepage | string | Homepage | false |
| Parent project ID | string | Select the parent project | false |
| Public | boolean | Is a public project | false |
| Inherit members | boolean | Inherit members | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateProjectResponse](#createprojectresponse) | object |  |

___

## Get project by ID
Get project by ID

**Operation Id:** GetProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProjectResponse](#projectresponse) | object |  |

___

## List users
List users

**Operation Id:** ListUsers

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListUsersResponse](#listusersresponse) | object |  |

___

## Get user by ID
Get user by ID

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User | string | User | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object |  |

___

# Triggers

## When a project is created
When a project is created

**Operation Id:** OnNewProject

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object |  |

___

## When a task is created
When a task is created

**Operation Id:** OnNewIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project ID | string | Project ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListIssuesResponse](#listissuesresponse) | object |  |

___

## When a task is updated
When a task is updated

**Operation Id:** OnUpdatedIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project ID | string | Project ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListIssuesResponse](#listissuesresponse) | object |  |

___


## Objects

### ListProjectsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [ProjectResponse](#projectresponse) | Projects | projects |

### ProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project ID | int32 |  | id |
| Project name | string |  | name |
| Identifier | string | Unique identifier for the project. | identifier |
| Description | string |  | description |
| Homepage | string |  | homepage |
| Status | int32 |  | status |
| Author | string |  | author.name |
| Created on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_on |
| Updated on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_on |
| Start date | date-time | yyyy-MM-dd | start_date |
| Due date | date-time | yyyy-MM-dd | due_date |

### CreateProjectRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Name of project | project.name |
| Identifier | string | Unique friendly name that is different from id | project.identifier |
| Description | string | Description | project.description |
| Homepage | string | Homepage | project.homepage |
| Parent project ID | string | Select the parent project | project.parent_id |
| Public | boolean | Is a public project | project.is_public |
| Inherit members | boolean | Inherit members | project.inherit_members |

### CreateProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | int32 |  | id |
| Project name | string |  | name |
| Identifier | string | Unique identifier for the project | identifier |
| Description | string |  | description |
| Homepage | string |  | homepage |
| Status | int32 |  | status |
| Author | string | Username of author | author.name |
| Created on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_on |
| Updated on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_on |

### ListIssuesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issues | Array of [IssueResponse](#issueresponse) | Issues | issues |

### IssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Id | int32 |  | id |
| Project Id | int32 |  | project.id |
| Project name | string |  | project.name |
| Tracker Id | int32 |  | tracker.id |
| Tracker | string |  | tracker.name |
| Status Id | int32 |  | status.id |
| Status | string |  | status.name |
| Priority Id | int32 |  | priority.id |
| Priority | string |  | priority.name |
| Author Id | int32 | User ID of author | author.id |
| Author | string | Username of author | author.name |
| Subject | string |  | subject |
| Description | string |  | description |
| Start date | string |  | start_date |
| Done ratio | int32 |  | done_ratio |
| Created on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_on |
| Updated on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_on |

### GetIssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Id | int32 |  | id |
| Project Id | int32 |  | project.id |
| Project name | string |  | project.name |
| Tracker Id | int32 |  | tracker.id |
| Tracker | string |  | tracker.name |
| Status Id | int32 |  | status.id |
| Status | string |  | status.name |
| Priority Id | int32 |  | priority.id |
| Priority | string |  | priority.name |
| Author Id | int32 | User ID of author. | author.id |
| Author | string | Username of author. | author.name |
| Subject | string |  | subject |
| Description | string |  | description |
| Start date | string |  | start_date |
| Done ratio | int32 |  | done_ratio |
| Spent hours | float |  | spent_hours |
| Total spent hours | float |  | total_spent_hours |
| Created on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_on |
| Updated on | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_on |

### CreateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project ID | string | Project ID | issue.project_id |
| Priority ID | string | Priority ID | issue.priority_id |
| Subject | string | Subject | issue.subject |
| Description | string | Description | issue.description |
| Start date | date-time | yyyy-MM-dd | issue.start_date |
| Due date | date-time | yyyy-MM-dd | issue.due_date |
| Estimated hours | float | Estimated hours | issue.estimated_hours |

### CreateIssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Id | int32 |  | id |
| Project Id | int32 |  | project.id |
| Project name | string |  | project.name |
| Tracker Id | int32 |  | tracker.id |
| Tracker | string |  | tracker.name |
| Status | string |  | status.name |
| Priority | string |  | priority.name |
| Author Id | int32 |  | author.id |
| Author | string |  | author.name |
| Subject | string |  | subject |
| Description | string |  | description |
| Start date | string |  | start_date |
| Due date | string |  | due_date |
| Done ratio | int32 |  | done_ratio |
| Estimated hours | float |  | estimated_hours |
| Created on | date-time |  | created_on |
| Updated on | date-time |  | updated_on |

### UpdateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project ID | string | Project ID | issue.project_id |
| Priority ID | string | Priority ID | issue.priority_id |
| Subject | string | Subject | issue.subject |
| Description | string | Description | issue.description |
| Status | string | Status | issue.status_id |
| Assign to ID | string | User to be assigned this task | issue.assigned_to_id |
| Start date | date-time | yyyy-MM-dd | issue.start_date |
| Due date | date-time | yyyy-MM-dd | issue.due_date |
| Estimated hours | float | Estimated hours | issue.estimated_hours |

### ListUsersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Users | Array of [UserResponse](#userresponse) | Users | users |

### UserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Id | int32 |  | id |
| Login | string |  | login |
| First name | string |  | firstname |
| Last name | string |  | lastname |
| Email | string |  | mail |
| Created on | date-time |  | created_on |
| Status | int32 |  | status |
| User type name | string |  | easy_user_type.name |
| Language | string |  | language |

### ListPrioritiesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [PriorityResponse](#priorityresponse) | Priorities | issue_priorities |

### PriorityResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Priority Id | int32 | Priority Id | id |
| Name | string | Name | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


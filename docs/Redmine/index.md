<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Redmine (Preview)

Redmine is a web based tool for software project management.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |
| Site url | Root site url (Example: http://my.redmine.com ) | string |


# Actions

## Create an issue
Create an issue.

**Operation Id:** CreateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Project. | false |
| Priority | string | Priority. | false |
| Tracker | string | Tracker. | false |
| Subject | string | Subject. | false |
| Description | string | Description. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateIssueResponse](#createissueresponse) | object |  |

___

## Get issue by ID
Get issue by ID.

**Operation Id:** GetIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue | string | Issue. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetIssueResponse](#getissueresponse) | object |  |

___

## Update an issue
Update an issue.

**Operation Id:** UpdateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue | string | Issue. | true |
| Priority | string | Priority. | false |
| Tracker | string | Tracker. | false |
| Status | string | Status. | false |
| Subject | string | Subject. | false |
| Description | string | Description. | false |

#### Returns
This operation does not return anything.

___

## Create a project
Create a project.

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | Name of project. | true |
| Identifier | string | Unique friendly name that is different from id. | true |
| Description | string | Description. | false |
| Homepage | string | Homepage. | false |
| Parent project | string | Select the parent project. | false |
| Public | boolean | Is a public project. | false |
| Inherit members | boolean | Inherit members. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateProjectResponse](#createprojectresponse) | object |  |

___

## Get project by ID
Get project by ID.

**Operation Id:** GetProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetProjectResponse](#getprojectresponse) | object |  |

___

## List users
List users.

**Operation Id:** ListUsers

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListUsersResponse](#listusersresponse) | object |  |

___

## Get user by ID
Get user by ID.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User | string | User. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetUserResponse](#getuserresponse) | object |  |

___

# Triggers

## When a project is created
When a project is created.

**Operation Id:** OnNewProject

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object |  |

___

## When an issue is created
When an issue is created.

**Operation Id:** OnNewIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListIssuesResponse](#listissuesresponse) | object |  |

___

## When an issue is updated
When an issue is updated.

**Operation Id:** OnUpdatedIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListIssuesResponse](#listissuesresponse) | object |  |

___


## Objects

### ListProjectsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [ProjectResponse](#projectresponse) | Projects. | projects |

### ProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | int32 | Project id. | id |
| Project name | string | Project name. | name |
| Identifier | string | Unique friendly name that is different from id. | identifier |
| Description | string | Description. | description |
| Status | int32 | Status. | status |
| Public | boolean | Public. | is_public |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### GetProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | int32 | Project id. | id |
| Project name | string | Project name. | name |
| Identifier | string | Unique friendly name that is different from id. | identifier |
| Description | string | Description. | description |
| Homepage | string | Homepage. | homepage |
| Status | int32 | Status. | status |
| Public | boolean | Public. | is_public |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### CreateProjectRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Name of project. | project.name |
| Identifier | string | Unique friendly name that is different from id. | project.identifier |
| Description | string | Description. | project.description |
| Homepage | string | Homepage. | project.homepage |
| Parent project | string | Select the parent project. | project.parent_id |
| Public | boolean | Is a public project. | project.is_public |
| Inherit members | boolean | Inherit members. | project.inherit_members |

### CreateProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | int32 | Project id. | id |
| Project name | string | Project name. | name |
| Identifier | string | Unique friendly name that is different from id. | identifier |
| Description | string | Description. | description |
| Homepage | string | Homepage. | homepage |
| Parent | string | Parent. | parent.name |
| Status | int32 | Status. | status |
| Public | boolean | Public. | is_public |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### ListIssuesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issues | Array of [IssueResponse](#issueresponse) | Issues. | issues |

### IssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | int32 | Issue Id. | id |
| Project name | string | Project name. | project.name |
| Tracker | string | Tracker. | tracker.name |
| Status | string | Status. | status.name |
| Priority | string | Priority. | priority.name |
| Author | string | Author. | author.name |
| Subject | string | Subject. | subject |
| Description | string | Description. | description |
| Start date | string | Start date. | start_date |
| Due date | string | Due date. | due_date |
| Done ratio | int32 | Done ratio. | done_ratio |
| Estimated hours | float | Estimated hours. | estimated_hours |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### GetIssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | int32 | Issue Id. | id |
| Project name | string | Project name. | project.name |
| Tracker | string | Tracker. | tracker.name |
| Status | string | Status. | status.name |
| Priority | string | Priority. | priority.name |
| Author | string | Author. | author.name |
| Subject | string | Subject. | subject |
| Description | string | Description. | description |
| Start date | string | Start date. | start_date |
| Due date | string | Due date. | due_date |
| Done ratio | int32 | Done ratio. | done_ratio |
| Estimated hours | float | Estimated hours. | estimated_hours |
| Total estimated hours | float | Total estimated hours. | total_estimated_hours |
| Spent hours | float | Spent hours. | spent_hours |
| Total spent hours | float | Total spent hours. | total_spent_hours |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### CreateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project | string | Project. | issue.project_id |
| Priority | string | Priority. | issue.priority_id |
| Tracker | string | Tracker. | issue.tracker_id |
| Subject | string | Subject. | issue.subject |
| Description | string | Description. | issue.description |

### CreateIssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | int32 | Issue Id. | id |
| Project name | string | Project name. | project.name |
| Tracker | string | Tracker. | tracker.name |
| Status | string | Status. | status.name |
| Priority | string | Priority. | priority.name |
| Author | string | Author. | author.name |
| Subject | string | Subject. | subject |
| Description | string | Description. | description |
| Start date | string | Start date. | start_date |
| Due date | string | Due date. | due_date |
| Done ratio | int32 | Done ratio. | done_ratio |
| Estimated hours | float | Estimated hours. | estimated_hours |
| Total estimated hours | float | Total estimated hours. | total_estimated_hours |
| Created on | date-time | Created on. | created_on |
| Updated on | date-time | Updated on. | updated_on |

### UpdateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Priority | string | Priority. | issue.priority_id |
| Tracker | string | Tracker. | issue.tracker_id |
| Status | string | Status. | issue.status_id |
| Subject | string | Subject. | issue.subject |
| Description | string | Description. | issue.description |

### ListUsersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Users | Array of [UserResponse](#userresponse) | Users. | users |

### UserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Id | int32 | User Id. | id |
| Login | string | Login. | login |
| First name | string | First name. | firstname |
| Last name | string | Last name. | lastname |
| Email | string | Email. | mail |
| Created on | date-time | Created on. | created_on |

### GetUserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Id | int32 | User Id. | id |
| Login | string | Login. | login |
| First name | string | First name. | firstname |
| Last name | string | Last name. | lastname |
| Email | string | Email. | mail |
| Created on | date-time | Created on. | created_on |
| Status | int32 | Status. | status |

### ListPrioritiesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [ProjectResponse](#projectresponse) | Priorities. | issue_priorities |

### PriorityResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Priority Id | int32 | Priority Id. | id |
| Name | string | Name. | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


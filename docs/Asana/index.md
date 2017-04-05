<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Asana (Preview)

Asana enables teams to manage their projects and tasks in one place.


# Actions

## Create new project
Create a new project.

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to use for new projects. | true |
| Project name | string | Name of the project. | true |
| Due date | date | yyyy-MM-dd | false |
| Public | boolean | True if the project is public to the organization. | false |
| Project color | string | Color used to display the project. | false |
| Project notes | string | Notes about the project. | false |
| Owner | string | Owner of the project. | false |
| Archive | boolean | Archived projects do not show in the UI by default. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProjectResponse](#projectresponse) | object | An Asana project. |

___

## Get project by ID
Retrieves project object by Project ID.

**Operation Id:** GetProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project ID | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProjectResponse](#projectresponse) | object | An Asana project. |

___

## Create Task
Create a new task.

**Operation Id:** CreateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to use for your projects. | true |
| Project ID | string | Project | true |
| Task name | string | Name of the task. | true |
| Assignee | string | &#x27;Email or User ID, defaults to current user. | false |
| Description | string | Description of the task. | false |
| Assignee status | string | Scheduling status of the task. | false |
| Completed | boolean | Indicate if the task will be marked as completed. | false |
| Due date | date | Due date of the task. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskResponse](#taskresponse) | object | An Asana task. |

___

## Get task by ID
Retrieves task object by Task ID.

**Operation Id:** GetTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task ID | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskResponse](#taskresponse) | object | An Asana task. |

___

## Complete Task
Mark an existing task as complete.

**Operation Id:** CompleteTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task ID | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskResponse](#taskresponse) | object | An Asana task. |

___

## Add Comment
Add a comment to an existing task.

**Operation Id:** AddComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task ID | string |  | true |
| Comment | string | Text to be used as comment. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddCommentResponse](#addcommentresponse) | object | A comment on an Asana task. |

___

## List users by workspace
Retrieves the list of users for a given workspace.

**Operation Id:** ListUsers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to monitor for users. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListUsersResponse](#listusersresponse) | object |  |

___

## Get user by ID
Retrieves user object by User ID.

**Operation Id:** GetUser

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User | string | User | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object | An Asana user. |

___

# Triggers

## When a project is created
Triggers when a new project is created.

**Operation Id:** OnProjectCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to monitor for new projects. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListProjectsResponse](#listprojectsresponse) | object |  |

___

## When a task is created
Triggers when a new task is created.

**Operation Id:** OnTaskCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to monitor for new projects. | true |
| Project ID | string | Project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object |  |

___

## When a task is completed
Triggers when an existing task is completed.

**Operation Id:** OnTaskCompleted

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace ID | string | Workspace to monitor for new projects. | true |
| Project ID | string | Project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListTasksResponse](#listtasksresponse) | object |  |

___


## Objects

### ProjectRequest
An Asana project used to create new projects.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project name | string | Name of the project. | data.name |
| Due date | date | yyyy-MM-dd | data.due_date |
| Public | boolean | True if the project is public to the organization. | data.public |
| Project color | string | Color used to display the project. | data.color |
| Project notes | string | Notes about the project. | data.notes |
| Owner | string | Owner of the project. | data.owner |
| Archive | boolean | Archived projects do not show in the UI by default. | data.archived |

### TaskRequest
An Asana task used to create new tasks.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task name | string | Name of the task. | data.name |
| Assignee | string | &#x27;Email or User ID, defaults to current user. | data.assignee |
| Description | string | Description of the task. | data.notes |
| Assignee status | string | Scheduling status of the task. | data.assignee_status |
| Completed | boolean | Indicate if the task will be marked as completed. | data.completed |
| Due date | date | Due date of the task. | data.due_on |

### ListProjectsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [ProjectResponse](#projectresponse) |  | data |

### ProjectResponse
An Asana project.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project ID | int32 |  | id |
| Project name | string |  | name |
| Project notes | string |  | notes |
| Created date | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| Modified date | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | modified_at |
| [Owner](#owner) | object | The project owner. | owner |
| Due date | date | yyyy-MM-dd | due_date |
| [CurrentStatus](#currentstatus) | object |  | current_status |
| Public | boolean |  | public |
| Archived | boolean |  | archived |
| [WorkSpace](#workspace) | object | The workspace. | workspace |
| Color | string | Project color. | color |

### ListTasksResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Tasks | Array of [TaskResponse](#taskresponse) |  | data |

### TaskResponse
An Asana task.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task ID | int32 |  | id |
| Created date | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| Modified date | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | modified_at |
| Task name | string |  | name |
| Task notes | string |  | notes |
| Completed | boolean |  | completed |
| [Assignee](#assignee) | object | The user to whom this task is assigned. | assignee |
| Asignee status | string | Scheduling status of the task. | assignee_status |
| Completed date and time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | completed_at |
| Due date | date | yyyy-MM-dd | due_on |
| Due date and time | string | yyyy-MM-ddTHH:mm:ss.fffZ | due_at |
| [WorkSpace](#workspace) | object | The workspace. | workspace |
| Number of likes | int32 |  | num_hearts |
| Liked | boolean |  | hearted |

### AddCommentResponse
A comment on an Asana task.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Target](#target) | object | The task that this comment is associated with. | data.target |
| Text | string | The text of the comment. | data.text |
| Creation date | string | The date and time at which this comment was created. | data.created_at |
| [CreatedBy](#createdby) | object | The user that authored this comment. | data.created_by |
| Source | string | The component of the Asana product the user used to trigger the comment. | data.source |
| Type | string | The type of comment this is. | data.type |
| Comment ID | int32 | The ID for this comment. | data.id |

### ListWorkSpacesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object |  | data |
| id | int32 |  | data.id |
| name | string |  | data.name |
| is_organization | boolean |  | data.is_organization |

### ListUsersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Users | Array of [UserResponse](#userresponse) |  | data |

### UserResponse
An Asana user.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User ID | int32 |  | id |
| User name | string |  | name |
| Email | string |  | email |

### CurrentStatus


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| color | string | The color status of the project. | color |
| text | string | Text describing the project status. | text |
| ID | integer | ID of the author of the project status. | author.id |
| name | string | Name of the author of the project status. | author.name |

### WorkSpace
The workspace.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | id |
| name | string |  | name |

### Projects
The projects with which this task is associated.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer | The ID of the project with which this task is associated. | id |
| name | string | The name of the project with which this task is associated. | name |

### Members
The project members.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | int32 | The ID of the project member. | id |
| name | string | The name of the project member. | name |

### Followers
The project followers.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | int32 | The ID of the project follower. | id |
| name | string | The name of the project follower. | name |

### Owner
The project owner.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer | The ID of the project owner. | id |
| name | string | The name of the project owner. | name |

### Assignee
The user to whom this task is assigned.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | id |
| name | string |  | name |

### Target
The task that this comment is associated with.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer | The ID of the task that this comment is associated with. | id |
| name | string | The ID of the task that this comment is associated with. | name |

### CreatedBy
The user that authored this comment.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer | The ID of the user that authored this comment. | id |
| name | string | The name of the user that authored this comment. | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


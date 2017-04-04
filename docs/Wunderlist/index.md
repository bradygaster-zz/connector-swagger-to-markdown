<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Wunderlist

v1.0

Wunderlist provide a todo list and task manager to help people get their stuff done.  Whether you’re sharing a grocery list with a loved one, working on a project, or planning a vacation, Wunderlist makes it easy to capture, share, and complete your to¬dos. Wunderlist instantly syncs between your phone, tablet and computer, so you can access all your tasks from anywhere.


# Actions

## Get lists
Retrieve the lists associated with your account.

**Operation Id:** RetrieveLists

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [List](#list) |  |  |

___

## Create a list
Create a list.

**Operation Id:** CreateList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| title | string | Title | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatedList](#createdlist) | object | Model for create list response |

___

## Get tasks
Retrieve tasks from a specific list.

**Operation Id:** ListTasks

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Show completed tasks. | boolean | Completed | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Task](#task) |  |  |

___

## Create a task
Create a task

**Operation Id:** CreateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| list_id | integer | List ID | true |
| title | string | Title | true |
| assignee_id | integer | Assignee ID | false |
| completed | boolean | Completed | false |
| recurrence_type | string | Recurrence Type | false |
| recurrence_count | integer | How many times the task should occur | false |
| due_date | date | Due Date | false |
| starred | boolean | Starred | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | Model for Task |

___

## Get subtasks
Retrieve subtasks from a specific list or from a specific task.

**Operation Id:** ListSubTasks

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |
| Show completed tasks. | boolean | Completed | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Subtask](#subtask) |  |  |

___

## Create a subtask
Create a subtask within a specific task

**Operation Id:** CreateSubTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| list_id | integer | List ID | true |
| task_id | integer | Task ID | true |
| title | string | Title | true |
| completed | boolean | Completed | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Subtask](#subtask) | object | Model for Subtask |

___

## Get notes
Retrieve notes for a specific list or a specific task.

**Operation Id:** ListNotes

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Note](#note) |  |  |

___

## Create a note
Add a note to a specific task

**Operation Id:** CreateNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| list_id | integer | List ID | true |
| task_id | integer | Task ID | true |
| content | string | Text content for the note | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Note](#note) | object | Model for Note |

___

## Get task comments
Retrieve task comments for a specific list or a specific task.

**Operation Id:** ListComments

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Comment](#comment) |  |  |

___

## Add a comment to a task
Add a comment to a specific task

**Operation Id:** CreateComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| list_id | integer | List ID | true |
| task_id | integer | Task ID | true |
| text | string | Text | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Comment](#comment) | object | Model for Task Comment |

___

## Get reminders
Retrieve reminders for a specific list or a specific task.

**Operation Id:** RetrieveReminders

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Reminder](#reminder) |  |  |

___

## Set a reminder
Set a reminder.

**Operation Id:** CreateReminder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| list_id | integer | List ID | true |
| task_id | integer | Task ID | true |
| date | date-time | Date | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatedReminder](#createdreminder) | object | Model for create reminder response |

___

## Get files
Retrieve files for a specific list or a specific task.

**Operation Id:** RetrieveFiles

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [File](#file) |  |  |

___

## Get list
Retrieves a specific list

**Operation Id:** GetList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | string | List ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [List](#list) | object | Model for List |

___

## Delete list
Deletes a list

**Operation Id:** DeleteList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Revision | integer | Revision | true |

#### Returns
This operation does not return anything.

___

## Update a list
Update a specific list

**Operation Id:** UpdateList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| revision | integer | Revision | false |
| title | string | Title | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [List](#list) | object | Model for List |

___

## Get task
Retrieves a specific task

**Operation Id:** GetTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | Model for Task |

___

## Update a task
Updates a specific task

**Operation Id:** UpdateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | true |
| revision | integer | Revision | false |
| title | string | Title | false |
| assignee_id | integer | Assignee ID | false |
| completed | boolean | Completed | false |
| recurrence_type | string | Recurrence Type | false |
| recurrence_count | integer | Recurrence Count | false |
| due_date | string | Due Date | false |
| starred | boolean | Starred | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | Model for Task |

___

## Delete task
Deletes a specific task

**Operation Id:** DeleteTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | true |
| Revision | integer | Revision | true |

#### Returns
This operation does not return anything.

___

## Get subtask
Retrieves a specific subtask

**Operation Id:** GetSubTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subtask ID | string | Subtask ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Subtask](#subtask) | object | Model for Subtask |

___

## Update a subtask
Updates a specific subtask

**Operation Id:** UpdateSubTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subtask ID | integer | Subtask ID | true |
| revision | integer | Revision | false |
| title | string | Title | false |
| completed | boolean | Completed | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Subtask](#subtask) | object | Model for Subtask |

___

## Delete a subtask
Deletes a specific subtask

**Operation Id:** DeleteSubTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subtask ID | integer | Subtask ID | true |
| Revision | integer | Revision | true |

#### Returns
This operation does not return anything.

___

## Get a note
Retrieve a specific note

**Operation Id:** GetNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Note ID | string | Note ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Note](#note) | object | Model for Note |

___

## Update a note
Update a specific note

**Operation Id:** UpdateNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Note ID | integer | Note ID | true |
| revision | integer | Revision | false |
| content | string | Content | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Note](#note) | object | Model for Note |

___

## Delete a note
Delete a specific note

**Operation Id:** DeleteNote

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Note ID | integer | Note ID | true |
| Revision | integer | Revision | true |

#### Returns
This operation does not return anything.

___

## Get task comment
Retrieve a specific task comment

**Operation Id:** GetComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Comment ID | string | Comment ID | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Comment](#comment) | object | Model for Task Comment |

___

## Update a reminder
Update a specific reminder

**Operation Id:** UpdateReminder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Reminder ID | integer | Reminder ID | true |
| date | date-time | Date | false |
| revision | integer | Revision | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Reminder](#reminder) | object | Model for Reminder |

___

## Delete a reminder
Delete a specific reminder

**Operation Id:** DeleteReminder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Reminder ID | integer | ID of the reminder. | true |
| Revision | integer | Revision | true |

#### Returns
This operation does not return anything.

___

# Triggers

## When a task is due
Triggers a new flow when a task in the list is due

**Operation Id:** TriggerTaskDue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Task](#task) |  |  |

___

## When a new task is created
Triggers a new flow when a new task is created in the list

**Operation Id:** TriggerTaskNew

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Task](#task) |  |  |

___

## When a reminder occurs
Triggers a new flow when a reminder occurs

**Operation Id:** TriggerReminder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | integer | List ID | true |
| Task ID | integer | Task ID | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Reminder](#reminder) |  |  |

___


## Objects

### List
Model for List

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| created_at | date-time | Created At | created_at |
| title | string | Title | title |
| list_type | string | List Type | list_type |
| type | string | Type | type |
| revision | integer | Revision | revision |

### CreatedList
Model for create list response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| created_at | date-time | Created At | created_at |
| title | string | Title | title |
| revision | integer | Revision | revision |
| type | string | Type | type |

### Task
Model for Task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | Task ID | id |
| assignee_id | integer | Assignee ID | assignee_id |
| assigner_id | integer | Assigner ID | assigner_id |
| created_at | date-time | Created At | created_at |
| created_by_id | integer | Created By | created_by_id |
| due_date | date-time | Due Date | due_date |
| list_id | integer | List ID | list_id |
| revision | integer | Revision | revision |
| starred | boolean | Starred | starred |
| title | string | Title | title |

### Subtask
Model for Subtask

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| task_id | integer | Task ID | task_id |
| created_at | date-time | Created At | created_at |
| created_by_id | integer | Created By | created_by_id |
| revision | integer | Revision | revision |
| completed | boolean | Completed | completed |
| completed_at | date-time | Completed At | completed_at |
| title | string | Title | title |
| type | string | Type | type |

### Note
Model for Note

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| task_id | integer | Task ID | task_id |
| content | string | Content | content |
| created_at | date-time | Created At | created_at |
| updated_at | date-time | Updated At | updated_at |
| revision | integer | Revision | revision |

### Comment
Model for Task Comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| task_id | integer | Task ID | task_id |
| revision | integer | Revision | revision |
| text | string | Text | text |
| type | string | Type | type |
| created_at | date-time | Created At | created_at |

### Reminder
Model for Reminder

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| date | date-time | Date | date |
| task_id | integer | Task ID | task_id |
| revision | integer | Revision | revision |
| type | string | Type | type |
| created_at | date-time | Created At | created_at |
| updated_at | date-time | Updated At | updated_at |

### CreatedReminder
Model for create reminder response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| date | date-time | Date | date |
| task_id | integer | Task ID | task_id |
| revision | integer | Revision | revision |
| created_at | date-time | Created At | created_at |
| updated_at | date-time | Updated At | updated_at |

### File
Model for File

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | integer | ID | id |
| url | string | URL | url |
| task_id | integer | Task ID | task_id |
| list_id | integer | List ID | list_id |
| user_id | integer | User ID | user_id |
| file_name | string | Filename | file_name |
| content_type | string | Content Type | content_type |
| file_size | integer | File Size | file_size |
| local_created_at | date-time | File creation time specified by the user | local_created_at |
| created_at | date-time | Created At | created_at |
| updated_at | date-time | Updated At | updated_at |
| type | string | Type | type |
| revision | integer | Revision | revision |

### NewTask


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| list_id | integer | List ID | list_id |
| title | string | Title | title |
| assignee_id | integer | Assignee ID | assignee_id |
| completed | boolean | Completed | completed |
| recurrence_type | string | Recurrence Type | recurrence_type |
| recurrence_count | integer | How many times the task should occur | recurrence_count |
| due_date | date | Due Date | due_date |
| starred | boolean | Starred | starred |

### NewList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| title | string | Title | title |

### NewSubtask


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| list_id | integer | List ID | list_id |
| task_id | integer | Task ID | task_id |
| title | string | Title | title |
| completed | boolean | Completed | completed |

### NewNote


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| list_id | integer | List ID | list_id |
| task_id | integer | Task ID | task_id |
| content | string | Text content for the note | content |

### NewComment


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| list_id | integer | List ID | list_id |
| task_id | integer | Task ID | task_id |
| text | string | Text | text |

### NewReminder


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| list_id | integer | List ID | list_id |
| task_id | integer | Task ID | task_id |
| date | date-time | Date | date |

### UpdateTask


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| revision | integer | Revision | revision |
| title | string | Title | title |
| assignee_id | integer | Assignee ID | assignee_id |
| completed | boolean | Completed | completed |
| recurrence_type | string | Recurrence Type | recurrence_type |
| recurrence_count | integer | Recurrence Count | recurrence_count |
| due_date | string | Due Date | due_date |
| starred | boolean | Starred | starred |

### UpdateList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| revision | integer | Revision | revision |
| title | string | Title | title |

### UpdateSubtask


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| revision | integer | Revision | revision |
| title | string | Title | title |
| completed | boolean | Completed | completed |

### UpdateNote


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| revision | integer | Revision | revision |
| content | string | Content | content |

### UpdateReminder


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| date | date-time | Date | date |
| revision | integer | Revision | revision |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 500 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


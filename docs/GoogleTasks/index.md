![Icon](icon.png)

# Google Tasks (Preview)

v1.0

Google Tasks is a very simple task list. Works inside Gmail, Android, and Calendar seamlessly.


# Actions

## List task lists
Lists all task lists

**Operation Id:** ListTaskLists

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskListList](#tasklistlist) | object | A list of task lists |

___

## Create a task list
Creates a new task list

**Operation Id:** CreateTaskList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string | Title of the task list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskListEntry](#tasklistentry) | object | A task list |

___

## Lists the tasks for a task list
Lists the tasks for a task list

**Operation Id:** ListTasks

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskList](#tasklist) | object | A list of tasks |

___

## Create a task in a task list
Create a task in a task list

**Operation Id:** CraeteTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |
| Title | string | Title of the task | true |
| Notes | string | Notes for the task | false |
| Due | date-time | Date the task is due | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | A task |

___

## Get a task from a task list
Get a task from a task list

**Operation Id:** ListTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |
| Task ID | string | The id of the task | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object | A task |

___

# Triggers

## When a new task list is created
Trigger for when a new task list is created

**Operation Id:** OnNewTaskList

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskListList](#tasklistlist) | object | A list of task lists |

___

## When a task is added to a task list
When a task is added to a task list

**Operation Id:** OnNewTaskInList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskList](#tasklist) | object | A list of tasks |

___

## When a task is completed in a task list
When a task is completed in a task list

**Operation Id:** OnCompletedTaskInList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskList](#tasklist) | object | A list of tasks |

___

## When a task is due in a task list
When a task is due in a task list

**Operation Id:** OnDueTaskInList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task List ID | string | The id of the task list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TaskList](#tasklist) | object | A list of tasks |

___


## Objects

### TaskListList
A list of task lists

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [TaskListEntry](#tasklistentry) | Task lists in the lists | items |

### TaskListEntry
A task list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task List ID | string | Identifier of the task list | id |
| Title | string | Title of the task list | title |
| HTML Link | string | A link to this task list | selfLink |
| Updated Time | date-time | Time the task list was last updated | updated |

### TaskListCreate
Object used to create a task list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Title of the task list | title |

### TaskList
A list of tasks

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Task](#task) | Tasks in the list | items |

### Task
A task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Id | string | Identifier of the task | id |
| Title | string | Title of the task | title |
| Updated | date-time | The last time the task was updated | updated |
| HTML Link | string | A link to this task | selfLink |
| Parent | string | Parent of the task | parent |
| Notes | string | Notes for the task | notes |
| Status | string | Status of the task | status |
| Due | date-time | Time the task is due | due |
| Completed | date-time | Time the task was completed | completed |

### TaskCreate
Represents the values used to create a task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Title of the task | title |
| Notes | string | Notes for the task | notes |
| Due | date-time | Date the task is due | due |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


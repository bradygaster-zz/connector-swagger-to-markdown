<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Toodledo (Preview)

v1.0.0

Toodledo is a powerful online productivity tool. Manage your to-do list by creating and updating tasks.


# Actions

## Get a list of tasks
Returns a list of tasks (up to 1000 results).

**Operation Id:** ListTasks

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Completed | int32 | Set to 0 to find only uncompleted tasks or 1 to find only completed tasks. Default includes both. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Task](#task) |  |

___

## Create a task
Create a new task with the specified fields.

**Operation Id:** CreateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string | A string for the name of the task. Up to 255 characters. | false |
| Folder Id | int32 | The id number of the folder. Omit this field or set it to 0 to leave the task unassigned to a folder. | false |
| Priority | int32 | An integer that represents the priority of the task. | false |
| Note | string | A text string up to 32,000 bytes long. New lines should be sent as 
. | false |
| Due Date | date-time | A timestamp for when the task is due. The time component of this timestamp doesn&#x27;t matter. | false |
| Due Time | date-time | A timestamp for when the task is due. If the task does not have a time set, then this will be empty. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object |  |

___

## Get task
Get a task by id.

**Operation Id:** GetTaskById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Task Id | int32 | The server id number for this task. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object |  |

___

## Update task
Update the fields for an existing task.

**Operation Id:** UpdateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id | int32 | The server id number for this task. | false |
| Title | string | A string for the name of the task. | false |
| Completed | date-time | A timestamp for when the task was completed. If the task is not completed, the value will be 0. | false |
| Due Date | date-time | A timestamp for when the task is due. | false |
| Due Time | date-time | A timestamp for when the task is due. If the task does not have a time set, then this will be empty. | false |
| Note | string | A text string up to 32,000 bytes long. | false |
| Priority | int32 | An integer that represents the priority. | false |
| Folder | int32 | The id number of the folder. If unassigned to a folder, the value will be 0. | false |
| Modified | date-time | A timestamp for when the task was last modified. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task](#task) | object |  |

___

## Get folders
Get a list of folders.

**Operation Id:** GetFolders

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Folder](#folder) |  |

___

# Triggers

## When a new task is created or updated
Triggers a new workflow when a task is created or updated.

**Operation Id:** TrigOnNewTask

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Task](#task) |  |

___


## Objects

### NewTask


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | A string for the name of the task. Up to 255 characters. | title |
| Folder Id | int32 | The id number of the folder. Omit this field or set it to 0 to leave the task unassigned to a folder. | folder |
| Priority | int32 | An integer that represents the priority of the task. | priority |
| Note | string | A text string up to 32,000 bytes long. New lines should be sent as 
. | note |
| Due Date | date-time | A timestamp for when the task is due. The time component of this timestamp doesn&#x27;t matter. | duedate |
| Due Time | date-time | A timestamp for when the task is due. If the task does not have a time set, then this will be empty. | duetime |

### Task


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | The server id number for this task. | id |
| Title | string | A string for the name of the task. | title |
| Completed | date-time | A timestamp for when the task was completed. If the task is not completed, the value will be 0. | completed |
| Due Date | date-time | A timestamp for when the task is due. | duedate |
| Due Time | date-time | A timestamp for when the task is due. If the task does not have a time set, then this will be empty. | duetime |
| Note | string | A text string up to 32,000 bytes long. | note |
| Priority | int32 | An integer that represents the priority. | priority |
| Folder | int32 | The id number of the folder. If unassigned to a folder, the value will be 0. | folder |
| Modified | date-time | A timestamp for when the task was last modified. | modified |

### Folder


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | The id number of the folder. | id |
| Name | string | A text string up to 32 characters. | name |
| Archived | int32 | A boolean value indicating whether the folder has been archived. | archived |
| Private | int32 | A boolean value indicating whether the folder has been shared with other people. | private |
| Order | int32 | An integer representing the preferred order for listing folders with 1 being the top. | order |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


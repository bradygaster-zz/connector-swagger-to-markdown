![Icon](icon.png)

# Todoist

v1.1

Todoist is an online task management app and todo list. With Todoist, users can organize, schedule, maintain and prioritize personal tasks.

## Creating a connection

# Actions



## List projects
List projects

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Projects | Array of  [Project](#project)  | A collection of projects |
___


## List tasks
List tasks

**Operation Id:** ListItems

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Items | Array of  [Item](#item)  | A collection of items |
___


## List tasks by project
List tasks by project

**Operation Id:** ListItemsByProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Items | Array of  [Item](#item)  | A collection of items |
___


## List labels
List labels

**Operation Id:** ListLabels

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Labels | Array of  [Label](#label)  | A collection of labels |
___


## Create a task
Create a task

**Operation Id:** CreateItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |
| Task to be created | [object Object] | New item to be added to project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Item](#item) | object | A Todoist Item Object |
___


## Update a task
Update a task

**Operation Id:** UpdateItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |
| Task Id |  string  | Task Id | true |
| Task to be updated | [object Object] | Change item | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Item](#item) | object | A Todoist Item Object |
___


## Create a project
Create a project

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project to be created | [object Object] | New project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | A Todoist Project Object |
___


## Update a project
Update a project

**Operation Id:** UpdateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |
| Project to be updated | [object Object] | Change project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | A Todoist Project Object |
___


## Share a project
Share a project

**Operation Id:** ShareProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |
| Project to be shared | [object Object] | Share project | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | A Todoist Project Object |
___


## Create a label
Create a label

**Operation Id:** CreateLabel

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Label to be created | [object Object] | New label | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Label](#label) | object | A Todoist Label Object |
___


## Update a label
Update a label

**Operation Id:** UpdateLabel

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Label Id |  string  | Label Id | true |
| Label to be updated | [object Object] | Change label | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Label](#label) | object | A Todoist Label Object |
___

# Triggers


## When a task is completed
Triggers a new flow when a task is completed

**Operation Id:** OnItemCompleted

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Items | Array of  [Item](#item)  | A collection of items |
___

## When a task is created
Trigers a new flow when a task is created

**Operation Id:** OnItemCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id |  string  | Project Id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Items | Array of  [Item](#item)  | A collection of items |
___

## Objects

### Project
A Todoist Project Object

| Summary | Type | Description |
|---------|------|-------------|
| Project Id | int32 | Id of Project |
| Project Name | string | Name of Project |
| Color | int32 | Color of Project |
| Is Project Shared | boolean | Is Project Shared |
| Is Project Deleted | int32 | Is Project Deleted |
| Is Project Archived | int32 | Is Project Archived |

### Item
A Todoist Item Object

| Summary | Type | Description |
|---------|------|-------------|
| Task Title | string | The title of the task |
| Task Id | int32 | The id of the task |
| Task Owner | int32 | The owner of the task |
| Project Id | int32 | Project where task resides |
| Date Language | string | The language of the date (valid languages are: en, da, pl, zh, ko, de, pt, ja, it, fr, sv, ru, es, nl). |
| Task Due Date | date-time | The date of the task in the format Mon 07 Aug 2006 12:34:56 +0000 |
| Indent | int32 | The indent of the task (a number between 1 and 4, where 1 is top-level) |
| Task Priority | int32 | The priority of the task (a number between 1 and 4, 4 for very urgent and 1 for natural) |
| Order | int32 | The order of the task inside a project (the smallest value would place the task at the top) |
| Assigner Id | int32 | The id of the user who assigns the current task. For shared projects only. |
| Assignee Id | int32 | The id of user who is responsible for accomplishing the current task. For shared projects only. |
| IsTaskCompleted | int32 | Whether the task is marked as completed (where 1 is true and 0 is false) |
| IsTaskArchived | int32 | Whether the task is marked as archived (where 1 is true and 0 is false) |
| Date Created | date-time | The date when the task was created |

### Label
A Todoist Label Object

| Summary | Type | Description |
|---------|------|-------------|
| Label Id | int32 | The id of the label |
| Label Name | string | The name of the label |
| Color | int32 | The color of the label (a number between 0 and 7, or between 0 and 12 for premium users) |
| Order | int32 | Label’s order in the label list (a number, where the smallest value is top-level) |
| IsDeleted | int32 | Whether the label is marked as deleted (where 1 is true and 0 is false) |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


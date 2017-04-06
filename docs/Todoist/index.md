<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Todoist

Todoist is an online task management app and todo list. With Todoist, users can organize, schedule, maintain and prioritize personal tasks.


# Actions

## List projects
List projects

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Projects | Array of [Project](#project) | A collection of projects | projects |

___

## List tasks
List tasks

**Operation Id:** ListItems

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Item](#item) | A collection of items | items |

___

## List tasks by project
List tasks by project

**Operation Id:** ListItemsByProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | string | Project Id | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Item](#item) | A collection of items | items |

___

## List labels
List labels

**Operation Id:** ListLabels

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Labels | Array of [Label](#label) | A collection of labels | labels |

___

## Create a task
Create a task

**Operation Id:** CreateItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | string | Project Id | true |
| Task Title | string | Task title | true |
| Task Due Date | date-time | Task Due Date (e.g mm-dd-yyyy, Today @ 11am, mm/dd/yyyy) | false |
| Task Priority | string | Number between 1 and 4 (4 for very urgent and 1 for natural) | false |
| Indent | string | Number between 1 and 4, where 1 is top-level) | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Project Id | string | Project Id | true |
| Task Id | string | Task Id | true |
| Task Title | string | Task Title | false |
| Task Priority | string | Number between 1 and 4, 4 for very urgent and 1 for natural | false |
| Indent | string | Number between 1 and 4, where 1 is top-level) | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Project Name | string | Project Name | true |
| Project Color | string | Number between 0 and 11, or 0 and 21 for premium users | false |
| Indent | string | Number between 1 and 4, where 1 is top-level) | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Project Id | string | Project Id | true |
| Project Name | string | Name of project | false |
| Project Color | string | Number between 0 and 11, or 0 and 21 for premium users | false |
| Indent | string | Number between 1 and 4, where 1 is top-level) | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Project Id | string | Project Id | true |
| Email | string | Email address of user the project is being shared | true |

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
| Name | string | Label name | true |
| Label Color | string | Number between 0 and 11, or 0 and 21 for premium users | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Label Id | string | Label Id | true |
| Label Name | string | Label name | false |
| Color | string | Number between 0 and 11, or 0 and 21 for premium users | false |
| Order | string | Number, where the smallest value is top-level | false |

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
| Project Id | string | Project Id | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Item](#item) | A collection of items | items |

___

## When a task is created
Trigers a new flow when a task is created

**Operation Id:** OnItemCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | string | Project Id | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Items | Array of [Item](#item) | A collection of items | items |

___


## Objects

### Project
A Todoist Project Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | int32 | Id of Project | id |
| Project Name | string | Name of Project | name |
| Color | int32 | Color of Project | color |
| Is Project Shared | boolean | Is Project Shared | shared |
| Is Project Deleted | int32 | Is Project Deleted | is_deleted |
| Is Project Archived | int32 | Is Project Archived | is_archived |

### Item
A Todoist Item Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task Title | string | The title of the task | content |
| Task Id | int32 | The id of the task | id |
| Task Owner | int32 | The owner of the task | user_id |
| Project Id | int32 | Project where task resides | project_id |
| Date Language | string | The language of the date (valid languages are: en, da, pl, zh, ko, de, pt, ja, it, fr, sv, ru, es, nl). | date_lang |
| Task Due Date | date-time | The date of the task in the format Mon 07 Aug 2006 12:34:56 +0000 | due_date_utc |
| Indent | int32 | The indent of the task (a number between 1 and 4, where 1 is top-level) | indent |
| Task Priority | int32 | The priority of the task (a number between 1 and 4, 4 for very urgent and 1 for natural) | priority |
| Order | int32 | The order of the task inside a project (the smallest value would place the task at the top) | item_order |
| Assigner Id | int32 | The id of the user who assigns the current task. For shared projects only. | assigned_by_uid |
| Assignee Id | int32 | The id of user who is responsible for accomplishing the current task. For shared projects only. | responsible_uid |
| IsTaskCompleted | int32 | Whether the task is marked as completed (where 1 is true and 0 is false) | checked |
| IsTaskArchived | int32 | Whether the task is marked as archived (where 1 is true and 0 is false) | is_archived |
| Date Created | date-time | The date when the task was created | date_added |

### Label
A Todoist Label Object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Label Id | int32 | The id of the label | id |
| Label Name | string | The name of the label | name |
| Color | int32 | The color of the label (a number between 0 and 7, or between 0 and 12 for premium users) | color |
| Order | int32 | Label’s order in the label list (a number, where the smallest value is top-level) | item_order |
| IsDeleted | int32 | Whether the label is marked as deleted (where 1 is true and 0 is false) | is_deleted |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


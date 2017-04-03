<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# ProjectOnline (Preview)

v1.0

Project Online is a flexible online solution for project portfolio management (PPM) and everyday work from Microsoft. Delivered through Office 365, Project Online enables organizations to get started quickly with powerful project management capabilities to plan, prioritize, and manage projects and project portfolio investments-from almost anywhere on almost any device.


# Actions

## List projects
Lists the projects in your project online site

**Operation Id:** ListProjects

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProjectsWrapper](#projectswrapper) | object | Project online list projects response model |

___

## Creates new project
Creates a new project in your project online site

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Project name | string | Name of the new project to create | true |
| Project description | string | Description of the new project to create | false |
| Project start date | date-time | Start date of the new project | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Project](#project) | object | Project Online Project Model |

___

## Creates new task
Creates a new task in you project

**Operation Id:** CreateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Project id | string | Unique id of the project to add the task to | true |
| Task name | string | Name of the new task to create | true |
| Task notes | string | Notes to put on the new task | false |
| Task start date | date-time | Start date of the task | false |
| Task duration | string | Duration of the task. For example (1h, 2d, or 3w) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewTask](#newtask) | object | New project online server task |

___

## Create new resource
Creates an Enterprise Resources in your project online site

**Operation Id:** CreateResource

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Resource name | string | The name of the new resource to create | true |
| Is resource in budget | boolean | Is resource accounted for in the budget | false |
| Is resource generic | boolean | Is resource generic | false |
| Is resource inactive | boolean | Is resource inactive | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [EnterpriseResource](#enterpriseresource) | object | Project Online Enterprise Resource Model |

___

## Lists tasks
Lists the published tasks in a project

**Operation Id:** ListTasks

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Project id | string | Unique id of the project to fetch tasks | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TasksWrapper](#taskswrapper) | object | Project online list tasks response model |

___

## Checkout project
Checks out an existing project in your site

**Operation Id:** CheckoutProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Project id | string | Unique id of the project to checkout | true |

#### Returns
This operation does not return anything.

___

## Checkin and publish project
Check in and publish and existing project in your site

**Operation Id:** PublishProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |
| Project id | string | Unique id of the project to checkin | true |

#### Returns
This operation does not return anything.

___

# Triggers

## When a new project is created
Triggers a flow whenever a new project is created

**Operation Id:** OnNewProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TriggerProjectsWrapper](#triggerprojectswrapper) | object | Project online on new project response model |

___

## When a project is published
Triggers a flow whenever a project is published

**Operation Id:** OnProjectPublished

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TriggerProjectsWrapper](#triggerprojectswrapper) | object | Project online on new project response model |

___

## When a new resource is created
Triggers a new flow when a new resource is created

**Operation Id:** OnNewResource

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TriggerResourcesWrapper](#triggerresourceswrapper) | object | Project online on new resource response model |

___

## When a new task is created
Triggers a flow when a new task is created

**Operation Id:** OnNewTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | Root site url of your project site (Example: https://sampletenant.sharepoint.com/teams/sampleteam ) | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TriggerTasksWrapper](#triggertaskswrapper) | object | Project online on new task response model |

___


## Objects

### TriggerProjectsWrapper
Project online on new project response model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Returned projects | Array of [TriggerProject](#triggerproject) | The list of trigger projects returned | value |

### TriggerProject
Project Online Project Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project start date | date-time | Approved project start date | ProjectStartDate |
| Project end date | date-time | Approved project end date | ProjectFinishDate |
| Created date | date-time | Created date of the project | ProjectCreatedDate |
| Project id | string | Id of the project | ProjectId |
| Last modified date | date-time | Last date the project is saved | ProjectModifiedDate |
| Project type | int32 | The type of the project | ProjectType |
| Project name | string | The name of the project | ProjectName |
| Project last published date | date-time | Last published date of the project | ProjectLastPublishedDate |

### TriggerResourcesWrapper
Project online on new resource response model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Returned resources | Array of [TriggerResource](#triggerresource) | The list of trigger resources returned | value |

### TriggerResource
Resource Online resource model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Resource id | string | Id of the new resource | ResourceId |
| Resource base calendar | string | Base calendar type of the resource | ResourceBaseCalendar |
| Resource booking type | int32 | Booking type of the resource | ResourceBookingType |
| Can resource level | boolean | Can the resource level | ResourceCanLevel |
| Resource cost per use | double | Cost per use of the resource | ResourceCostPerUse |
| Resource create date | date-time | Create date of the resource | ResourceCreatedDate |
| Reource earliest available from | date-time | Earliest availability date of the resource | ResourceEarliestAvailableFrom |
| Resource email | string | Email address of the resource | ResourceEmail |
| Resource initials | string | Initals of the resource | ResourceInitials |
| Is resource activew | boolean | Is the new resource active | ResourceIsActive |
| Is resource generic | boolean | Is the new resource generic | ResourceIsGeneric |
| Resource latest available to | date-time | Lastest date for which the resource is available | ResourceLatestAvailableTo |
| Resource last modified date | date-time | Last modification date of the resource | ResourceModifiedDate |
| Resource name | string | Name of the resource | ResourceName |
| Resource status name | string | Status name of the resource | ResourceStatsuName |
| Resource type | int32 | Type of resource | ResourceType |
| Resource type description | string | Description for the type of resource | TypeDescription |
| Resource type name | string | Type name of the reource | TypeName |

### TriggerTasksWrapper
Project online on new task response model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Returned tasks | Array of [TriggerTask](#triggertask) | The list of trigger tasks returned | value |

### TriggerTask
Task Online Task Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project id | string | Id of the project which the task is created in | ProjectId |
| Task id | string | Id of the new task | TaskId |
| Project name | string | Name of the project which the task is created in | ProjectName |
| Task name | string | Name of the new task | TaskName |
| Task created date | date-time | Created date of the new task | TaskCreatedDate |
| Task last modified date | date-time | Last modified date of the new task | TaskModifieddate |
| Task start date | date-time | Starting date of the new task | TaskStartDate |
| Task finish date | date-time | Finishing date of the new task | TaskFinishDate |
| Task summary | int32 | Priority of the new task | TaskPriority |
| Task is active | boolean | Whether the task is still active | TaskIsActive |

### NewProject
New project online server project

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project name | string | Name of the new project to create | Name |
| Project description | string | Description of the new project to create | Description |
| Project start date | date-time | Start date of the new project | Start |

### Project
Project Online Project Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Approved start date | date-time | Approved project start time | ApprovedStart |
| Approved end date | date-time | Approved project end time | ApprovedEnd |
| Checked out date | date-time | Time which the project is checked out | CheckedOutDate |
| Checkout description | string | Description which the project is checked out with | CheckOutDescription |
| Checkout id | string | Id of the project checkout | CheckOutId |
| Created date | date-time | Created date of the project | CreatedDate |
| Project id | string | Id of the project | Id |
| Is checked out | boolean | True if the project is currently checked out | IsCheckedOut |
| Last published date | date-time | Last published date of the project | LastPublishedDate |
| Last saved date | date-time | Last date the project is saved | LastSavedDate |
| Optimizer decision | int32 | Project optimizer decision number | OptimizerDecision |
| Planner decision | int32 | Project planner decision number | PlannerDecision |
| Project type | int32 | The type of the project | ProjectType |
| Project name | string | The name of the project | Name |
| Project identifier | string | Project identifier | ProjectIdentifier |
| Win proj version | string | Project version | WinprojVersion |

### ProjectsWrapper
Project online list projects response model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Returned projects | Array of [Project](#project) | The list of projects returned | value |

### NewTask
New project online server task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [TaskParameters](#taskparameters) | object | New project online server task | parameters |

### TaskParameters
New project online server task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task name | string | Name of the new task to create | Name |
| Task notes | string | Notes to put on the new task | Notes |
| Task start date | date-time | Start date of the task | Start |
| Task duration | string | Duration of the task. For example (1h, 2d, or 3w) | Duration |

### NewResource
A new project online server resource

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Resource name | string | The name of the new resource to create | Name |
| Is resource in budget | boolean | Is resource accounted for in the budget | IsBudget |
| Is resource generic | boolean | Is resource generic | IsGeneric |
| Is resource inactive | boolean | Is resource inactive | IsInactive |

### EnterpriseResource
Project Online Enterprise Resource Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Can resource level | boolean | Can resource level | CanLevel |
| Resource code | string | Resource code | Code |
| Resource cost accrual | int32 | Resource cost accrual | CostAccrual |
| Resource cost center | string | Resource cost center | CostCenter |
| Resource created time | date-time | Resource created time | Created |
| Default booking type | int32 | Resource default booking type | DefaultBookingType |
| Email | string | Resource email address | Email |
| External id | string | Resource external id | ExternalId |
| Resource group | string | Group which resource belongs in | Group |
| Hire date | date-time | Hired date of the resource | HireDate |
| Resource id | string | Resource id | Id |
| Resouce initials | string | Resource initials | Initials |
| Is resource active | boolean | Is resource active | IsActive |
| Is budget | boolean | Is resource cost budgeted | IsBudget |
| Is checked out | boolean | Is resource checked out | IsCheckedOut |
| Is generic | boolean | Is resource generic | IsGeneric |
| Is team | boolean | Is resource part of the team | IsTeam |
| Material label | string | Resource material label | MaterialLabel |
| Last modified | date-time | Time which the reource is last modified | Modified |
| Resource name | string | Resource name | Name |
| Resource phonetics | string | Phonetic pronounciation of the resource | Phonetics |
| Resource type | int32 | Resource type | ResourceType |
| Termination date | date-time | Resource termination date | TerminationDate |

### TasksWrapper
Project online list tasks response model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Returned projects | Array of [Task](#task) | The list of tasks returned | value |

### Task
Project online server task

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Task created date | date-time | The created date of the task | Created |
| Task last modified date | date-time | The last modified date of the task | Modified |
| Task start date | date-time | The start date of the task | Start |
| Task finish date | date-time | The finished date of the task | Finish |
| Task name | string | The name of the task | Name |
| Task id | string | The id of the task | Id |
| Task priority | int32 | The priority level of the task | Priority |
| Task percent complete | int32 | Percent of task complete | PercentComplete |
| Task notes | string | Description notes about the task | Notes |
| Task contact | string | Contact address for the task | Contact |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# JIRA (Preview)

JIRA is a software development tool for agile teams to plan, track, and release world-class software. Connecting JIRA issues to the rest of your tools helps break down barriers and unleash the potential of your team.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| JIRA instance | The url where your JIRA instance is hosted (must support https)  | string |
| Username | Your JIRA username | string |
| Password | Your JIRA password | securestring |


# Actions

## Create a new issue
Create a new issue.

**Operation Id:** CreateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string |  | true |
| Issue Type Id | string |  | true |
| Summary | string |  | true |
| Reporter Username | string |  | false |
| Description | string | A detailed description of the issue | false |
| Priority Id | string |  | false |
| Labels | string | Enter a comma separated list of lables | false |
| Assignee Username | string |  | false |
| Parent Issue Id | string | Set the parent for a sub-task | false |
| Epic Name (epic only) | string | Required epic name for epic issue type | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateIssueResponse](#createissueresponse) | object |  |

___

## Get issue by Key
Retrieve the issue object for a given issue Key.

**Operation Id:** GetIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue Key | string | Unique Key for the issue | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FullIssue](#fullissue) | object |  |

___

## Update issue
Update the issue object.

**Operation Id:** UpdateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue Key | string | Unique Key for the issue | true |
| Summary | string |  | false |
| Description | string | A detailed description of the issue | false |
| Reporter Username | string |  | false |
| Priority Id | string |  | false |
| Labels | string | Enter a comma separated list of lables | false |
| Assignee Username | string |  | false |
| Parent Issue Id | string | Set the parent for a sub-task | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

## Add comment
Add a comment to an issue.

**Operation Id:** AddComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Issue Key | string | Unique Key of the issue to add a comment to | true |
| Comment Body | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CommentResponse](#commentresponse) | object |  |

___

## Get projects
Returns a list of projects for the JIRA instance.

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProjectArray](#projectarray) | array |  |

___

## Create a new project
Creates a new JIRA project.

**Operation Id:** CreateProject

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Key | string | The unique key, starts with a capital letter. | true |
| Name | string |  | true |
| Type | string |  | true |
| Lead | string | The username of the project lead. | true |
| Project Description | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateProjectResponse](#createprojectresponse) | object |  |

___

## List users by project
Retrieves a list of all users associated with a project.

**Operation Id:** ListProjectUsers

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project key | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserList](#userlist) | array |  |

___

# Triggers

## When a new issue is created
Triggers when a new issue is added to the given project.

**Operation Id:** OnNewIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Unique key of the project to look for new issues | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FullIssueArray](#fullissuearray) | array |  |

___

## When an issue is updated
Triggers when an issue is updated.

**Operation Id:** OnUpdateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project | string | Unique key of the project to look for updated issues | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FullIssueArray](#fullissuearray) | array |  |

___

## When a new issue is returned by a JQL query
Triggers when a new issue appears in the latest 100 results of a JQL query.

**Operation Id:** OnNewIssueJQL

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| JQL Query | string | Query to use | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FullIssueArray](#fullissuearray) | array |  |

___


## Objects

### CreateProjectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | int32 |  | id |
| Project Key | string |  | key |

### CreateIssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | string |  | id |
| Issue Key | string |  | key |

### Project


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | string | The unique Id of the project | id |
| Project Key | string | The unique key of the project | key |
| Project Name | string |  | name |
| Project Type Key | string | The unique key of the project type | projectTypeKey |

### ProjectArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | string | The unique Id of the project | id |
| Project Key | string | The unique key of the project | key |
| Project Name | string |  | name |
| Project Type Key | string | The unique key of the project type | projectTypeKey |

### PartialIssue


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | string | The unique Id of the Issue | id |
| Issue Key | string | The unique key of the issue | key |
| Summary | string |  | fields.summary |
| Isue Type Id | string |  | fields.issuetype.id |
| Issue Type Description | string |  | fields.issuetype.description |
| Issue Type Icon Url | string |  | fields.issuetype.iconUrl |
| Issue Type Name | string |  | fields.issuetype.name |
| Status Description | string |  | fields.status.description |
| Status Icon Url | string |  | fields.status.iconUrl |
| Status Name | string |  | fields.status.name |
| Status Id | string |  | fields.status.id |
| Status Category Id | int32 |  | fields.status.statusCategory.id |
| Status Category Key | string |  | fields.status.statusCategory.key |
| Status Category Color Name | string |  | fields.status.statusCategory.colorName |
| Status Category Name | string |  | fields.status.statusCategory.name |
| Priority Icon Url | string |  | fields.priority.iconUrl |
| Priority Name | string |  | fields.priority.name |
| Priority Id | string |  | fields.priority.id |

### FullIssue


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | string | The unique Id of the Issue | id |
| Issue Key | string | The unique key of the issue | key |
| Issue URL | string | Browse to the issue using this URL | self |
| Isue Type Id | string |  | fields.issuetype.id |
| Issue Type Description | string |  | fields.issuetype.description |
| Issue Type Icon Url | string |  | fields.issuetype.iconUrl |
| Issue Type Name | string |  | fields.issuetype.name |
| Time Spent | string | The time spent on this issue | fields.timespent |
| Project Id | string | The unique Id of the project | fields.project.id |
| Project Key | string | The unique key of the project | fields.project.key |
| Project Name | string |  | fields.project.name |
| Project Type Key | string | The unique key of the project type | fields.project.projectTypeKey |
| Aggregate Time Spent | string | The aggregrate time spent on sub-tasks | fields.aggregatetimespent |
| Resolution | string |  | fields.resolution |
| Resolution Date | date-time |  | fields.resolutiondate |
| Work Ratio | int32 | The percentage of work logged vs the issue estimate | fields.workratio |
| Created Date | date-time |  | fields.created |
| Priority Icon Url | string |  | fields.priority.iconUrl |
| Priority Name | string |  | fields.priority.name |
| Priority Id | string |  | fields.priority.id |
| Time Estimate | int32 | Time rematining extimated time in seconds | fields.timeestimate |
| Original Aggregate Time Estimate | string | The original sum of all sub-task time estimates in seconds | fields.aggregatetimeoriginalestimate |
| Assignee Name | string |  | fields.assignee.name |
| Assignee Key | string |  | fields.assignee.key |
| Assignee Email | string |  | fields.assignee.emailAddress |
| Assignee Display Name | string |  | fields.assignee.displayName |
| Updated Time | date-time |  | fields.updated |
| Status Description | string |  | fields.status.description |
| Status Icon Url | string |  | fields.status.iconUrl |
| Status Name | string |  | fields.status.name |
| Status Id | string |  | fields.status.id |
| Status Category Id | int32 |  | fields.status.statusCategory.id |
| Status Category Key | string |  | fields.status.statusCategory.key |
| Status Category Color Name | string |  | fields.status.statusCategory.colorName |
| Status Category Name | string |  | fields.status.statusCategory.name |
| Original Time Estimate | string | The originaltime estimate in seconds | fields.timeoriginalestimate |
| Description | string |  | fields.description |
| Aggregate Time Estimate | int32 | Time sum of all sub-tasks remaining extimated time in seconds | fields.aggregatetimeestimate |
| Summary | string |  | fields.summary |
| Creator Name | string |  | fields.creator.name |
| Creator Key | string |  | fields.creator.key |
| Creator Email | string |  | fields.creator.emailAddress |
| Creator Display Name | string |  | fields.creator.displayName |
| Reporter Name | string |  | fields.reporter.name |
| Reporter Key | string |  | fields.reporter.key |
| Reporter Email | string |  | fields.reporter.emailAddress |
| Reporter Display Name | string |  | fields.reporter.displayName |
| Aggregrate Progress Completed | int32 | The total progress completed of all sub-tasks in seconds | fields.aggregateprogress.progress |
| Aggregate Estimated Effort | int32 | The total sum of all estimated sub-task effort | fields.aggregateprogress.total |
| Aggregate Progress Percent | int32 | The percent of agregate completed progress in relation to estimated effort | fields.aggregateprogress.percent |
| Due Date | date-time |  | fields.duedate |
| Progress Completed | int32 | The progress complete in seconds | fields.progress.progress |
| Estimated Effort | int32 | The estimated effort | fields.progress.total |
| Progress Percent | int32 | The percent of completed progress in relation to estimated effort | fields.progress.percent |
| Epic Name (epic only) | string | Required epic name for epic issue type | fields.customfield_10119 |

### FullIssueArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | string | The unique Id of the Issue | id |
| Issue Key | string | The unique key of the issue | key |
| Issue URL | string | Browse to the issue using this URL | self |
| Isue Type Id | string |  | fields.issuetype.id |
| Issue Type Description | string |  | fields.issuetype.description |
| Issue Type Icon Url | string |  | fields.issuetype.iconUrl |
| Issue Type Name | string |  | fields.issuetype.name |
| Time Spent | string | The time spent on this issue | fields.timespent |
| Project Id | string | The unique Id of the project | fields.project.id |
| Project Key | string | The unique key of the project | fields.project.key |
| Project Name | string |  | fields.project.name |
| Project Type Key | string | The unique key of the project type | fields.project.projectTypeKey |
| Aggregate Time Spent | string | The aggregrate time spent on sub-tasks | fields.aggregatetimespent |
| Resolution | string |  | fields.resolution |
| Resolution Date | date-time |  | fields.resolutiondate |
| Work Ratio | int32 | The percentage of work logged vs the issue estimate | fields.workratio |
| Created Date | date-time |  | fields.created |
| Priority Icon Url | string |  | fields.priority.iconUrl |
| Priority Name | string |  | fields.priority.name |
| Priority Id | string |  | fields.priority.id |
| Time Estimate | int32 | Time rematining extimated time in seconds | fields.timeestimate |
| Original Aggregate Time Estimate | string | The original sum of all sub-task time estimates in seconds | fields.aggregatetimeoriginalestimate |
| Assignee Name | string |  | fields.assignee.name |
| Assignee Key | string |  | fields.assignee.key |
| Assignee Email | string |  | fields.assignee.emailAddress |
| Assignee Display Name | string |  | fields.assignee.displayName |
| Updated Time | date-time |  | fields.updated |
| Status Description | string |  | fields.status.description |
| Status Icon Url | string |  | fields.status.iconUrl |
| Status Name | string |  | fields.status.name |
| Status Id | string |  | fields.status.id |
| Status Category Id | int32 |  | fields.status.statusCategory.id |
| Status Category Key | string |  | fields.status.statusCategory.key |
| Status Category Color Name | string |  | fields.status.statusCategory.colorName |
| Status Category Name | string |  | fields.status.statusCategory.name |
| Original Time Estimate | string | The originaltime estimate in seconds | fields.timeoriginalestimate |
| Description | string |  | fields.description |
| Aggregate Time Estimate | int32 | Time sum of all sub-tasks remaining extimated time in seconds | fields.aggregatetimeestimate |
| Summary | string |  | fields.summary |
| Creator Name | string |  | fields.creator.name |
| Creator Key | string |  | fields.creator.key |
| Creator Email | string |  | fields.creator.emailAddress |
| Creator Display Name | string |  | fields.creator.displayName |
| Reporter Name | string |  | fields.reporter.name |
| Reporter Key | string |  | fields.reporter.key |
| Reporter Email | string |  | fields.reporter.emailAddress |
| Reporter Display Name | string |  | fields.reporter.displayName |
| Aggregrate Progress Completed | int32 | The total progress completed of all sub-tasks in seconds | fields.aggregateprogress.progress |
| Aggregate Estimated Effort | int32 | The total sum of all estimated sub-task effort | fields.aggregateprogress.total |
| Aggregate Progress Percent | int32 | The percent of agregate completed progress in relation to estimated effort | fields.aggregateprogress.percent |
| Due Date | date-time |  | fields.duedate |
| Progress Completed | int32 | The progress complete in seconds | fields.progress.progress |
| Estimated Effort | int32 | The estimated effort | fields.progress.total |
| Progress Percent | int32 | The percent of completed progress in relation to estimated effort | fields.progress.percent |
| Epic Name (epic only) | string | Required epic name for epic issue type | fields.customfield_10119 |

### Creator


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Creator Name | string |  | name |
| Creator Key | string |  | key |
| Creator Email | string |  | emailAddress |
| Creator Display Name | string |  | displayName |

### Assignee


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Assignee Name | string |  | name |
| Assignee Key | string |  | key |
| Assignee Email | string |  | emailAddress |
| Assignee Display Name | string |  | displayName |

### User


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string |  | name |
| Key | string |  | key |
| Email | string |  | emailAddress |
| displayName | string |  | displayName |

### UserList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string |  | name |
| Key | string |  | key |
| Email | string |  | emailAddress |
| displayName | string |  | displayName |

### Reporter


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Reporter Name | string |  | name |
| Reporter Key | string |  | key |
| Reporter Email | string |  | emailAddress |
| Reporter Display Name | string |  | displayName |

### IssueTypes


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| name | string |  | name |
| id | string |  | id |

### CreateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Type Id | string |  | fields.issuetype.id |
| Summary | string |  | fields.summary |
| Reporter Username | string |  | fields.reporter.name |
| Description | string | A detailed description of the issue | fields.description |
| Priority Id | string |  | fields.priority.id |
| Labels | string | Enter a comma separated list of lables | fields.labels |
| Assignee Username | string |  | fields.assignee.name |
| Parent Issue Id | string | Set the parent for a sub-task | fields.parent.id |
| Epic Name (epic only) | string | Required epic name for epic issue type | fields.customfield_10119 |

### UpdateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Summary | string |  | fields.summary |
| Description | string | A detailed description of the issue | fields.description |
| Reporter Username | string |  | fields.reporter.name |
| Priority Id | string |  | fields.priority.id |
| Labels | string | Enter a comma separated list of lables | fields.labels |
| Assignee Username | string |  | fields.assignee.name |
| Parent Issue Id | string | Set the parent for a sub-task | fields.parent.id |

### StatusList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Status Id | string |  | id |
| Status Name | string |  | name |

### PriorityList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| name | string |  | name |
| id | string |  | id |

### Comment


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comment Body | string |  | body |

### CommentResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comment Id | string |  | id |
| Comment Body | string |  | body |
| Created Date | date-time |  | created |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |


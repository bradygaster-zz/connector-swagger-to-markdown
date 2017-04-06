<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Visual Studio Team Services (Preview)

Visual Studio Team Services provides services for teams to share code, track work, and ship software - for any language, all in a single package. It&#x27;s the perfect complement to your IDE.


# Actions

## Queue a new build
Create a build, based on an existing build definition, and add it to the build queue.

**Operation Id:** QueueNewBuild

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Build definition Id | string | The identifier of the build definition to use | true |
| Source branch | string | The build&#x27;s source branch | false |
| Parameters | string | A JSON dictionary of optional build parameters. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BuildResult](#buildresult) | object | The result of a build |

___

## Create a new work item
Create a work item, with provided attributes

**Operation Id:** CreateWorkItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Type | string | Type of this work item | true |
| Title | string | The title of the work item | true |
| Description | string | Description of the work item | false |
| Priority | int32 | Priority of the work item | false |
| Iteration path | string | Iteration path of the work item | false |
| Area path | string | Area path of the work item | false |
| Link URL | string | URL of the work item to link with this one | false |
| Link type | string | Link Type | false |
| Link comment | string | Comment for the link | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WorkItemResponse](#workitemresponse) | object | A work item |

___

## Update a work item
Update an existing work item by Id

**Operation Id:** UpdateWorkItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Work Item Id | string | Id of the work item to update | true |
| Title | string | The title of the work item | false |
| Description | string | Description of the work item | false |
| Priority | int32 | Priority of the work item | false |
| Iteration path | string | Iteration path of the work item | false |
| Area path | string | Area path of the work item | false |
| Link URL | string | URL of the work item to link with this one | false |
| Link type | string | Link Type | false |
| Link comment | string | Comment for the link | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WorkItemResponse](#workitemresponse) | object | A work item |

___

# Triggers

## When code is checked in (TFVC)
Triggers a flow when code is checked in to a Team Foundation Version Control project.

**Operation Id:** OnTfvcCheckIn

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Team to lookup author from | string | A team from which to select an author | false |
| Team member | string | The name of the team member who authored the check in | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[TfvcChangeset\]](#vstslisttfvcchangeset) | object | A list of VSTS models |

___

## When code is pushed (Git)
Triggers a flow when code is pushed to a Git repository.

**Operation Id:** OnGitPush

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Repository | string | The repository to watch for changes | true |
| Ref name | string | A Git ref - such as a branch or tag - to watch for changes | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[GitPush\]](#vstslistgitpush) | object | A list of VSTS models |

___

## When a build completes
Triggers a flow when a build completes

**Operation Id:** OnBuildCompleted

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Filter by result | string | Only trigger on a specific build result | false |
| Filter by definition Id | string | Only trigger when these definitions are used | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[BuildResult\]](#vstslistbuildresult) | object | A list of VSTS models |

___

## When a work item is assigned
Triggers a flow when a work item which matches provided criteria is assigned to the given user

**Operation Id:** OnWorkItemAssigned

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Team to lookup member from | string | A team from which to select an assignee | false |
| Assigned To | string | The name of the team member who currently owns the work item | true |
| Type | string | The name of the work item type | false |
| Area Path | string | Groups work items into product feature or team areas | false |
| Iteration Path | string | Groups work items by named sprints or time periods | false |
| Priority | string | A subjective rating of the bug, issue, task, or test case as it relates to the business | false |
| Team Project | string | The team project to which this work item belongs | false |
| Created By | string | The name of the team member who created the work item | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[WorkItemResponse\]](#vstslistworkitemresponse) | object | A list of VSTS models |

___

## When a work item is updated
Triggers a flow when a work item which matches provided criteria is updated

**Operation Id:** OnWorkItemUpdated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Team to lookup member from | string | A team from which to select an assignee | false |
| Assigned To | string | The name of the team member who currently owns the work item | false |
| Type | string | The name of the work item type | false |
| Area Path | string | Groups work items into product feature or team areas | false |
| Iteration Path | string | Groups work items by named sprints or time periods | false |
| Priority | string | A subjective rating of the bug, issue, task, or test case as it relates to the business | false |
| Team Project | string | The team project to which this work item belongs | false |
| Created By | string | The name of the team member who created the work item | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[WorkItemResponse\]](#vstslistworkitemresponse) | object | A list of VSTS models |

___

## When a work item is created
Triggers a flow when a work item which matches provided criteria is created

**Operation Id:** OnWorkItemCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Choose a VSTS account | true |
| Project name | string | Choose a project within the account | true |
| Team to lookup member from | string | A team from which to select an assignee | false |
| Assigned To | string | The name of the team member who currently owns the work item | false |
| Type | string | The name of the work item type | false |
| Area Path | string | Groups work items into product feature or team areas | false |
| Iteration Path | string | Groups work items by named sprints or time periods | false |
| Priority | string | A subjective rating of the bug, issue, task, or test case as it relates to the business | false |
| Team Project | string | The team project to which this work item belongs | false |
| Created By | string | The name of the team member who created the work item | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VstsList\[WorkItemResponse\]](#vstslistworkitemresponse) | object | A list of VSTS models |

___


## Objects

### VstsList\[Account\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [Account](#account) | The VSTS Models | value |

### Account
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Account Id | string | Account Id | accountId |
| Account URI | string | Account URI | accountUri |
| Account name | string | Account name | accountName |
| Organization name | string | Organization name | organizationName |
| Account type | string | Account type | accountType |
| Account owner | string | Account owner | accountOwner |

### VstsList\[Project\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [Project](#project) | The VSTS Models | value |

### Project
A VSTS Project

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Project Id | string | The project&#x27;s unique identifier | id |
| Project name | string | The project&#x27;s name | name |
| Project URL | string | The project&#x27;s API URL. | url |

### VstsList\[BuildDefinition\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [BuildDefinition](#builddefinition) | The VSTS Models | value |

### BuildDefinition
A VSTS Build definition

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Type | string | Build Definition Type | type |
| Revision | int32 | Build Definition Revision | revision |
| Id | int32 | Build Definition Id | id |
| Name | string | Build Definition Name | name |
| [Links](#links) | object |  | _links |

### Links


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [WebLinks](#weblinks) | object | Links to human-readable web pages | web |

### WebLinks
Links to human-readable web pages

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| HTML link | string | The web URL of build details | href |

### VstsList\[GitRepository\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [GitRepository](#gitrepository) | The VSTS Models | value |

### GitRepository
A Git repository

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Repository Id | string | Repository unique Id | id |
| Repository name | string | The name of this repository | name |
| Repository remote URL | string | The URL via which git can sync with this repository | remoteUrl |

### VstsList\[GitRef\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [GitRef](#gitref) | The VSTS Models | value |

### GitRef
A Git repository

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Ref Id | string | Repository unique Id | objectId |
| Ref name | string | The name of this repository | name |

### VstsList\[Team\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [Team](#team) | The VSTS Models | value |

### Team
A project team

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Team Id | string | Team Id | id |
| Team name | string | Team name | name |
| Team URI | string | Account URI | url |
| Team description | string | Team description | description |
| Team URI | string | Identities URI | identityUrl |

### VstsList\[TeamMember\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [TeamMember](#teammember) | The VSTS Models | value |

### TeamMember
A projecct team

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Team member Id | string | Team member Id | id |
| Display name | string | Display name | displayName |
| Unique name | string | Username | uniqueName |
| Member URI | string | Member URI | url |
| Image URI | string | Image URI | imageUrl |

### QueueBuildRequest
A list of build definitions

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source branch | string | The build&#x27;s source branch | sourceBranch |
| Parameters | string | A JSON dictionary of optional build parameters. | parameters |

### BuildResult
The result of a build

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Links](#links) | object |  | _links |
| Build Id | int32 | The build&#x27;s unique identifier | id |
| Build number | string | The build number | buildNumber |
| Status | string | The build&#x27;s status | status |
| Result | string | The build result | result |
| Queue time | string | The time the build was queued | queueTime |
| Start time | string | The time the build started | startTime |
| Finish time | string | The time the build finished | finishTime |
| [BuildResultDefinition](#buildresultdefinition) | object | The build definition with whicn the build was started | definition |
| Source branch | string | The source control branch the build used | sourceBranch |
| Source version | string | The source control version the build used | sourceVersion |
| Priority | string | The priority of the build | priority |
| Reason | string | The reason for the build | reason |
| [BuildRequestUser](#buildrequestuser) | object | The user for whom the build was requested | requestedFor |
| Parameters | string | Parameters passed to the build, if any. | parameters |

### BuildResultDefinition
The build definition with whicn the build was started

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Build definition Id | int32 | The identifier of the build definiton | id |
| Build definition name | string | The name of the build definition | name |

### BuildRequestUser
The user for whom the build was requested

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Requested for | string | The unique name of the user the build was requested for | uniqueName |

### CreateWorkItemRequest
A work item

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the work item | title |
| Description | string | Description of the work item | description |
| Priority | int32 | Priority of the work item | priority |
| Iteration path | string | Iteration path of the work item | iteration |
| Area path | string | Area path of the work item | area |
| Link URL | string | URL of the work item to link with this one | linkUrl |
| Link type | string | Link Type | linkType |
| Link comment | string | Comment for the link | linkComment |

### UpdateWorkItemRequest
A work item

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the work item | title |
| Description | string | Description of the work item | description |
| Priority | int32 | Priority of the work item | priority |
| Iteration path | string | Iteration path of the work item | iteration |
| Area path | string | Area path of the work item | area |
| Link URL | string | URL of the work item to link with this one | linkUrl |
| Link type | string | Link Type | linkType |
| Link comment | string | Comment for the link | linkComment |

### WorkItemResponse
A work item

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | integer | The Id | id |
| Revision count | integer | The revision count | rev |
| URL | string | The URL | url |
| [WorkItemFields](#workitemfields) | object | Fields of the work item | fields |

### WorkItemFields
Fields of the work item

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Area path | string | Area Path | System_AreaPath |
| Team project | string | Team Project | System_TeamProject |
| Iteration path | string | Iteration Path | System_IterationPath |
| Work item type | string | Work Item Type | System_WorkItemType |
| State | string | State | System_State |
| Reason | string | Reason | System_Reason |
| Created date | string | Created Date | System_CreatedDate |
| Created by | string | Created By | System_CreatedBy |
| Changed date | string | Changed Date | System_ChangedDate |
| Changed By | string | Changed By | System_ChangedBy |
| Title | string | Title | System_Title |
| State changed date | string | State Changed Date | Microsoft_VSTS_Common_StateChangeDate |
| Priority | integer | Priority | Microsoft_VSTS_Common_Priority |
| Severity | string | Severity | Microsoft_VSTS_Common_Severity |
| Value area | string | Value Area | Microsoft_VSTS_Common_ValueArea |
| Description | string | Description | System_Description |

### VstsList\[TfvcChangeset\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [TfvcChangeset](#tfvcchangeset) | The VSTS Models | value |

### TfvcChangeset
A TFVC Changeset

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Changeset Id | int32 | Identifies this changeset | changesetId |
| [ChangesetAuthor](#changesetauthor) | object | Info regarding who created the push | author |
| [ChangesetCheckedInBy](#changesetcheckedinby) | object | Info regarding who created the push | checkedInBy |
| Created date | string | When this changeset was created | createdDate |
| Comment | string | The comment describing the changeset | comment |

### ChangesetAuthor
Info regarding who created the push

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Author name | string | The name of the user who created the push | displayName |
| Pusher unique name | string | The unique name of the user who created the push | uniqueName |

### ChangesetCheckedInBy
Info regarding who created the push

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Checked in by name | string | The name of the user who created the push | displayName |
| Checked in by unique name | string | The unique name of the user who created the push | uniqueName |

### VstsList\[GitPush\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [GitPush](#gitpush) | The VSTS Models | value |

### GitPush
A Git push

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [GitRepository](#gitrepository) | object | A Git repository | repository |
| [GitPushUser](#gitpushuser) | object | Info regarding who created the push | pushedBy |
| Push Id | int32 | Identifies this push | pushId |
| Date | string | When this push occurred | date |

### GitPushUser
Info regarding who created the push

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Pusher Id | string | Identifies who created the push | id |
| Pusher name | string | The name of the user who created the push | displayName |
| Pusher unique name | string | The unique name of the user who created the push | uniqueName |

### VstsList\[BuildResult\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [BuildResult](#buildresult) | The VSTS Models | value |

### VstsList\[WorkItemResponse\]
A list of VSTS models

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Value | Array of [WorkItemResponse](#workitemresponse) | The VSTS Models | value |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


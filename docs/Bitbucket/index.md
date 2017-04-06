<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Bitbucket (Preview)

Bitbucket is a web based hosting service for projects that use GIT revision control.


# Actions

## Create issue
This operation creates a new issue in the given repository.

**Operation Id:** CreateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| Issue Title | string |  | true |
| Description | string |  | false |
| Issue Type | string |  | true |
| Priority | string | The priority category of the issue. | true |
| Status | string |  | false |
| Component | string | Pre-defined component value. | false |
| Milestone | string | Pre-defined milestone value. | false |
| Version | string | Pre-defined version value. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IssueResponse](#issueresponse) | object |  |

___

## Get issue by id
This operation retrieves all information about the given issue. 

**Operation Id:** GetIssueById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| Issue Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IssueResponse](#issueresponse) | object |  |

___

## Approve pull request
This operation is used to approve an existing pull request.

**Operation Id:** ApprovePullRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| Pull Request Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ApprovePullRequestResponse](#approvepullrequestresponse) | object |  |

___

## Decline pull request
This operation is used to decline an existing pull request.

**Operation Id:** DeclinePullRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| Pull Request Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeclineOrMergePullRequestResponse](#declineormergepullrequestresponse) | object |  |

___

## Merge pull request
This operation can merge a given pull request.

**Operation Id:** MergePullRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| Pull Request Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeclineOrMergePullRequestResponse](#declineormergepullrequestresponse) | object |  |

___

## Get user by Id
This operation returns all information about a given user by its id.

**Operation Id:** GetUserById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| User Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserResponse](#userresponse) | object |  |

___

# Triggers

## When a repository is added
Triggers when a new repository is created for the authenticated account.

**Operation Id:** OnNewRepo

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [List_repositories_Response](#listrepositoriesresponse) | object |  |

___

## When a new issue is added
Triggers when a new issue is added to the given repository.

**Operation Id:** CreateHookIssueCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookIssueCreatedResponse](#webhookissuecreatedresponse) | object |  |

___

## When an issue is updated
Triggers when an issue is updated in the given repository.

**Operation Id:** CreateHookIssueUpdated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookIssueUpdatedResponse](#webhookissueupdatedresponse) | object |  |

___

## When a pull request is approved
Triggers when a pullreqest is approved in the specified repository.

**Operation Id:** CreateHookPullRequestApproved

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookPullRequestApprovedResponse](#webhookpullrequestapprovedresponse) | object |  |

___

## When a pull request is created
Triggers when a new pullreqest is created in the given repository.

**Operation Id:** CreateHookPullRequestCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookPullRequestCreatedResponse](#webhookpullrequestcreatedresponse) | object |  |

___

## When a pull request is declined
Triggers when an existing pullreqest is declined in the given repository.

**Operation Id:** CreateHookPullRequestDeclined

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookPullRequestDeclinedResponse](#webhookpullrequestdeclinedresponse) | object |  |

___

## When a pull request is merged
Triggers when an existing pullreqest is merged in the given repository.

**Operation Id:** CreateHookPullRequestMerged

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookPullRequestMergedResponse](#webhookpullrequestmergedresponse) | object |  |

___

## When a new commit is pushed
Triggers when a new commit is pushed to the given repository.

**Operation Id:** CreateHookRepositoryPush

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account Name | string | Atlassian account or team name | true |
| Repository Id | string | Bitbucket repository | true |
| events | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [WebhookRepositoryPushResponse](#webhookrepositorypushresponse) | object |  |

___


## Objects

### WebhookRequest


This object has no properties.

### CreateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Title | string |  | title |
| Description | string |  | content.raw |
| Issue Type | string |  | kind |
| Priority | string | The priority category of the issue. | priority |
| Status | string |  | status |
| Component | string | Pre-defined component value. | component.name |
| Milestone | string | Pre-defined milestone value. | milestone.name |
| Version | string | Pre-defined version value. | version.name |

### UpdateIssueRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue Id | integer | The Id of the issue. | issue_id |
| Title | string | The title of the issue. | title |
| text | string | The description of the issue. | content.raw |
| Kind | string | The type of issue. | kind |
| Priority | string | The priority category of the issue. | priority |
| Status | string | The status of the issue. | status |
| Component | string | A component value defined by the administrator. | component.name |
| Milestone | string | A milestone value defined by the administrator. | milestone.name |
| Version | string | A version value defined by the administrator. | version.name |

### WebhookCreatedResponse


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

### WebhookPushResponse


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

### WebhookIssueCreatedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [Issue](#issue) | object |  | issue |
| [Repository](#repository) | object |  | repository |

### WebhookIssueUpdatedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [Changes](#changes) | object |  | changes |
| [Comment](#comment) | object |  | comment |
| [Issue](#issue) | object |  | issue |
| [Repository](#repository) | object |  | repository |

### WebhookPullRequestApprovedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Approval](#approval) | object |  | approval |
| [Actor](#actor) | object |  | actor |
| [PullRequest](#pullrequest) | object |  | pullrequest |
| [Repository](#repository) | object |  | repository |

### WebhookPullRequestCreatedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [PullRequest](#pullrequest) | object |  | pullrequest |
| [Repository](#repository) | object |  | repository |

### WebhookPullRequestDeclinedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [PullRequest](#pullrequest) | object |  | pullrequest |
| [Repository](#repository) | object |  | repository |

### WebhookPullRequestMergedResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [PullRequest](#pullrequest) | object |  | pullrequest |
| [Repository](#repository) | object |  | repository |

### WebhookRepositoryPushResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Actor](#actor) | object |  | actor |
| [Push](#push) | object |  | push |
| [Repository](#repository) | object |  | repository |

### ListComponentMilestoneVersionResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| values | array of object | values | values |
| name | string | name | values.name |

### List_pull_requests_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| PR | array of object | values | values |
| Title | string | Title of the pull request. | values.title |
| Id | int32 | Id of the pull request. | values.id |

### List_repositories_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| values | array of object | values | values |
| SCM | string | Source control manager for the repository. | values.scm |
| Website | string | Url of the website if defined. | values.website |
| Has Wiki | boolean | True if the repository has a wiki. | values.has_wiki |
| Name | string | Repository&#x27;s name. | values.name |
| Fork Policy | string | Allow forks, no public forks or no forks. | values.fork_policy |
| UUID | string | Repository&#x27;s immutable id. | values.uuid |
| Language | string | Programming language used in the repository. | values.language |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | values.created_on |
| Has Issue Tracker | boolean | True if an issue tracker has been set for the repository. | values.has_issues |
| Username | string | Username of the repository&#x27;s owner. | values.owner.username |
| Name | string | Display name of the repository&#x27;s owner. | values.owner.display_name |
| UUID | string | Unique identifier of the repository&#x27;s owner. | values.owner.uuid |
| Updated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | values.updated_on |
| Size | int32 | Integer indicating size of the repository in bytes. | values.size |
| Type | string | Git or mercurial. | values.type |
| Slug | string | Slug used to identify the repository. | values.slug |
| Is private | boolean | True if the repository is private. | values.is_private |
| Description | string | The repository&#x27;s description. | values.description |

### ApprovePullRequestResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Role | string | The role of the pull request. | role |
| Type | string | The type of the pull request. | type |
| Username | string | The username of the approver. | user.username |
| Name | string | The display name of the approver. | user.display_name |
| Type | string | User or team. | user.type |
| UUID | string | The universally unique identifier of the user. | user.uuid |
| Is approved | boolean | True if the pull request is approved. | approved |

### DeclineOrMergePullRequestResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Description | string | Pull request description. | description |
| Title | string | Pull request title. | title |
| Name | string | The name of the destination branch. | destination.branch.name |
| Hash | string | The SHA1 of the destination branch head. | destination.commit.hash |
| Name | string | The name of the destination branch repository. | destination.repository.name |
| UUID | string |  The UUID of the destination branch repository. | destination.repository.uuid |
| Type | string | The type of the destination branch repository. | destination.repository.type |
| Status | string | Pull request status. | state |
| Closed By Username | string | Username of person who closed the PR. | closed_by.username |
| Closed By Name | string | Name of person who closed the PR. | closed_by.display_name |
| User Type | string | Closed by a user or team. | closed_by.type |
| UUID | string | Unique identifier of person who closed the PR. | closed_by.uuid |
| Name | string | Name of the source branch. | source.branch.name |
| Hash | string | The SHA1 of the source branch head. | source.commit.hash |
| Name | string | The name of the source branch repository. | source.repository.name |
| UUID | string |  The UUID of the source branch repository. | source.repository.uuid |
| Type | string | The type of the source branch repository. | source.repository.type |
| Name | string | The display name of the creator. | author.display_name |
| Type | string | The type of the creator. | author.type |
| Username | string | The username of the creator | author.username |
| UUID | string | The universally unique identifier of the creator. | author.uuid |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | created_on |
| Reason | string | The reason the pull request is declined (if so). | reason |
| Updated on | string | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | updated_on |
| Id | int32 | The Id of the pull request. | id |
| Task Count | int32 | Task count. | task_count |

### IssueResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Priority | string | The priority of the issue. | priority |
| Kind | string | The kind of issue. | kind |
| type | string | The type of the repository. | repository.type |
| name | string | The name of the repository. | repository.name |
| full name | string | The full name of the repository. | repository.full_name |
| UUID | string | The Universally Unique Identifier of the repository. | repository.uuid |
| Username | string | The username of the reporter. | reporter.username |
| Display name | string | The display name of the reporter. | reporter.display_name |
| Type | string | The type of the reporter. | reporter.type |
| UUID | string | The Universally Unique Identifier of the reporter. | reporter.uuid |
| Title | string | The title of the issue. | title |
| Component | string | Pre-defined component value. | component.name |
| Votes | int32 | The number of votes on the issue. | votes |
| Watches | int32 | The number of watches on the issue. | watches |
| text | string | The description of the issue. | content.raw |
| markup | string | The description markup of the issue. | content.markup |
| html | string | The description html of the issue. | content.html |
| Assignee | string | The assigned user of the issue. | assignee |
| Status | string | The status of the issue. | state |
| Version | string | A version value defined by the administrator. | version.name |
| Created on | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | created_on |
| Milestone | string | Pre-defined milestone value. | milestone.name |
| Updated on | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | updated_on |
| Type | string | The type of issue. | type |
| Issue Id | int32 | The Id of the issue. | id |

### UserResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Username | string | The username. | username |
| Type | string | The user type. | type |
| Display Name | string | The display name of the user. | display_name |
| UUID | string | The universally unique identifier of the user. | uuid |

### Actor


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Full display name of the author. | display_name |
| Type | string | User or team. | type |
| Username | string | Username or team id. | username |
| UUID | string | Unique identifier of the user or team. | uuid |

### Approval


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| date time | string | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | date |
| display name | string | The display name of the approver. | user.display_name |
| type | string | The type of the approver. | user.type |
| username | string | The username of the approver. | user.username |
| UUID | string | The universally unique identifier of the approver. | user.uuid |

### Changes


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| New Issue | string | New value for the issue field. | title.new |
| Old Issue | string | Old value for the issue field. | title.old |

### Comment


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | Id of the comment added. | id |
| Parent Id | int32 | Id of the parent comment. | parent |
| Description | string | Description of the comment. | content.raw |
| Updated Date-Time | string | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | updated_on |
| yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | date-time | created_on | created_on |

### Issue


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Issue title. | title |
| Milestone | string | Stage the issue has reached. | milestone |
| Updated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | updated_on |
| Issue Content | string | Raw issue discription. | content.raw |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | created_on |
| Component | string | User defined enumerator value. | component |
| Assignee | string | Username of the person issue has been assigned to. | assignee |
| Issue Type | string | Bug, enhancement,proposal or task. | type |
| Id | int32 | Issue identifier. | id |
| Status | string | Issue status. | state |
| Priority | string | Issue&#x27;s priority category. | priority |
| Version | string | String containing a version value. | version |
| Kind | string | Issue kind as defined in the GUI. | kind |

### PullRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | Id of the pull request. | id |
| Reviewers | array of string | List of reviewers on the pull request. | reviewers |
| Closed By | string | Username of person who closes the pull request. | closed_by |
| Description | string | Description of the pull request. | description |
| Name | string | The name of the destination branch. | destination.branch.name |
| Respository Name | string | Name of the repo where issue is created. | destination.repository.name |
| UUID | string | Repository&#x27;s unique id. | destination.repository.uuid |
| Repository Type | string | Type of the repo where issue is created. | destination.repository.type |
| Merge Commit | string | The SHA1 of the commit when the pull request merges. | merge_commit |
| Closed Branch | boolean | Closes the source branch after merge. | close_source_branch |
| Name | string | Display name of the PR author. | author.display_name |
| Type | string | User or team. | author.type |
| Username | string | Username of the PR author. | author.username |
| UUID | string | The universally unique identifier of the author. | author.uuid |
| Participant | array of object |  | participants |
| Role | string | Role of the participant. | participants.role |
| Display Name | string | Display name of the participant | participants.user.display_name |
| Type | string | User or team. | participants.user.type |
| Username | string | Participant&#x27;s username. | participants.user.username |
| uuid | string | The universally unique identifier of the user. | participants.user.uuid |
| Type | string | The type of participant. | participants.type |
| Name | string | Name of the source branch. | source.branch.name |
| Hash | string | The SHA1 of the source branch head. | source.commit.hash |
| name | string | The name of the source branch repository. | source.repository.name |
| UUID | string |  The UUID of the source branch repository. | source.repository.uuid |
| Type | string | The type of the source branch repository. | source.repository.type |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | created_on |
| Status | string | The status of the pull request. | state |
| Reason | string | Reason the pull request is declined (if so). | reason |
| Updated Date-Time | string | yyyy-MM-ddTHH:mm:ss.fff(+hh:mm or -hh:mm) | updated_on |
| Title | string | The name of the pull request. | title |

### Push


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| changes | array of object | changes | changes |
| created | boolean | Indicate whether the reference is new. | changes.created |
| type | string | type | changes.old.type |
| raw | string | raw | changes.old.target.author.raw |
| date | date-time | date | changes.old.target.date |
| message | string | message | changes.old.target.message |
| hash | string | hash | changes.old.target.hash |
| type | string | type | changes.old.target.type |
| parents | array of object | parents | changes.old.target.parents |
| type | string | type | changes.old.target.parents.type |
| href | string | href | changes.old.target.parents.links.html.href |
| href | string | href | changes.old.target.parents.links.self.href |
| hash | string | hash | changes.old.target.parents.hash |
| href | string | href | changes.old.target.links.html.href |
| href | string | href | changes.old.target.links.self.href |
| name | string | name | changes.old.name |
| href | string | href | changes.old.links.commits.href |
| href | string | href | changes.old.links.html.href |
| href | string | href | changes.old.links.self.href |
| type | string | type | changes.new.type |
| raw | string | raw | changes.new.target.author.raw |
| date | date-time | date | changes.new.target.date |
| message | string | message | changes.new.target.message |
| hash | string | hash | changes.new.target.hash |
| type | string | type | changes.new.target.type |
| parents | array of object | parents | changes.new.target.parents |
| type | string | type | changes.new.target.parents.type |
| href | string | href | changes.new.target.parents.links.html.href |
| href | string | href | changes.new.target.parents.links.self.href |
| hash | string | hash | changes.new.target.parents.hash |
| href | string | href | changes.new.target.links.html.href |
| href | string | href | changes.new.target.links.self.href |
| name | string | name | changes.new.name |
| href | string | href | changes.new.links.commits.href |
| href | string | href | changes.new.links.html.href |
| href | string | href | changes.new.links.self.href |
| truncated | boolean | Indicate whether Bitbucket truncated the commits array in this payload. | changes.truncated |
| closed | boolean | Indicate whether the reference is old. | changes.closed |
| commits | array of object | commits | changes.commits |
| raw | string | raw | changes.commits.author.raw |
| date | date-time | date | changes.commits.date |
| message | string | message | changes.commits.message |
| hash | string | hash | changes.commits.hash |
| type | string | type | changes.commits.type |
| parents | array of object | parents | changes.commits.parents |
| type | string | type | changes.commits.parents.type |
| href | string | href | changes.commits.parents.links.html.href |
| href | string | href | changes.commits.parents.links.self.href |
| hash | string | hash | changes.commits.parents.hash |
| forced | boolean | Indicate whether the push was forced. | changes.forced |

### Repository


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| display name | string | The display name of the owner. | owner.display_name |
| type | string | The type of owner. | owner.type |
| username | string | The username of the owner. | owner.username |
| UUID | string | The universally unique identifier of the owner. | owner.uuid |
| name | string | The name of the repository. | name |
| SCM | string | The source control manager of the repository. | scm |
| website | string | The website of the repository. | website |
| UUID | string | The universally unique identifier of the repository. | uuid |
| full name | string | The full name of the repository. | full_name |
| is private | boolean | A boolean indicating if the repository is private. | is_private |
| type | string | The type of the repository. | type |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 30 seconds |


<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# GitHub

v1.0

GitHub is a web-based Git repository hosting service. It offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features.


# Actions

## Create an issue
Creates an issue

**Operation Id:** CreateIssue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Repository owner name | string | Repository owner | true |
| Repository name | string | Repository name | true |
| Issue title | string | Issue title | true |
| Issue body | string | Issue body | true |
| Issue assignee | string | Issue assignee | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [IssueDetailsModel](#issuedetailsmodel) | object | Issue details model |

___

# Triggers

## When a new issue is opened and assigned to me
An issue is opened and assigned

**Operation Id:** IssueOpened

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [IssueDetailsModel](#issuedetailsmodel) |  |

___

## When an issue assigned to me is closed
An assigned issue is closed

**Operation Id:** IssueClosed

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [IssueDetailsModel](#issuedetailsmodel) |  |

___

## When an issue is assigned to me
An issue is assigned

**Operation Id:** IssueAssigned

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [IssueDetailsModel](#issuedetailsmodel) |  |

___


## Objects

### IssueBasicDetailsModel
Issue details model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue title | string | Issue title | title |
| Issue body | string | Issue body | body |
| Issue assignee | string | Issue assignee | assignee |

### IssueDetailsModel
Issue details model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Issue title | string | Issue title | title |
| Issue body | string | Issue body | body |
| Issue assignee | string | Issue assignee | assignee |
| Issue identifier | string | Issue id | number |
| Issue state | string | Issue state | state |
| Issue created time | string | Issue created time | created_at |
| Repository url | string | Repository url | repository_url |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |


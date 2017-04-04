<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Pivotal Tracker (Preview)

v1.0.0

Pivotal Tracker is purpose-built to make it easy for you to convert an idea into a set of stories that you can prioritize, assign, and manage through completion.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Actions

## Create a story
This operation is used to create a new story.

**Operation Id:** CreateStory

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |
| Title | string |  | true |
| Description | string |  | false |
| Type | string | Pick a story type. | false |
| State | string | Pick a completion state. | false |
| Points | int32 | Point value of the story. | false |
| Acceptance Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | false |
| Due Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | false |
| Requestor Id | int32 | User id of the person who requested the story. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Story_Response](#story_response) | object |  |

___

## ListProjects
ListProjects

**Operation Id:** ListProjects

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Listprojects_Response](#listprojects_response) | array |  |

___

## Get a story
This operation retrieves all information about a story, given its id.

**Operation Id:** GetStory

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |
| Story Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Story_Response](#story_response) | object |  |

___

## Update a story
This operation is used to update the details of a story, given its id.

**Operation Id:** UpdateStory

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |
| Story Id | string |  | true |
| Title | string |  | false |
| Description | string |  | false |
| Type | string | Pick the story type. | false |
| State | string | Pick the completion state. | false |
| Points | int32 | Point value of the story. | false |
| Acceptance Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | false |
| Due Date-Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | false |
| Requestor Id | int32 | User id of the person who requested the story. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Story_Response](#story_response) | object |  |

___

## Delete a story
Deletes the specified story.

**Operation Id:** DeleteStory

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |
| Story Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

# Triggers

## When a new story is created
Triggers when a new story is added to the given project.

**Operation Id:** TrigStoryCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Liststories_Response](#liststories_response) | array |  |

___

## When a story is completed
Triggers when an existing story is completed in the given project.

**Operation Id:** TrigStoryCompleted

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Liststories_Response](#liststories_response) | array |  |

___

## When a story is updated
Triggers when a story is created or the details of an existing story are updated in the given project.

**Operation Id:** TrigStoryUpdated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Project Id | integer | Pick a project. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Liststories_Response](#liststories_response) | array |  |

___


## Objects

### Listprojects_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Account Id | int32 |  | account_id |
| Created Date/Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| Current Iteration Number | int32 |  | current_iteration_number |
| Enable Following | boolean | Allow users to follow stories and epics. | enable_following |
| Enable Incoming Emails | boolean | Allow incoming email responses and convert them to comments. | enable_incoming_emails |
| Enable Tasks | boolean | Allow individual tasks to be created and managed within each story in the project. | enable_tasks |
| Project Id | int32 |  | id |
| Initial Velocity | int32 |  | initial_velocity |
| Iteration Length | int32 | The number of weeks in an iteration. | iteration_length |
| Project Name | string |  | name |
| Point Scale | string |  | point_scale |
| Project Type | string |  | project_type |
| Is Public | boolean |  | public |
| Start Date/Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | start_time |
| Update Date/Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_at |
| Velocity Averaged Over | int32 | The number of iterations that should be used when averaging the number of points of Done stories in order to compute the project&#x27;s velocity. | velocity_averaged_over |
| Version | int32 |  | version |
| Week Start Day | string | The day in the week the project&#x27;s iterations are to start on. | week_start_day |

### Liststories_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Story_Response](#story_response) | object |  |  |

### Story_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Acceptance Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | accepted_at |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | created_at |
| State | string | Story&#x27;s state of completion. | current_state |
| Description | string | In-depth explanation of the story requirements. | description |
| Points | int32 | Point value of the story (feature story type only). | estimate |
| Story Id | int32 | The Id of the story. | id |
| Labels | array of object | Story labels. | labels |
| Label Id | int32 | The Id of the label. | labels.id |
| Label Name | string | The name of the label. | labels.name |
| Title | string | Story name. | name |
| owner_ids | array of string |  | owner_ids |
| Owner Id | string | Id of the owner. | owner_ids |
| Project Id | int32 | The Id of the project. | project_id |
| Requestor Id | int32 | The id of the person who requested the story. | requested_by_id |
| Story Type | string | Type of story. | story_type |
| Updated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | updated_at |
| URL | string | The URL of the story. | url |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


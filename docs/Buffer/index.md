<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Buffer (Preview)

v1.0.0

Buffer is a social media management for marketers and agencies. Access your pending and sent updates, social media profiles, and more.


# Actions

## Create an update
Create an update for a specific profile.

**Operation Id:** CreateUpdate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Profile ID | string | Profile | true |
| Text | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateUpdateResponse](#createupdateresponse) | object |  |

___

## Share an update
Share a pending update.

**Operation Id:** ShareUpdate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Profile ID | string | Profile | true |
| Update ID | string | Update | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ShareUpdateResponse](#shareupdateresponse) | object |  |

___

# Triggers

## When an update is pending
Triggers a new flow When an update is pending.

**Operation Id:** TrigPendingUpdates

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Profile ID | string | Profile | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListPendingUpdatesResponse](#listpendingupdatesresponse) | object |  |

___

## When an update is shared
Triggers a new flow When an update is shared.

**Operation Id:** TrigSentUpdates

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Profile ID | string | Profile | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListSentUpdatesResponse](#listsentupdatesresponse) | object |  |

___


## Objects

### ListProfilesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Avatar | string | The URL to the avatar of the profile. | avatar |
| Drafts | int32 | The number of draft updates. | counts.drafts |
| Reminders | int32 | The number of reminders. | counts.reminders |
| sent | int32 | The number of sent updates. | counts.sent |
| Pending | int32 | The number of pending updates. | counts.pending |
| IsDefault | boolean | A boolean value indicating if the profile is the default profile. | default |
| IsDisabled | boolean | A boolean value indicating if the profile is disabled. | disabled |
| IsDisconnected | boolean | A boolean value indicating if the profile is disconnected. | disconnected |
| Id | string | The id of the profile | id |
| IsLocked | boolean | A boolean value indicating if the profile is locked. | locked |
| service | string | The service connected to the profile. | service |
| Service Id | string | The id of the service connected to the profile. | service_id |
| Service Type | string | The type of service connected to the profile. | service_type |
| service_username | string | The username for the service connected to the profile. | service_username |
| Timezone | string | The selected timezone for the profile. | timezone |
| Timezone City | string | The city name corresponding to the selected timezone. | timezone_city |
| User Id | string | The id of the user who created the profile. | user_id |
| Label | string | A label consisting of the service connected to the profile, as well as the profile username. | dropdown_label |

### ListPendingUpdatesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| updates | array of object | updates | updates |
| Created At | int32 | The datetime the update was created at. | updates.created_at |
| Day | string | The text version of the date the update is due. | updates.day |
| Due At | int32 | The datetime when the update is due. | updates.due_at |
| Due Time | string | The time when the update is due. | updates.due_time |
| Id | string | The id of the update. | updates.id |
| Profile Id | string | The id of the profile associated with the update. | updates.profile_id |
| Profile Update | string | The service of the profile associated with the update. | updates.profile_service |
| IsSharedNow | boolean | A boolean value indicating if the update is shared. | updates.shared_now |
| Status | string | The status of the update. | updates.status |
| Text | string | The text of the update. | updates.text |
| Text Formatted | string | The formatted text of the update. | updates.text_formatted |
| Type | string | The type of update. | updates.type |
| Updated At | int32 | The datetime the update was updated.  | updates.updated_at |
| User Id | string | The id of the user. | updates.user_id |
| Via | string | How the update was created. | updates.via |

### ListSentUpdatesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| updates | array of object | updates | updates |
| Created At | int32 | The datetime the update was created at. | updates.created_at |
| Day | string | The text version of the date the update is due. | updates.day |
| Due At | int32 | The datetime when the update is due. | updates.due_at |
| Due Time | string | The time when the update is due. | updates.due_time |
| Id | string | The id of the update. | updates.id |
| Profile Id | string | The id of the profile associated with the update. | updates.profile_id |
| Profile Update | string | The service of the profile associated with the update. | updates.profile_service |
| IsSharedNow | boolean | A boolean value indicating if the update is shared. | updates.shared_now |
| Status | string | The status of the update. | updates.status |
| Text | string | The text of the update. | updates.text |
| Text Formatted | string | The formatted text of the update. | updates.text_formatted |
| Type | string | The type of update. | updates.type |
| Updated At | int32 | The datetime the update was updated.  | updates.updated_at |
| User Id | string | The id of the user. | updates.user_id |
| Via | string | How the update was created. | updates.via |
| Comments | int32 | The number of comments on the update. | updates.statistics.comments |
| Likes | int32 | The number of likes on the update. | updates.statistics.likes |
| Clicks | int32 | The number of clicks on the update. | updates.statistics.clicks |

### CreateUpdateRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Text | string | The text of the updated. | text |
| now | string | now | now |

### CreateUpdateResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| updates | array of object | updates | updates |
| Created At | int32 | The datetime the update was created at. | updates.created_at |
| Day | string | The text version of the date the update is due. | updates.day |
| Due At | int32 | The datetime when the update is due. | updates.due_at |
| Due Time | string | The time when the update is due. | updates.due_time |
| Id | string | The id of the update. | updates.id |
| Profile Id | string | The id of the profile associated with the update. | updates.profile_id |
| Profile Update | string | The service of the profile associated with the update. | updates.profile_service |
| IsSharedNow | boolean | A boolean value indicating if the update is shared. | updates.shared_now |
| Status | string | The status of the update. | updates.status |
| Text | string | The text of the update. | updates.text |
| Text Formatted | string | The formatted text of the update. | updates.text_formatted |
| Type | string | The type of update. | updates.type |
| Updated At | int32 | The datetime the update was updated.  | updates.updated_at |
| User Id | string | The id of the user. | updates.user_id |
| Via | string | How the update was created. | updates.via |

### ShareUpdateResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| IsSuccess | boolean | A boolean value indicating if the update was successfully shared. | success |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


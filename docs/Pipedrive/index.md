<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Pipedrive (Preview)

Pipedrive is a CRM &amp; pipeline management tool that helps you focus on actions that matter.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Actions

## Add deal
This operation creates a new deal for the authorized account.

**Operation Id:** AddDeal

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string | Title of the deal. | true |
| Stage Id | string | Stage of the deal. | false |
| Status | string | Status of the deal. | false |
| Value | int32 | Monetary value of the deal. | false |
| Currency | string | Currency of the deal. | false |
| Contact Id | string | User id of person the deal is associated with. | false |
| Organization Id | string | Id of the organization associated with the deal. | false |
| Expected Close Date | string | yyyy-MM-dd | false |
| Visiblity | string | Owner, followers or entire company. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DealResponse](#dealresponse) | object | data |

___

## Get deal by id
This operation retrieves all details of an existing deal, given its id.

**Operation Id:** GetDeal

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Deal Id | integer | Deal | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DealResponse](#dealresponse) | object | data |

___

## Update deal stage
This operation is used to update the stage associated with a deal, given its id.

**Operation Id:** UpdateDealStage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Deal Id | integer | Deal | true |
| Stage Id | string | Stage of the deal. | true |
| Expected Close Date | string | yyyy-MM-dd | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DealResponse](#dealresponse) | object | data |

___

## Update deal status
This operation is used to update the status associated with a deal, given its id.

**Operation Id:** UpdateDealStatus

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Deal Id | integer | Deal | true |
| Status | string | Status of the deal. | true |
| Lost Reason | string | Message about why the deal was lost. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DealResponse](#dealresponse) | object | data |

___

## Add activity
This operation is used to create a new activity for the authorized account.

**Operation Id:** AddActivity

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Type | string | Activity type. | true |
| Subject | string | Subject of the activity. | true |
| Due Date | string | YYYY-MM-DD | false |
| Due Time | string | HH:MM | false |
| Duration | string | HH:MM | false |
| Notes | string |  | false |
| Assigned to | int32 | Id of the user whom the activity will be assigned to. | false |
| Deal Id | int32 | ID of deal the activity will be associated with. | false |
| Contact Id | int32 | Id of person the activity will be associated with. | false |
| Organization Id | int32 | ID of the organization the activity will be associated with. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ActivityResponse](#activityresponse) | object | data |

___

# Triggers

## When a new activity is added
Triggers when a new activity is added to the authorized account.

**Operation Id:** TrigNewActivity

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ActivityResponse](#activityresponse) | object | data |

___

## When a new deal is added
Triggers when a new deal is added to the authorized account.

**Operation Id:** TrigNewDeal

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DealResponse](#dealresponse) | object | data |

___


## Objects

### AddActivityRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Type | string | Activity type. | type |
| Subject | string | Subject of the activity. | subject |
| Due Date | string | YYYY-MM-DD | due_date |
| Due Time | string | HH:MM | due_time |
| Duration | string | HH:MM | duration |
| Notes | string |  | note |
| Assigned to | int32 | Id of the user whom the activity will be assigned to. | user_id |
| Deal Id | int32 | ID of deal the activity will be associated with. | deal_id |
| Contact Id | int32 | Id of person the activity will be associated with. | person_id |
| Organization Id | int32 | ID of the organization the activity will be associated with. | org_id |

### AddDealRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Title of the deal. | title |
| Stage Id | string | Stage of the deal. | stage_id |
| Status | string | Status of the deal. | status |
| Value | int32 | Monetary value of the deal. | value |
| Currency | string | Currency of the deal. | currency |
| Contact Id | string | User id of person the deal is associated with. | person_id |
| Organization Id | string | Id of the organization associated with the deal. | org_id |
| Expected Close Date | string | yyyy-MM-dd | expected_close_date |
| Visiblity | string | Owner, followers or entire company. | visible_to |

### UpdateDealStageRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Stage Id | string | Stage of the deal. | stage_id |
| Expected Close Date | string | yyyy-MM-dd | expected_close_date |

### UpdateDealStatusRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Status | string | Status of the deal. | status |
| Lost Reason | string | Message about why the deal was lost. | lost_reason |

### ListActivityTypesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| success | boolean | success | success |
| data | array of object | data | data |
| id | int32 | id | data.id |
| name | string | name | data.name |

### ListDealsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object | data | data |
| id | int32 | id | data.id |
| title | string | title | data.title |

### ListPersonsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object | data | data |
| id | int32 | id | data.id |
| title | string | title | data.name |

### ListOrganizationsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object | data | data |
| id | int32 | id | data.id |
| title | string | title | data.name |

### TrigNewActivityResponse
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [ActivityResponse](#activityresponse) | object | data |  |

### ActivityResponse
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Activity Id | int32 | Unique id of the activity. | id |
| User Id | int32 | Id of the user whom the activity is assigned to. | user_id |
| Is Done | boolean | 0 &#x3D; Not done, 1 &#x3D; Done | done |
| Type | string | Type of the activity. | type |
| Due Date | string | YYYY-MM-DD | due_date |
| Due Time | string | HH:MM | due_time |
| Duration | string | HH:MM | duration |
| Subject | string | Subject of the activity. | subject |
| Deal Id | int32 | Id of deal the activity is associated with. | deal_id |
| Deal Title | string | Title of deal the activity is associated with. | deal_title |
| Organization Id | int32 | Id of organization the activity is associated with. | org_id |
| Organization Name | string | Name of organization the activity is associated with. | org_name |
| Contact Id | int32 | Id of person the activity is associated with. | person_id |
| Contact Name | string | Name of person the activity is associated with. | person_name |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | add_time |
| Updates Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | update_time |
| Completed Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | marked_as_done_time |
| Google Calendar Event Id | string | Id of the google calendar event. | gcal_event_id |
| Google Calendar Id | string | Id of the google calendar. | google_calendar_id |
| Note | string | Note of the activity (HTML format). | note |
| Assigned to | int32 | User id of user whom the activity is assigned to. | assigned_to_user_id |
| Created by | int32 | User id of user that created the activity. | created_by_user_id |
| Owner Name | string | Name of the activity owner. | owner_name |

### TrigNewDealResponse
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [DealResponse](#dealresponse) | object | data |  |

### DealResponse
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Deal Id | int32 | Id of the deal. | id |
| Id | int32 | Id of the deal creator. | creator_user_id.id |
| Name | string | Name of the deal creator. | creator_user_id.name |
| Email | string | Email of the deal creator. | creator_user_id.email |
| Id | int32 | Id of the deal owner. | user_id.id |
| Name | string | Name of the deal owner. | user_id.name |
| Email | string | Email of the deal owner. | user_id.email |
| Name | string | Name of the person associated with the deal. | person_id.name |
| Id | int32 | Id of the person associated with the deal. | person_id.value |
| Name | string | Name of the organization associated with the deal. | org_id.name |
| Id | int32 | Id of the organization associated with the deal. | org_id.value |
| Status | string | Open, won, lost or deleted. | status |
| Deal Title | string | Title of the deal. | title |
| Deal Value | int32 | Monetary value of the deal. | value |
| Currency | string | Currency associated with the deal value. | currency |
| Created Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | add_time |
| Updated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | update_time |
| Stage Id | int32 | ID of stage the deal is placed in a pipeline. | stage_id |
| Stage Name | string | Name of stage the deal is placed in a pipeline | stage_name |
| Stage Uodated Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | stage_change_time |
| Is Active | boolean | True if the deal is active. | active |
| Is Deleted | boolean | True if the deal has been deleted. | deleted |
| Next Activity Date | string | yyyy-MM-dd | next_activity_date |
| Next Activity Time | string | yyyy-MM-ddTHH:mm:ss.fffZ | next_activity_time |
| Next Activity Id | int32 | Id of the next activity. | next_activity_id |
| Last Activity Id | string | Id of the last activity. | last_activity_id |
| Last Activity Date | string | yyyy-MM-dd | last_activity_date |
| Lost Reason | string | Message about why the deal was lost (to be used when status&#x3D;lost). | lost_reason |
| Visiblity | string | Owner, followers or entire company. | visible_to |
| Closed Date-Time | date-time | yyyy-MM-ddTHH:mm:ss.fffZ | close_time |
| Pipeline Id | int32 | Id of pipeline the deal is associated with. | pipeline_id |
| Products Count | int32 | Number of products associated with the deal. | products_count |
| Files Count | int32 | Number of files associated with the deal. | files_count |
| Notes Count | int32 | Number of notes associated with the deal. | notes_count |
| Followers Count | int32 | Number of followers associated with the deal. | followers_count |
| Email Message Count | int32 | Number of email messages associated with the deal. | email_messages_count |
| Activities Count | int32 | Number of activities associated with the deal. | activities_count |
| Done Activities Count | int32 | Number of done activities associated with the deal. | done_activities_count |
| Undone Activities Count | int32 | Number of undone activitie associated with the deals. | undone_activities_count |
| Referenced Activities Count | int32 | Number of referenced activities associated with the deal. | reference_activities_count |
| Participants Count | int32 | Number of participants associated with the deal. | participants_count |
| Expected Close Date | string | yyyy-MM-dd | expected_close_date |
| Next Activity Subject | string | Subject of next activity associated with the deal. | next_activity_subject |
| Next Activity Type | string | Type of next activity associated with the deal. | next_activity_type |
| Next Activity Duration | string | Duration of next activity associated with the deal. | next_activity_duration |
| Next Activity Note | string | Notes for next activity associated with the deal | next_activity_note |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


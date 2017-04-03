![Icon](icon.png)

# GoToMeeting (Preview)

v1.0.0

GoToMeeting is an online meeting tool. You can schedule your own meetings or watch for the ones you are invited to.


# Actions

## List upcoming meetings
Returns upcoming meetings for the authenticated organizer.

**Operation Id:** GetUpcomingMeetings

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MeetingArray](#meetingarray) | array |  |

___

## Create a meeting
Create a new meeting based on the parameters specified.

**Operation Id:** CreateMeeting

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subject | string |  | true |
| Start time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | true |
| End time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | true |
| Requires password | boolean | Indicates whether the meeting requires a password | true |
| Conference call info | string | Conference call type (PSTN, Free, Hybrid, Private, VoIP) or a custom value | true |
| Meeting type | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewMeetingResponse](#newmeetingresponse) | object |  |

___

## Get a meeting
Returns the meeting details for the specified meeting.

**Operation Id:** GetMeeting

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Meeting Id | string | Select or enter a meeting Id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Meeting](#meeting) | object | Represents a meeting |

___

## Update a meeting
Updates an existing meeting specified by meetingId.

**Operation Id:** UpdateMeeting

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Meeting Id | string | Select or enter a meeting Id | true |
| Subject | string |  | true |
| Start time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | true |
| End time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | true |
| Requires password | boolean | Indicates whether the meeting requires a password | true |
| Conference call info | string | Conference call type (PSTN, Free, Hybrid, Private, VoIP) or a custom value | true |
| Meeting type | string |  | false |

#### Returns
This operation does not return anything.

___

## Get meeting attendees
Returns a list of attendees for a meeting with the given ID.

**Operation Id:** GetMeetingAttendees

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Meeting Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AttendeeArray](#attendeearray) | array |  |

___

# Triggers

## When a meeting is created
Triggers a flow when a new meeting is created

**Operation Id:** OnNewMeeting

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MeetingArray](#meetingarray) | array |  |

___

## When a meeting ends
Triggers when a meeting ends.

**Operation Id:** OnMeetingComplete

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MeetingArray](#meetingarray) | array |  |

___


## Objects

### Meeting
Represents a meeting

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Subject | string | The subject of the meeting. | subject |
| Start time | date-time | The start time of the meeting, in yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z). | startTime |
| End time | date-time | The end time of the meeting, in yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z). | endTime |
| Organizer first name | string | The first name of the meeting organizer. | firstName |
| Organizer last name | string | The last name of the meeting organizer. | lastName |
| Organizer email | string | The email address of the meeting organizer. | email |
| Conference call info | string | Audio options for the meeting. | conferenceCallInfo |
| Requires password | string | Indicates whether the meeting requires a password. | passwordRequired |
| Status | string |  | status |
| Location code | string | Indicates the location and language of the meeting. | locale |
| Meeting Id | string | The id of the meeting. | meetingId |
| Meeting type | string | The meeting type, such as immediate, recurring or scheduled. | meetingType |

### MeetingArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Subject | string | The subject of the meeting. | subject |
| Start time | date-time | The start time of the meeting, in yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z). | startTime |
| End time | date-time | The end time of the meeting, in yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z). | endTime |
| Organizer first name | string | The first name of the meeting organizer. | firstName |
| Organizer last name | string | The last name of the meeting organizer. | lastName |
| Organizer email | string | The email address of the meeting organizer. | email |
| Conference call info | string | Audio options for the meeting. | conferenceCallInfo |
| Requires password | string | Indicates whether the meeting requires a password. | passwordRequired |
| Status | string |  | status |
| Location code | string | Indicates the location and language of the meeting. | locale |
| Meeting Id | string | The id of the meeting. | meetingId |
| Meeting type | string | The meeting type, such as immediate, recurring or scheduled. | meetingType |

### MeetingRequest
Model used to create a meeting

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Subject | string |  | subject |
| Start time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | starttime |
| End time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | endtime |
| Requires password | boolean | Indicates whether the meeting requires a password | passwordrequired |
| Conference call info | string | Conference call type (PSTN, Free, Hybrid, Private, VoIP) or a custom value | conferencecallinfo |
| Meeting type | string |  | meetingtype |

### NewMeetingResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Join URL | string | A URL that can be used to join the meeting | joinURL |
| Meeting Id | int32 | The id of the meeting. | meetingid |
| Max participants | int32 | The maximum number of participants allowed in the meeting. | maxParticipants |
| Conference call info | string | Audio options for the meeting. | conferenceCallInfo |

### UpdateMeeting
Model used to update a meeting

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Subject | string |  | subject |
| Start time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | starttime |
| End time | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | endtime |
| Requires password | boolean | Indicates whether the meeting requires a password | passwordrequired |
| Conference call info | string | Conference call type (PSTN, Free, Hybrid, Private, VoIP) or a custom value | conferencecallinfo |
| Meeting type | string |  | meetingtype |

### Attendee


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Group name | string | The group the attendee belongs to. | groupName |
| Name | string | The name of the attendee. | attendeeName |
| Join time | date-time | The time the attendee joined the meeting. | joinTime |
| Leave time | date-time | The time the attendee left the meeting. | leaveTime |
| Attendee email | string | The email address of the attendee. | attendeeEmail |

### AttendeeArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Attendee](#attendee) | object |  |  |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |
| Frequency of trigger polls | 1 | 120 seconds |


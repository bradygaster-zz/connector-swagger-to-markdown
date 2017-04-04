<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Eventbrite (Preview)

v1.0.0

Eventbrite is a self-service ticketing platform used to create and discover local events.


# Actions

## Create event
Create a new Eventbrite event.

**Operation Id:** CreateEvent

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | The name of the event. | true |
| Description | string | The description on the event page. | true |
| Start | string | Start time (UTC format Ex. &quot;2017-01-12T13:45:30Z&quot;). | true |
| End | string | End time (UTC format Ex. 2017-01-12T16:45:30Z). | true |
| Start timezone | string | Timezone of the event. | true |
| End timezone | string | Timezone of the event. | true |
| Event currency | string | Currency for this Event&#x27;s transactions. | true |
| Organizer | string | The ID of the organizer of this event. | false |
| Venue | string | A previously-created venue to associate with this event. | false |
| Category | string | The category of the event. | false |
| Password | string | Password needed to see the event in unlisted mode. | false |
| Capacity | string | Set specific capacity (if omitted, sums ticket capacities). | false |
| Shareable | boolean | If users can share the event on social media. | false |
| Invite Only | boolean | Only invited users can see the event page. | false |
| Online Event | boolean | Whether the event is online-only (no venue). | false |
| Listed | boolean | If the event is publicly listed and searchable. | false |
| Hide start date | boolean | Whether the start date should be hidden. | false |
| Hide end date | boolean | Whether the end date should be hidden. | false |
| Show Remaining | boolean | If the remaining number of tickets is publicly visible on the event page. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateEvent_Response](#createeventresponse) | object |  |

___

## Update event
Update an existing event.

**Operation Id:** UpdateEvent

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Event | string | Event to update. | true |
| Name | string | The name of the event. | false |
| Description | string | The description on the event page. | false |
| Start | string | Start time (UTC format Ex. &quot;2017-01-12T13:45:30Z&quot;). | false |
| End | string | End time (UTC format Ex. 2017-01-12T16:45:30Z). | false |
| Start timezone | string | Timezone of the event. | false |
| End timezone | string | Timezone of the event. | false |
| Event currency | string | Currency for this Event&#x27;s transactions. | false |
| Organizer | string | The ID of the organizer of this event. | false |
| Venue | string | A previously-created venue to associate with this event. | false |
| Category | string | The category of the event. | false |
| Password | string | Password needed to see the event in unlisted mode. | false |
| Capacity | string | Set specific capacity (if omitted, sums ticket capacities). | false |
| Shareable | boolean | Set specific capacity (if omitted, sums ticket capacities). | false |
| Invite Only | boolean | Only invited users can see the event page. | false |
| Online Event | boolean | Whether the event is online-only (no venue). | false |
| Listed | boolean | If the event is publicly listed and searchable. | false |
| Hide start date | boolean | Whether the start date should be hidden. | false |
| Hide end date | boolean | Whether the start date should be hidden. | false |
| Show Remaining | boolean | If the remaining number of tickets is publicly visible on the event page. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateEvent_Response](#createeventresponse) | object |  |

___

# Triggers

## When an event is created
Triggers a flow when an organizer has a new event.

**Operation Id:** OnNewEvent

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Organizer | string | Organizer to trigger on new events. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetEventsForOrganizer_Response](#geteventsfororganizerresponse) | array |  |

___

## When an order changes
Trigger a flow when an order changes.

**Operation Id:** OnOrderChanged

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Event | string | Event to trigger on changed order. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetOrders_Response](#getordersresponse) | array |  |

___


## Objects

### GetOrganizers_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Organizer | array of object |  | organizers |
| Id | string | The id of the organizer. | organizers.id |
| Name | string | The name of the organizer. | organizers.name |

### GetMyVenues_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Venue | array of object |  | venues |
| Id | string | The id of the venue. | venues.id |
| Name | string | The name of the venue. | venues.name |

### GetEventsForOrganizer_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The name of the event (in text form). | name.text |
| Description | string | The description of the event (in text form). | description.text |
| Id | string | The id of the event. | id |
| URL | string | The URL of the event. | url |
| Timezone | string | The timezone of the start of the event. | start.timezone |
| local | date-time | The start date-time of the event in local time. | start.local |
| UTC | date-time | The start date-time of the event in UTC. | start.utc |
| Timezone | string | The timezone of the end of the event. | end.timezone |
| local | date-time | The end date-time of the event in local time. | end.local |
| UTC | date-time | The end date-time of the event in UTC. | end.utc |
| Created Date-Time | date-time | The date-time the event was created at. | created |
| Chaged Date-Time | date-time | The date-time the event was changed at. | changed |
| Capacity | int32 | The capacity of the event. | capacity |
| Is Online Event | boolean | A boolean indicating whether or not the event is online. | online_event |
| Organizer Id | string | The id of the organizer of the event. | organizer_id |
| Venue Id | string | The id of the venue of the event. | venue_id |
| Category Id | string | The id of the category of the event. | category_id |

### GetOrders_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the order. | id |
| Name | string | The name of the order. | name |
| First Name | string | The first name on the order. | first_name |
| Last Name | string | The last name on the order. | last_name |
| Email | string | The email on the order. | email |
| Status | string | The status of the order. | status |

### GetMyEvents_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| events | array of object |  | events |
| Name | string | The name of the event (in text form). | events.name.text |
| Id | string | The id of the event. | events.id |

### GetCategories_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| categories | array of object |  | categories |
| Id | string | The id of the category. | categories.id |
| Name | string | The name of the category. | categories.name |

### CreateEvent_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The name of the event (in text form). | name.text |
| Description | string | The description of the event. | description.text |
| Id | string | The id of the event. | id |
| URL | string | The URL of the event. | url |
| Timezone | string | The timezone of the start of the event. | start.timezone |
| local | date-time | The start date-time of the event in local time. | start.local |
| UTC | date-time | The start date-time of the event in UTC. | start.utc |
| Timezone | string | The timezone of the end of the event. | end.timezone |
| local | date-time | The end date-time of the event in local time. | end.local |
| UTC | date-time | The end date-time of the event in UTC. | end.utc |
| Created Date-Time | date-time | The date-time the event was created at. | created |
| Chaged Date-Time | date-time | The date-time the event was changed at. | changed |
| Capacity | int32 | The capacity of the event. | capacity |
| Is Online Event | boolean | A boolean indicating whether or not the event is online. | online_event |
| Organizer Id | string | The id of the organizer of the event. | organizer_id |
| Venue Id | string | The id of the venue of the event. | venue_id |
| Category Id | string | The id of the category of the event. | category_id |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


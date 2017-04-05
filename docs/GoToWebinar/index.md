<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# GoToWebinar (Preview)

Citrix GoToWebinar enables you to manage a stable and high-performance online webinar environment.


# Actions

## Get webinar
Retrieves all information about a scheduled webinar.

**Operation Id:** GetWebinar

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Webinar key | string | The key of the Webinar. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Webinar](#webinar) | object |  |

___

## List registrants
Retrieves a list of all registrants for a specific webinar.

**Operation Id:** ListRegistrations

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Webinar key | string | The key of the Webinar. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrants](#registrants) | array |  |

___

## Add registrant
Registers one person, identified by a unique email address, for a webinar.

**Operation Id:** AddRegistrant

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Webinar key | string | The key of the Webinar. | true |
| Email | string | Registrant&#x27;s email address. | false |
| First name | string | Registrant&#x27;s first name. | false |
| Last name | string | Registrant&#x27;s last name. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RegistrationResult](#registrationresult) | object |  |

___

## Get Registrant
Retrieves details of a specific registrant in a webinar.

**Operation Id:** GetRegistrant

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Webinar key | string | The key of the Webinar. | true |
| Registrant key | string | They key of the registrant. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrant](#registrant) | object |  |

___

## List Webinars
Retrieves a list of all webinars for the authenticated user.

**Operation Id:** ListWebinars

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Webinars](#webinars) | array |  |

___

# Triggers

## When a webinar is created
Triggers when a new webinar is created.

**Operation Id:** OnNewWebinar

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Webinars](#webinars) | array |  |

___

## When a registrant is added
Triggers when a new registrant is added to a webinar.

**Operation Id:** OnNewRegistration

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Webinar key | string | The key of the Webinar. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrants](#registrants) | array |  |

___


## Objects

### Webinars


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [WebinarSummary](#webinarsummary) | object |  |  |

### Webinar


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Webinar key | string | Unique key of the webinar. | webinarKey |
| Registration click count | int32 | Number of registration link clicks. | numberOfRegistrationLinkClicks |
| times | array of object |  | times |
| Start date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.startTime |
| End date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.endTime |
| Registrant count | int32 | Number of registrants at the webinar. | numberOfRegistrants |
| Webinar Id | string | 9-digit unique id of the webinar. | webinarID |
| Subject | string | Webinar&#x27;s subject. | subject |
| Description | string | Webinar&#x27;s short description. | description |
| Time Zone | string | Where the webinar is taking place. | timeZone |
| In session | boolean | True is webinar is currently in progress. | inSession |
| Organizer Key | int32 | Unique key of the webinar organizer. | organizerKey |
| Registration Url | string | Url the invitees can use to register. | registrationUrl |
| Number of opened invitations | int32 | Number of recipients who opened the invitation email to register for the webinar. | numberOfOpenedInvitations |

### WebinarSummary


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Webinar key | string | Unique key of the webinar. | webinarKey |
| times | array of object |  | times |
| Start date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.startTime |
| End date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.endTime |
| Registrant count | int32 | Number of registrants at the webinar. | numberOfRegistrants |
| Webinar Id | string | 9-digit unique id of the webinar. | webinarID |
| Subject | string | Webinar&#x27;s subject. | subject |
| Description | string | Webinar&#x27;s short description. | description |
| Time Zone | string | Where the webinar is taking place. | timeZone |
| In Session | boolean | True is webinar is currently in progress. | inSession |
| Organizer Key | int32 | Unique key of the webinar organizer. | organizerKey |
| Registration Url | string | Url the invitees can use to register. | registrationUrl |

### Registrants


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [RegistrantSummary](#registrantsummary) | object |  |  |

### Registrant


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| First name | string | Registrant&#x27;s first name. | firstName |
| Last name | string | Registrant&#x27;s last name. | lastName |
| Unsubscribed | boolean | True if the registrant opted-out from receiving other emails from the webinar&#x27;s organizer. | unsubscribed |
| Registration date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | registrationDate |
| Time zone | string | Where the webinar will take place. | timeZone |
| responses | array of object |  | responses |
| Registration question | string | Custom question for registering. | responses.question |
| Registration answer | string | Custom answer for registring. | responses.answer |
| Join Url | string | Url the registrant will use to join the webinar. | joinUrl |
| Type | string | Sequence or one session. | type |
| Registrant Key | string | Unique key of the registrant. | registrantKey |
| Email | string | Registrant&#x27;s email address. | email |
| Status | string | Approved, denied or waiting. | status |

### RegistrantSummary


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| First name | string | Registrant&#x27;s first name. | firstName |
| Last name | string | Registrant&#x27;s last name. | lastName |
| Registration date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | registrationDate |
| Time zone | string | Where the webinar will take place. | timeZone |
| Join Url | string | Url the registrant will use to join the webinar. | joinUrl |
| Registrant Key | string | Unique key of the registrant. | registrantKey |
| Email | string | Registrant&#x27;s email address. | email |
| Status | string | Approved, denied or waiting. | status |

### NewRegistrant


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email | string | Registrant&#x27;s email address. | email |
| First name | string | Registrant&#x27;s first name. | firstName |
| Last name | string | Registrant&#x27;s last name. | lastName |

### RegistrationResult


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Registrant Key | string | Unique key of the registrant. | registrantKey |
| Join Url | string | Url the registrant will use to join the webinar. | joinUrl |
| Status | string | Approved, denied or waiting. | status |
| Description | string | Registrant&#x27;s description. | description |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |


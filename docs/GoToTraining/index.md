<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# GoToTraining (Preview)

v1.0.0

Citrix GoToTraining enables you to manage a stable and high-performance online training environment.

## Creating a connection

To use this integration, you will need an account with GoToTraining. If you are not a user yet,  [sign up](https://www.gotomeeting.com/training) for a new account.
When trying to make a connection, you will be prompted to authenticate against your GoToTraining account. Enter your Username and Password to **Sign in**.
 
Once verified, you will need to authorize Microsoft to access your Medium profile. Click on **Allow** to continue. 

You’re now ready to start using the integration.



# Actions

## Get training
Retrieves all information about a scheduled training.

**Operation Id:** GetTraining

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Training Id | string | Training | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Training](#training) | object |  |

___

## List registrants
Retrieves details of all registrants for a specific training.

**Operation Id:** ListRegistrations

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Training Id | string | Training | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrants](#registrants) | array |  |

___

## Add registrant
Registers one person, identified by a unique email address, for a training.

**Operation Id:** AddRegistrant

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Training Id | string | Training | true |
| Registrant email | string | Registrant email | false |
| First name | string | First name | false |
| Last name | string | Last name | false |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Join Url | string | Url link to join the meeting. | joinUrl |
| Confirmation Url | string | Url link for rsvp. | confirmationUrl |
| Registrant Key | string | Unique identifier of the registrant. | registrantKey |

___

## Get Registrant
Retrieves details of a specific registrant in a training.

**Operation Id:** GetRegistrant

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Training Id | string | Training | true |
| Registrant key | string | Registrant key | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrant](#registrant) | object |  |

___

# Triggers

## When a training is created
Triggers when a new training is created.

**Operation Id:** OnNewTraining

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Trainings](#trainings) | array |  |

___

## When a registrant is added
Triggers when a registrant is added to a training.

**Operation Id:** OnNewRegistration

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Training Id | string | Training | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Registrants](#registrants) | array |  |

___


## Objects

### Trainings


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Training](#training) | object |  |  |

### Training


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Training Id | string | Unique identifier of the training. | trainingId |
| Title | string | Subject of the training. | name |
| Time Zone | string | Where the training will take place. | timeZone |
| times | array of object |  | times |
| Start date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.startDate |
| End date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | times.endDate |
| organizers | array of object |  | organizers |
| First Name | string | Organizer&#x27;s first name. | organizers.givenName |
| Last Name | string | Organizer&#x27;s last name. | organizers.surname |
| Email | string | Organizer&#x27;s email. | organizers.email |
| Organizer key | string | Unique identifier of the organizer | organizers.organizerKey |
| Training Key | string | Unique key of the training. | trainingKey |

### Registrants


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Registrant](#registrant) | object |  |  |

### Registrant


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email | string | Registrant&#x27;s email. | email |
| First name | string | Registrant&#x27;s first name. | givenName |
| Last name | string | Registrant&#x27;s last name. | surname |
| Status | string | Registrant&#x27;s rsvp status. | status |
| Registration date-time | date-time | YYYY-MM-DDThh:mm:ssZ (UTC format) | registrationDate |
| Join Url | string | Link to use by the registrant to join a training. | joinUrl |
| Confirmation Url | string | Link to use by the registrant to rsvp for a training. | confirmationUrl |
| Registrant Key | string | Unique key of the registrant. | registrantKey |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |

